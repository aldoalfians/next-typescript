import { ReactNode, ButtonHTMLAttributes } from 'react'

//package
import clsx from 'clsx'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'

import styles from './Button.module.css'

interface Props {
  children: ReactNode | string
  className?: string
  fullWidth?: boolean
  outlined?: boolean
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  variant?: 'primary' | 'google' | 'facebook'
}

const Button = ({
  children,
  className = '',
  fullWidth,
  outlined,
  type,
  variant = 'primary',
}: Props) => {
  return (
    <button
      className={clsx(
        styles.button,
        className,
        fullWidth && styles.fullWidth,
        outlined && styles.outlined,
        variant === 'primary' && 'bg-blue-100',
        variant === 'google' && 'bg-red-100',
        variant === 'facebook' && 'bg-facebook'
      )}
      type={type}
    >
      {variant === 'facebook' && (
        <FaFacebookF className='text-white h-6 w-6 mr-2' />
      )}
      {variant === 'google' && <FaGoogle className='text-white h-6 w-6 mr-2' />}
      {children}
    </button>
  )
}

export default Button
