/*import { reject } from "async";
import db from "./SQLiteDatabase";

import * as SQLite from 'expo-sqlite'

//const db = SQLite.openDatabase("db.db")

//export default db
//db.transaction(tx => {
  //  tx.executeSql("DROP TABLE Information;")
  //  tx.executeSql("CREATE TABLE IF NOT EXISTS Information (id INTEGER PRIMARY KEY AUTOINCRMENT, bairro TEXT, idade INT, questao INT);")
//})

const setupDatabaseAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
          tx.executeSql(
            'create table if not exists users (id integer primary key not null, name text);'
          );
        },
        (_, error) => { console.log("db error creating tables"); console.log(error); reject(error) },
        (_, success) => { resolve(success)}
      )
    })
  }

const dropDatabaseTablesAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'drop table users',
          [],
          (_, result) => { resolve(result) },
          (_, error) => { console.log("error dropping users table"); reject(error)
          }
        )
      })
    })
  }  

const insertUser = (userName, successFunc) => {
    db.transaction( tx => {
        tx.executeSql( 'insert into users (name) values (?)', [userName] );
      },
      (t, error) => { console.log("db error insertUser"); console.log(error);},
      (t, success) => { successFunc() }
    )
  }

const create = (obj) => {
    return new Promise( (resolve, reject) => {
        db.transaction(
            tx => {
                tx.executeSql("INSERT INTO information (bairro, idade, questao) values (?,?,?):", [obj.bairro, obj.idade, obj.questao],
                    (_, {rowsAffected, insertId}) => {
                        if(rowsAffected > 0){
                            resolve(insertId)
                        } else {
                            reject('Error inserting obj: '+JSON.stringify(obj))
                        }
                    },
                    (_,error) => reject(error)
                )
            }
        )
    })
}

const findByBairro = (bairro) => {
    return new Promise( (resolve, reject) => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT count(id), sum(questoes) FROM Information where bairro=?",[bairro],
                    (_, {rows}) => {
                        if(rows.length > 0){
                            resolve(rows._array)
                        } else {
                            reject('obj not found: bairro= '+bairro)
                        }
                    },
                    (_,error) => reject(error)
                )
            }
        )
    })
}

const findByIdade = (idade) => {
    return new Promise( (resolve, reject) => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT count(id), sum(questoes) FROM Information where idade=?",[idade],
                    (_, {rows}) => {
                        if(rows.length > 0){
                            resolve(rows._array)
                        } else {
                            reject('obj not found: bairro= '+idade)
                        }
                    },
                    (_,error) => reject(error)
                )
            }
        )
    })
}

const findByIntervaloIdade = (idadeMenor, idadeMaior) => {
    return new Promise( (resolve, reject) => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT count(id), sum(questoes) FROM Information where idade BETWEEN ? and ? ",[idadeMenor, idadeMaior],
                    (_, {rows}) => {
                        if(rows.length > 0){
                            resolve(rows._array)
                        } else {
                            reject('obj not found: bairro= '+idade)
                        }
                    },
                    (_,error) => reject(error)
                )
            }
        )
    })
}

export default{
    create,
    findByBairro,
    findByIdade,
    findByIntervaloIdade,
    setupDatabaseAsync

}*/