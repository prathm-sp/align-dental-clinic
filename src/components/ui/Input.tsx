import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-xl border border-navy/10 bg-cream px-4 py-3 text-navy placeholder:text-navy/40 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full resize-none rounded-xl border border-navy/10 bg-cream px-4 py-3 text-navy placeholder:text-navy/40 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20",
      className,
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";

export const Label = ({
  className,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label
    className={cn("mb-1.5 block text-sm font-medium text-navy/80", className)}
    {...props}
  >
    {children}
  </label>
);

export const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "w-full rounded-xl border border-navy/10 bg-cream px-4 py-3 text-navy transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20",
      className,
    )}
    {...props}
  >
    {children}
  </select>
));

Select.displayName = "Select";

export const FormError = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-600">{message}</p>;
};
