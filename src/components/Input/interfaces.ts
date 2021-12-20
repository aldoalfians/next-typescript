import type { InputHTMLAttributes } from 'react'

export interface InputProps {
  name: InputHTMLAttributes<HTMLInputElement>['name']
  type: InputHTMLAttributes<HTMLInputElement>['type']
  label: string
  placeholder: string
  className?: string
}
