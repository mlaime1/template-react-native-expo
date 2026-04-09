import React from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type Props = {}

function InputSection({ }: Props) {
    return (
        <View>
            <Text>InputSection</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Escribe tu tarea' />
                <Button title='Agregar' onPress={() => { }} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginRight: 8,
    }
});

export default InputSection