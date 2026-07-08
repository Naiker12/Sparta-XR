import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-[6px] border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff6363] focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-[#1b1c1e] text-white hover:bg-[#2f3031]',
        secondary: 'border-transparent bg-[#111214] text-[#9c9c9d] hover:bg-[#1b1c1e]',
        destructive: 'border-transparent bg-[#452324] text-[#ff6363]',
        outline: 'text-[#9c9c9d] border-[#363739]',
        accent: 'border-transparent bg-[#ff6363] text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
