import React from 'react'
import styles from './styles.module.scss'

type FieldProps = {
  label: string
  onChange?(e: React.ChangeEvent<HTMLSelectElement>): void
  options: { value: string; label: string }[]
}

const Field: React.FC<FieldProps> = ({ label, options, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <select onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Field
