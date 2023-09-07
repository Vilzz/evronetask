import { useEffect, useState, memo } from 'react'
import { ListStateType } from './List'

type ListItemPropsType = {
  index: number
  item: ListStateType
  onUpdate: (index: number) => void
}

const ListItem = function ({ index, item: { value, label }, onUpdate }: ListItemPropsType) {
  const [renderCount, setRenderCount] = useState<number>(0)

  useEffect(() => {
    setRenderCount(renderCount + 1)
  }, [value])

  const handleClick = () => {
    onUpdate(index)
  }

  return (
    <li>
      {label}: {value} (renders: {renderCount})<button onClick={handleClick}>Update</button>
    </li>
  )
}

export default memo(ListItem)
