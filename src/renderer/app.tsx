import React, { ReactElement } from 'react'

export interface Props {
  name: string
}

export default class App extends React.Component<Props, object> {
  render(): ReactElement {
    const { name } = this.props

    return (
      <div className="hello">
        <div className="greeting">Hello {name}</div>
      </div>
    )
  }
}
