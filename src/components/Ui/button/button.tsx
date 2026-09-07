import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./varient";
import { cn } from "@/shared/lib/utils";
import { Loader } from "lucide-react";
interface IbuttonProps
  extends ButtonPrimitive.Props, VariantProps<typeof buttonVariants> {
  isloading?: boolean;
}
function Button({
  className,
  variant = "default",
  size = "default",
  disabled,
  isloading =  false,
  children,
  ...props
}: IbuttonProps) {
  return (
    <ButtonPrimitive
      data-slot="button" disabled={isloading ||  disabled}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isloading ? <Loader className="animate-spin  size-4 text-gray-500 "/> : children  }
      </ButtonPrimitive>
  );
}

export { Button };
