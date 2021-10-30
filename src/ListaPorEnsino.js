import * as SQLite from 'expo-sqlite'; 
import { FlatList, SafeAreaView, View, StyleSheet, Text, Button, TextInput } from 'react-native';
//import { useState } from 'react/cjs/react.development';
//import { useEffect } from 'react/cjs/react.production.min';
import React,{useState, useEffect} from 'react';
const  db = SQLite.openDatabase('Dados.db');

export default function ListaPorEnsino(){
    let [inputEnsino, setInputEnsino] = useState('');
    let [retornoEnsino, setRetornoEnsino] = useState({});

    let searchEnsino = () => {
        console.log('Ensino buscado: ', inputEnsino);
        if(inputEnsino != "Público" || inputEnsino != "Particular" ){
            alert('A forma correta de escrita é "Públco" ou "Particular"');
            return;
        }
        setRetornoBairro({});
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM INFORMATION  where ensino = ?', [inputEnsino], 
            (tx, results) => {
                var len = results.rows.length;
                console.log('len',len);
                console.log('Busca por Ensino');
                if(len > 0) {
                    setRetornoEnsino(results.rows.item(0));
                } else {
                    alert('Usuário não encontrado!');
                }
            });
        });
    };

    return (
        <SafeAreaView style={{ flex:1 }}>
                <View style={{ flex:1, backgroundColor: 'white'}}>
                    <View style={{ flex:1 }}>
                        <Text text="Filtro de Usuário"/>
                            <TextInput   placeholder="Entre com o tipo de ensino para busca"
                                         onChangeText={(inputEnsino)=>setInputEnsino(inputEnsino)}
                                         style={{ padding:10 }}
                            />
                            <Button title="Buscar Bairro" onPress={searchEnsino}/>
                            <View style={{
                                marginLeft:35,
                                marginRight:35,
                                marginTop:10
                            }}>
                                <Text>Percentual dos acertos no bairro selecionado: {retornoEnsino.bairro}</Text>
                            </View>
                    </View>
                </View>
         </SafeAreaView>
    );
}