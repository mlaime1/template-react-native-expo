import React from "react";
import { FlatList } from "react-native";
import ItemTask from "./ItemTask";

export default function ListTask(){
    const info = [{name:"rick", age: 50}, {name:"morty", age:14}]
    return (
        <FlatList
            data={info}
            renderItem={({item})=><ItemTask title={item}/>}
        />
    )
}