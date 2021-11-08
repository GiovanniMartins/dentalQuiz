import * as SQLite from 'expo-sqlite'; 
import { FlatList, SafeAreaView, View, StyleSheet, Text } from 'react-native';
//import { useState } from 'react/cjs/react.development';
//import { useEffect } from 'react/cjs/react.production.min';
import React,{useState, useEffect} from 'react';
const  db = SQLite.openDatabase('Dados.db');

export default function ListaTodosDados(){  

        let [flatListItems, setFlatListItems] = useState([]);
        useEffect(() => {
            db.transaction((tx) => {
                tx.executeSql(
                    'SELECT * FROM information',
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i){
                            temp.push(results.rows.item(i));
                        }
                        setFlatListItems(temp); 
                    });
            });
        },[]);

        let listViewItemSeparator = () => {
            return (
                <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080'}}/>
            );
        };
         
        let listaView = (item) => {
            return (
                <View key={item.student_id}
                      style={{ backgroundColor: 'white', padding: 20}}>
                          <Text>Id: {item.student_id}</Text>
                          <Text>Idade: {item.idade}</Text>
                          <Text>Bairro: {item.bairro}</Text>
                          <Text>TipoEnsino: {item.ensino}</Text>
                          <Text> Perguntas: {item.respostasCertas}</Text>
                </View>
            );
        };

        return (
            <SafeAreaView style={{ flex:1 }}>
                <View style={{ flex:1, backgroundColor: 'white'}}>
                    <View style={{ flex:1 }}>
                        <FlatList 
                            ItemSeparatorComponent={listViewItemSeparator}
                            style={{ marginTop: 30}}
                            contentContainerStyle={{ paddingHorizontal: 20}}
                            data={flatListItems}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item})=> listaView(item)}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    
    const styles = StyleSheet.create({
        textheader:{
            color: '#111',
            fontSize: 12,
            fontWeight: '700'
        },
        textbottom: {
            color: '#111',
            fontSize: 18
        },
    });
}