import { useState, useRef } from 'react'

import ListItem from './ListItem'

type ListPropsType = {
  itemsCount: number
}

export type ListStateType = {
  id: number
  label: string
  value: number
  clicks: number
}

export default function List({ itemsCount }: ListPropsType) {
  const ref = useRef(0)
  ref.current += 1

  const initialState = Array.from({ length: itemsCount }).map((_, id) => ({
    id,
    label: `Item #${id + 1}`,
    value: Math.random(),
    clicks: 0,
  }))

  const [items, setItems] = useState<ListStateType[]>(initialState)

  const handleUpdate = (index: number) => {
    const itemsCopy = [...items]
    itemsCopy[index].value = Math.random()
    itemsCopy[index].clicks += 1
    setItems(itemsCopy)
  }

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem index={index} item={item} onUpdate={handleUpdate} key={item.value.toString()} />
      ))}
    </ul>
  )
}
