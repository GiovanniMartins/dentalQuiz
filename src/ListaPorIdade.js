import * as SQLite from 'expo-sqlite'; 
import { FlatList, SafeAreaView, View, StyleSheet, Text, Button, TextInput } from 'react-native';
//import { useState } from 'react/cjs/react.development';
//import { useEffect } from 'react/cjs/react.production.min';
import React,{useState, useEffect} from 'react';
const  db = SQLite.openDatabase('Dados.db');

export default function ListaPorIdade(){  
    let [inputIdadeUm, setInputIdadeUm] = useState('');
    let [inputIdadeDois, setInputIdadeDois] = useState('');
    let [retornoPorIdade, setRetornoPorIdade] = useState({});

    let searchIdade = () => {
        console.log('Primeira idade buscada: ', inputIdadeUm);
        console.log('Segunda idade buscada: ', inputIdadeDois);
        setRetornoPorIdade({});
        if(inputIdadeUm > inputIdadeDois){
            alert('Por favor, insira a menor idade primeiro');
            return;
        }
        if(inputIdadeUm == inputIdadeDois) {
            alert('Não pode inserir a mesma idade nos dois campos');
            return;
        }
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM INFORMATION  where idade BETWEEN ? and ?', [inputIdadeUm, inputIdadeDois],   
             (tx, results) => {
                var len = results.rows.length;
                console.log('len',len);
                console.log('Busca por intervalo de idade');
                if(len > 0) {
                    setRetornoPorIdade(results.rows.item(0));
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
                            <TextInput   placeholder="Digite a primeira idade para busca"
                                         onChangeText={(inputIdadeUm)=>setInputIdadeUm(inputIdadeUm)}
                                         style={{ padding:10 }}
                            />
                            <TextInput   placeholder="Digite a segunda idade para busca"
                                         onChangeText={(inputIdadeDois)=>setInputIdadeDois(inputIdadeDois)}
                                         style={{ padding:10 }}
                            />
                            <Button title="Buscar por Idade" onPress={searchIdade}/>
                            <View style={{
                                marginLeft:35,
                                marginRight:35,
                                marginTop:10
                            }}>
                                <Text>Percentual dos acertos na idade selecionado: {retornoPorIdade.student_id}</Text>
                            </View>
                    </View>
                </View>
         </SafeAreaView>
    );
}