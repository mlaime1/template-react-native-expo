import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Item from './Item'

type Props = {
    tasks?: { id: string, text: string }[]
}

function ListSection({ tasks = [] }: Props) {
  return (
    <View>
        <FlatList
            data={tasks}
            renderItem={({ item }) => <Item task={item.text} />}
        />
    </View>
  )
}

export default ListSection