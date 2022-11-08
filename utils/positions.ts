import { PlayerProps } from '../components/Player'
import { Rotation } from './types'

export const positions: { [key in Rotation]: PlayerProps[][] } = {
  '6x0': [
    [
      { id: 1, label: '1', x: 75, y: 50 },
      { id: 2, label: '2', x: 75, y: 10 },
      { id: 3, label: '3', x: 40, y: 0 },
      { id: 4, label: '4', x: 5, y: 10 },
      { id: 5, label: '5', x: 5, y: 50 },
      { id: 6, label: '6', x: 40, y: 50 },
    ],
    [
      { id: 1, label: '1', x: 40, y: 50 },
      { id: 2, label: '2', x: 75, y: 50 },
      { id: 3, label: '3', x: 75, y: 10 },
      { id: 4, label: '4', x: 40, y: 0 },
      { id: 5, label: '5', x: 5, y: 10 },
      { id: 6, label: '6', x: 5, y: 50 },
    ],
    [
      { id: 1, label: '1', x: 5, y: 50 },
      { id: 2, label: '2', x: 40, y: 50 },
      { id: 3, label: '3', x: 75, y: 50 },
      { id: 4, label: '4', x: 75, y: 10 },
      { id: 5, label: '5', x: 40, y: 0 },
      { id: 6, label: '6', x: 5, y: 10 },
    ],
    [
      { id: 1, label: '1', x: 5, y: 10 },
      { id: 2, label: '2', x: 5, y: 50 },
      { id: 3, label: '3', x: 40, y: 50 },
      { id: 4, label: '4', x: 75, y: 50 },
      { id: 5, label: '5', x: 75, y: 10 },
      { id: 6, label: '6', x: 40, y: 0 },
    ],
    [
      { id: 1, label: '1', x: 40, y: 0 },
      { id: 2, label: '2', x: 5, y: 10 },
      { id: 3, label: '3', x: 5, y: 50 },
      { id: 4, label: '4', x: 40, y: 50 },
      { id: 5, label: '5', x: 75, y: 50 },
      { id: 6, label: '6', x: 75, y: 10 },
    ],
    [
      { id: 1, label: '1', x: 75, y: 10 },
      { id: 2, label: '2', x: 40, y: 0 },
      { id: 3, label: '3', x: 5, y: 10 },
      { id: 4, label: '4', x: 5, y: 50 },
      { id: 5, label: '5', x: 40, y: 50 },
      { id: 6, label: '6', x: 75, y: 50 },
    ],
  ],
}
