"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-[#faf6ef] px-4 font-sans text-[#152d4a]">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-semibold">Something went wrong</h1>
          <p className="mt-4 text-[#3d5a78]">
            Align Dental Clinic encountered an unexpected error.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-full bg-[#152d4a] px-8 py-4 font-semibold text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
