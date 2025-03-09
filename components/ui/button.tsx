import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex font-semibold items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:ring-2 focus-visible:ring-yellow-200 aria-invalid:ring-red-200 dark:aria-invalid:ring-red-300/40 aria-invalid:border-red-300",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-md hover:shadow-lg hover:from-yellow-400 hover:to-yellow-500",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:shadow-lg hover:from-red-400 hover:to-red-500",
        outline:
          "border-2 border-yellow-200 bg-white text-yellow-700 shadow-sm hover:border-yellow-300 hover:bg-yellow-50",
        secondary:
          "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 shadow-sm hover:from-yellow-200 hover:to-yellow-300",
        ghost: "text-yellow-700 hover:bg-yellow-50 hover:text-yellow-800",
        link: "text-yellow-600 underline-offset-4 hover:text-yellow-700 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-9 rounded-lg gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-11 rounded-xl px-7 has-[>svg]:px-5",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        "cursor-pointer",
        buttonVariants({ variant, size, className }),
        isLoading && "cursor-wait opacity-70",
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <svg
            className="size-4 animate-[spin_0.6s_ease-in-out_infinite]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3C16.9706 3 21 7.02944 21 12"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="opacity-40"
            />
            <path
              d="M21 12C21 16.9706 16.9706 21 12 21"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="opacity-60"
            />
            <path
              d="M12 21C7.02944 21 3 16.9706 3 12"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="opacity-80"
            />
            <path
              d="M3 12C3 7.02944 7.02944 3 12 3"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
