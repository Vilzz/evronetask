import { useEffect, useState, memo } from 'react'
import { ListStateType } from './List'

type ListItemPropsType = {
  index: number
  item: ListStateType
  onUpdate: (index: number) => void
}

const ListItem = function ({ index, item, onUpdate }: ListItemPropsType) {
  const [renderCount, setRenderCount] = useState<number>(0)

  useEffect(() => {
    setRenderCount(renderCount + 1)
  }, [item.value])

  const handleClick = () => {
    onUpdate(index)
  }

  return (
    <li>
      {item.label}: {item.value} (renders: {renderCount})
      <button onClick={handleClick}>Update</button>
    </li>
  )
}

export default memo(ListItem)
