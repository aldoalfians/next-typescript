import type { InputProps } from './interfaces'
import clsx from 'clsx' // package
import styles from './input.module.css'

const Input = ({
  name,
  label,
  placeholder,
  type,
  className = '',
}: InputProps) => {
  return (
    <label htmlFor={name} className={clsx(styles.label, className)}>
      <div className='mb-3'>{label}</div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={styles.input}
      />
    </label>
  )
}

export default Input
