import React from 'react'
import Player, { PlayerProps } from '../Player'
import styles from './styles.module.scss'

type CourtProps = {
  players: PlayerProps[]
}

const Court: React.FC<CourtProps> = ({ players }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line} />
      {players.map(player => (
        <Player key={player.id} {...player} />
      ))}
    </div>
  )
}

export default Court
