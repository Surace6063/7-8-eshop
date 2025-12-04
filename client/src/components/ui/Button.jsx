import { cn } from "../../libs/utils";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  ref,
  ...props
}) => {
  const baseClassName = cn(
    "rounded-full cursor-pointer transition-all inline-flex items-center justify-center",
    disabled && "opacity-50 cursor-not-allowed"
  );

  const variants = {
    primary: "bg-primary hover:bg-primary/60 text-white shadow",
    secondary: "bg-slate-800 hover:bg-slate/60 text-white",
    ghost: "text-primary hover:underline",
    outline: "border border-pink-500 text-primary hover:bg-pink-50/50",
    icon: "rounded-full border border-gray-300 hover:bg-gray-100 transition"
  };

  const sizes = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
    icon: "p-2"
  };

  return (
    <button
      className={cn(baseClassName, variants[variant], sizes[size], className)}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;