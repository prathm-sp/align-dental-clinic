/**
 * Asset processing — logo, clinic photos, doctor portrait, and patient results.
 * Run: node scripts/process-assets.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const clientDir = path.join(root, "client_details");
const newImagesDir = path.join(clientDir, "New images");
const publicDir = path.join(root, "public");
const imagesDir = path.join(publicDir, "images");

fs.mkdirSync(imagesDir, { recursive: true });

async function toWebp(inputPath, outputPath, { width = 1600, quality = 88 } = {}) {
  if (!fs.existsSync(inputPath)) {
    console.warn(`⚠ Skipped (not found): ${path.basename(inputPath)}`);
    return false;
  }

  await sharp(inputPath)
    .rotate()
    .resize(width, null, { withoutEnlargement: true, fit: "inside" })
    .webp({ quality })
    .toFile(outputPath);

  console.log(`✓ ${path.basename(outputPath)}`);
  return true;
}

async function toHeroWebp(
  inputPath,
  outputPath,
  { aspectWidth, aspectHeight, position = "centre", width = 1400, quality = 90 } = {},
) {
  if (!fs.existsSync(inputPath)) {
    console.warn(`⚠ Skipped (not found): ${path.basename(inputPath)}`);
    return false;
  }

  const height = Math.round((width * aspectHeight) / aspectWidth);

  await sharp(inputPath)
    .rotate()
    .resize(width, height, { fit: "cover", position })
    .webp({ quality })
    .toFile(outputPath);

  console.log(`✓ ${path.basename(outputPath)} (hero crop)`);
  return true;
}

async function processLogo() {
  const logoSrc = path.join(clientDir, "Align.jpg.jpeg");
  await toWebp(logoSrc, path.join(publicDir, "logo.webp"), { width: 400, quality: 90 });
}

async function processNewPhotos() {
  const photos = [
    {
      src: "IMG_8450.JPG.jpeg",
      out: "clinic-reception.webp",
      width: 1800,
      desc: "Reception & waiting area",
    },
    {
      src: "IMG_8451.JPG.jpeg",
      out: "clinic-treatment-room.webp",
      width: 1800,
      desc: "Treatment room",
    },
    {
      src: "IMG_8455.JPG.jpeg",
      out: "clinic-treatment-room-wide.webp",
      width: 1800,
      desc: "Treatment room (wide view)",
    },
    {
      src: "IMG_8456.JPG.jpeg",
      out: "clinic-exterior.webp",
      width: 1800,
      desc: "Clinic entrance",
    },
    {
      src: "IMG_8343.JPG.jpeg",
      out: "doctor-portrait.webp",
      width: 1200,
      desc: "Dr. Mestry portrait",
    },
    {
      src: "2140e204-4181-404a-87b2-481173ba77bf.jpg",
      out: "result-before-after-1.webp",
      width: 1400,
      desc: "Smile transformation 1",
    },
    {
      src: "b14ffb5f-ae97-46d4-93e1-849aded547ba.jpg",
      out: "result-before-after-2.webp",
      width: 1400,
      desc: "Smile transformation 2",
    },
    {
      src: "d0299897-f675-478b-a1d4-92791f72b4eb.jpg",
      out: "result-before-after-3.webp",
      width: 1400,
      desc: "Smile transformation 3",
    },
  ];

  console.log("\nProcessing new photos from client_details/New images/...\n");

  for (const photo of photos) {
    await toWebp(
      path.join(newImagesDir, photo.src),
      path.join(imagesDir, photo.out),
      { width: photo.width },
    );
  }
}

async function processHeroPhotos() {
  const heroPhotos = [
    {
      src: "IMG_8455.JPG.jpeg",
      out: "hero-treatment-room.webp",
      aspectWidth: 3,
      aspectHeight: 4,
      position: "centre",
      desc: "Treatment room (hero)",
    },
    {
      src: "IMG_8450.JPG.jpeg",
      out: "hero-reception.webp",
      aspectWidth: 4,
      aspectHeight: 3,
      position: "south",
      desc: "Reception (hero)",
    },
    {
      src: "IMG_8456.JPG.jpeg",
      out: "hero-exterior.webp",
      aspectWidth: 4,
      aspectHeight: 3,
      position: "north",
      desc: "Clinic entrance (hero)",
    },
  ];

  console.log("\nProcessing hero photos from client_details/New images/...\n");

  for (const photo of heroPhotos) {
    await toHeroWebp(path.join(newImagesDir, photo.src), path.join(imagesDir, photo.out), {
      aspectWidth: photo.aspectWidth,
      aspectHeight: photo.aspectHeight,
      position: photo.position,
    });
  }
}

async function processPdfFallback() {
  const treatmentPath = path.join(imagesDir, "clinic-treatment-room.webp");
  const receptionPath = path.join(imagesDir, "clinic-reception.webp");

  if (fs.existsSync(treatmentPath) && fs.existsSync(receptionPath)) {
    return;
  }

  console.log("\nFalling back to brochure PDF crops...\n");

  const page2 =
    [path.join(clientDir, "page_2_hires.png"), path.join(clientDir, "page_2.png")].find((p) =>
      fs.existsSync(p),
    );

  if (!page2) {
    console.warn("⚠ PDF page image not found for fallback");
    return;
  }

  const { width = 1259, height = 1786 } = await sharp(page2).metadata();

  const treatmentCrop = {
    left: Math.round(width * 0.062),
    top: Math.round(height * 0.223),
    width: Math.round(width * 0.405),
    height: Math.round(height * 0.238),
  };

  const receptionCrop = {
    left: Math.round(width * 0.532),
    top: Math.round(height * 0.223),
    width: Math.round(width * 0.405),
    height: Math.round(height * 0.238),
  };

  const trimBorder = async (crop, output) => {
    const inset = 16;
    await sharp(page2)
      .extract(crop)
      .extract({
        left: inset,
        top: inset,
        width: crop.width - inset * 2,
        height: crop.height - inset * 2,
      })
      .webp({ quality: 90 })
      .toFile(output);
  };

  if (!fs.existsSync(treatmentPath)) {
    await trimBorder(treatmentCrop, treatmentPath);
    console.log("✓ clinic-treatment-room.webp (PDF fallback)");
  }

  if (!fs.existsSync(receptionPath)) {
    await trimBorder(receptionCrop, receptionPath);
    console.log("✓ clinic-reception.webp (PDF fallback)");
  }
}

async function generateOgImage() {
  const logoPath = path.join(publicDir, "logo.webp");
  if (!fs.existsSync(logoPath)) return;

  const logoBuffer = await sharp(logoPath).resize(300, null).toBuffer();

  const svgBackground = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FAF7F2"/>
          <stop offset="100%" style="stop-color:#F0EBE3"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <text x="600" y="420" text-anchor="middle" font-family="Georgia, serif" font-size="36" fill="#152d4a">
        Modern Dental Care in Ahilyanagar
      </text>
      <text x="600" y="470" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#152d4a" opacity="0.6">
        Dr. Aishwarya Mestry · BDS, MDS
      </text>
    </svg>
  `;

  await sharp(Buffer.from(svgBackground))
    .composite([{ input: logoBuffer, top: 140, left: 450 }])
    .webp({ quality: 90 })
    .toFile(path.join(imagesDir, "og-image.webp"));
  console.log("✓ og-image.webp");
}

async function generateIcons() {
  const logoPath = path.join(publicDir, "logo.webp");
  if (!fs.existsSync(logoPath)) return;

  const sizes = [
    { size: 192, name: "icon-192.png" },
    { size: 512, name: "icon-512.png" },
  ];

  console.log("\nGenerating PWA icons...\n");

  for (const { size, name } of sizes) {
    await sharp(logoPath)
      .resize(size, size, {
        fit: "contain",
        background: { r: 21, g: 45, b: 74, alpha: 1 },
      })
      .png()
      .toFile(path.join(publicDir, name));
    console.log(`✓ ${name}`);
  }
}

async function main() {
  console.log("Processing assets...\n");
  await processLogo();
  await processNewPhotos();
  await processHeroPhotos();
  await processPdfFallback();
  await generateOgImage();
  await generateIcons();
  console.log("\nDone!");
}

main().catch((err) => {
  console.error("Asset processing failed:", err);
  process.exit(1);
});
