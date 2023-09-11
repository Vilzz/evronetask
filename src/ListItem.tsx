import { memo } from 'react'
import { ListStateType } from './List'

type ListItemPropsType = {
  index: number
  item: ListStateType
  onUpdate: (index: number) => void
}

const ListItem = function ({ index, item, onUpdate }: ListItemPropsType) {
  const handleClick = () => {
    onUpdate(index)
  }

  return (
    <li>
      {item.label}: {item.value} (renders: {item.clicks})
      <button onClick={handleClick}>Update</button>
    </li>
  )
}

const propsAreEqual = (
  { item: prevProps }: Readonly<ListItemPropsType>,
  { item: nextProps }: Readonly<ListItemPropsType>
) => {
  return prevProps === nextProps
}
export default memo(ListItem, propsAreEqual)
