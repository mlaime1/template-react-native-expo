import React from 'react'
import { Text, View } from 'react-native'

type Props = {
  task: string
}

function Item({ task }: Props) {
  return (
    <View>
      <Text>• {task}</Text>
    </View>
  )
}

export default Item