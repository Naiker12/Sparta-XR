import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040506] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-[#e6e6e6] text-[#454647] hover:bg-[#d4d4d4] shadow-[rgba(0,0,0,0.03)_0px_7px_3px_0px,rgba(0,0,0,0.25)_0px_4px_4px_0px]',
        destructive: 'bg-[#452324] text-[#ff6363] hover:bg-[#5a2e2f]',
        outline: 'border border-[#363739] bg-transparent text-[#9c9c9d] hover:text-white hover:bg-[#111214]',
        secondary: 'bg-[#111214] text-[#9c9c9d] hover:text-white hover:bg-[#1b1c1e]',
        ghost: 'text-[#9c9c9d] hover:text-white',
        link: 'text-[#9c9c9d] underline-offset-4 hover:text-white hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
