import React from 'react'
import styles from './styles.module.scss'

export type PlayerProps = {
  id: number
  label: string
  x: number
  y: number
}

const Player: React.FC<PlayerProps> = ({ id, label, x, y }) => {
  return (
    <div
      id={`player-${id}`}
      className={styles.wrapper}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {label}
    </div>
  )
}

export default Player
