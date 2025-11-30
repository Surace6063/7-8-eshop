import { cn } from "../../libs/utils";

// Define variant styles
const inputVariants = {
  variant: {
    default: "border border-gray-300 bg-white focus:ring-1 focus:ring-gray-800",
    outline: "border border-gray-400 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    ghost: "border-none bg-gray-100 focus:ring-2 focus:ring-blue-500",
  },
  size: {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-3 text-base",
  },
};

const Input = ({
  label,
  id,
  error,
  className,
  wrapperClass,
  variant = "default",
  size = "md",
  ...props
}) => {
  return (
   <div className={cn("flex flex-col w-full gap-1", wrapperClass)}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-800 mb-1">
          {label}
        </label>
      )}

      <input
        id={id}
        className={cn(
          "rounded-full placeholder:text-gray-400 placeholder:text-xs focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
          inputVariants.variant[variant],
          inputVariants.size[size],
          error && "border-red-500 focus:ring-0 text-red-500",
          className
        )}
        {...props}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
export default Input