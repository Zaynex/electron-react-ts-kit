import React, { ReactElement, useCallback, useState } from 'react'
import { useToggle } from 'react-use'

const useToggleFromLocalFile = (initialValue: boolean): [boolean, (nextValue?: any) => void] => {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggle = useCallback(
    (nextValue?: any) => {
      if (typeof nextValue === 'boolean') {
        setValue(nextValue)
      } else {
        setValue(currentValue => !currentValue)
      }
    },
    [setValue],
  )

  return [value, toggle]
}

export interface Props {
  name: string
}

export default function App({ name }: Props): ReactElement {
  return (
    <div>
      <div>Hi {name}</div>
      <Fail />
      <OK />
    </div>
  )
}
function Fail(): ReactElement {
  // notice , it's failed if import from react-use
  const [on, toggle] = useToggle(false)
  return (
    <div>
      <div>{on ? 'on' : 'close'}</div>
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

function OK(): ReactElement {
  // it's ok if load from local
  const [on, toggle] = useToggleFromLocalFile(false)
  return (
    <div>
      <div>{on ? 'on' : 'close'}</div>
      <button onClick={toggle}>toggle</button>
    </div>
  )
}
