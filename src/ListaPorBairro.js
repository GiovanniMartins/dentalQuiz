import * as SQLite from 'expo-sqlite'; 
import { FlatList, SafeAreaView, View, StyleSheet, Text, Button, TextInput } from 'react-native';
//import { useState } from 'react/cjs/react.development';
//import { useEffect } from 'react/cjs/react.production.min';
import React,{useState, useEffect} from 'react';
const  db = SQLite.openDatabase('Dados.db');

export default function ListaPorBairro(){  
        let [inputBairro, setInputBairro] = useState('');
        let [retornoBairro, setRetornoBairro] = useState({});

        let searchBairro = () => {
            console.log('Bairro buscado: ', inputBairro);
            setRetornoBairro({});
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM INFORMATION  where bairro = ?', [inputBairro], 
                (tx, results) => {
                    var len = results.rows.length;
                    console.log('len',len);
                    console.log('Busca por bairro');
                    if(len > 0) {
                        setRetornoBairro(results.rows.item(0));
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
                                <TextInput   placeholder="Entre com o bairro para busca"
                                             onChangeText={(inputBairro)=>setInputBairro(inputBairro)}
                                             style={{ padding:10 }}
                                />
                                <Button title="Buscar Bairro" onPress={searchBairro}/>
                                <View style={{
                                    marginLeft:35,
                                    marginRight:35,
                                    marginTop:10
                                }}>
                                    <Text>Percentual dos acertos no bairro selecionado: {retornoBairro.bairro}</Text>
                                </View>
                        </View>
                    </View>
             </SafeAreaView>
        );
}