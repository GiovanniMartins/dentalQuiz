import * as SQLite from 'expo-sqlite'; 
import { FlatList, SafeAreaView, View, StyleSheet, Text, Button, TextInput } from 'react-native';
//import { useState } from 'react/cjs/react.development';
//import { useEffect } from 'react/cjs/react.production.min';
import React,{useState, useEffect} from 'react';
const  db = SQLite.openDatabase('Dados.db');

export default function ListaPorBairro(){  
        let [inputBairro, setInputBairro] = useState('');
        let [retornoBairro, setRetornoBairro] = useState({});
        var [quantidadeRegistros, setQuantidadeRegistros] = useState(0);// Inicializei com 1 pois o contatador de questões estava dando 2 quando tinham 3 registros
        let [quantidadeAcertos, setQuantidadeAcertos] = useState(0);
        let countAcertos=0;
        let countRegistros=0;

        let searchBairro = () => {
            console.log('Bairro buscado: ', inputBairro);
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM information where bairro = ?', [inputBairro],  
                 (tx, results) => {
                    console.log("Ensino " + inputBairro);
                    var temp = [];
                    
                    for(let i = 0; i < results.rows.length; ++i){
                        console.log(results.rows.item(i));
                        temp.push(results.rows.item(i));
                        countRegistros++;
                        console.log("Quantidade" + countRegistros);
                        console.log("quantidade de acertos " + results.rows.item(i).respostasCertas);
                        countAcertos+= Number(results.rows.item(i).respostasCertas);
                        console.log("ContadorAcertos: " + countAcertos);
                        
                    }
                    setQuantidadeAcertos(countAcertos);
                    console.log("Quantidade de acertos: " + countAcertos);
    
                    var len = results.rows.length;
                    console.log('len',len);
                    console.log('Busca por bairro');
                    if(len > 0) {
                        setRetornoBairro(results.rows.item(0));
                        countRegistros = countRegistros * 10;
                        console.log("Quantidade de registro: " + countRegistros);
                        console.log("Quantidade de acerto: " + countAcertos);
                        console.log("Multiplicacao: " + countAcertos);
                        countAcertos = countAcertos * 100;
                        setQuantidadeAcertos(countAcertos / countRegistros);
                        console.log("Resultado final " +  countAcertos);
                        setQuantidadeRegistros(countRegistros);
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
                                             onChangeText={(texto)=>setInputBairro(texto)}
                                             style={{ padding:10 }}
                                />
                                <Button title="Buscar Bairro" onPress={searchBairro}/>
                                <View style={{
                                    marginLeft:35,
                                    marginRight:35,
                                    marginTop:10
                                }}>
                                    <Text>Percentual dos acertos na idade selecionado: {quantidadeAcertos.toFixed(2)}</Text>
                                    <Text>Quantidade de questões: {quantidadeRegistros}</Text>
                                </View>
                        </View>
                    </View>
             </SafeAreaView>
        );
}