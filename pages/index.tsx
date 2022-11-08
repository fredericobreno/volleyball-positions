import React from 'react'
import Court from '../components/Court'
import Field from '../components/Field'
import styles from '../styles/styles.module.scss'
import { positions } from '../utils/positions'
import { Rotation } from '../utils/types'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  const [rotation, setRotation] = React.useState(Rotation['6x0'])
  const [position, setPosition] = React.useState(0)

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(parseInt(e.target.value))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <Field
          label='Rotation'
          options={Object.values(Rotation).map(rotation => ({
            label: rotation,
            value: rotation,
          }))}
        />
        <Field
          label='Position'
          options={Array(6)
            .fill(0)
            .map((_, i) => ({
              value: i.toString(),
              label: (i + 1).toString(),
            }))}
          onChange={handlePositionChange}
        />
      </div>
      <Court players={positions[rotation][position]} />
    </div>
  )
}

export default Home
