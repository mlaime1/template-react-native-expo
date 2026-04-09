import React from 'react'
import { View } from 'react-native'

type Props = {
    task: string
}

function Item({ task }: Props) {
  return (
    <View>• {task}</View>
  )
}

export default Item