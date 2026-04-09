import React from 'react'
import { Text, View } from 'react-native'
import InputSection from './InputSection'
import ListSection from './ListSection'

type Props = {}

const tasks = [
    { id: '1', text: 'Darle estilos a la lista' },
    { id: '2', text: 'Darle funcionalidad para crear tareas' },
    { id: '3', text: 'Darle funcionalidad para eliminar tareas' },
    { id: '4', text: 'No romper la pc en el intento' },
]

function TodoList({}: Props) {
  return (
    <View>
        <Text>TodoList</Text>
        <InputSection/>
        <ListSection tasks={tasks} />
    </View>
  )
}

export default TodoList