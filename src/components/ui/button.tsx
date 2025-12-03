import * as React from "react"
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react"

interface ButtonProps extends Omit<ChakraButtonProps, 'variant' | 'size'> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", ...props }, ref) => {
    // Map shadcn variants to Chakra variants
    const chakraVariant = 
      variant === "default" ? "solid" :
      variant === "destructive" ? "solid" :
      variant === "outline" ? "outline" :
      variant === "secondary" ? "solid" :
      variant === "ghost" ? "ghost" :
      variant === "link" ? "link" : "solid"
    
    // Map shadcn sizes to Chakra sizes
    const chakraSize = 
      size === "default" ? "md" :
      size === "sm" ? "sm" :
      size === "lg" ? "lg" :
      size === "icon" ? "md" : "md"
    
    // Set colorScheme based on variant
    const colorScheme = 
      variant === "destructive" ? "red" :
      variant === "secondary" ? "gray" :
      "blue"

    return (
      <ChakraButton
        ref={ref}
        size={chakraSize}
        colorScheme={colorScheme}
        w={size === "icon" ? "36px" : undefined}
        h={size === "icon" ? "36px" : undefined}
        minW={size === "icon" ? "36px" : undefined}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
