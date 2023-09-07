import { useState } from 'react'

import ListItem from './ListItem'

type ListPropsType = {
  itemsCount: number
}

export type ListStateType = {
  id: number
  label: string
  value: number
}

export default function List({ itemsCount }: ListPropsType) {
  const initialState: ListStateType[] = Array.from({ length: itemsCount }).map((_, id) => ({
    id,
    label: `Item #${id + 1}`,
    value: Math.random(),
  }))

  const [items, setItems] = useState<ListStateType[]>(initialState)

  const handleUpdate = (index: number) => {
    const oldItems = [...items]
    oldItems[index].value = Math.random()
    setItems(oldItems)
  }

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <ListItem index={index} item={item} onUpdate={handleUpdate} key={item.label} />
        ))}
      </ul>
    </>
  )
}
