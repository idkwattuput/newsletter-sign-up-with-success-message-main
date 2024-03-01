import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputError = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return <input type={type} className={cn('flex h-10 w-full rounded-md border border-red-600 bg-red-200 px-3 py-2 text-sm ring-offset-red-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-red-600 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50', className)} ref={ref} {...props} />
})
InputError.displayName = 'InputError'

export { InputError }
