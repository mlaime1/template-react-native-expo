import React from "react";
import { Text, StyleSheet } from "react-native";

type Props = {
    title: {
        name: string,
        age: number
    }
}

export default function ItemTask({ title }: Props) {
    return (
        <>
            <Text style={style.text}>nombre: {title.name}</Text>
            <Text style={style.text}>edad: {title.age}</Text>
        </>
    )
}

const style = StyleSheet.create({
    text: {
        color: "blue",
        fontWeight: "700",
        fontSize: 12
    }
})