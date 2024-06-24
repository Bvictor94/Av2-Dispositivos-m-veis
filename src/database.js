import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('PasswordDB.db');

export const criarTabela = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Senhas (id INTEGER PRIMARY KEY AUTOINCREMENT, senha TEXT);'
    );
  });
};

export const inserirSenha = (senha) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO Senhas (senha) VALUES (?)', [senha]);
  });
};

export const apagarSenha = (id) => {
  db.transaction(tx => {
    tx.executeSql('DELETE FROM Senhas WHERE id = ?', [id]);
  });
};

export const buscarSenhas = (callback) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM Senhas', [], (tx, results) => {
      let rows = results.rows;
      let senhas = [];
      for (let i = 0; i < rows.length; i++) {
        senhas.push({
          id: rows.item(i).id,
          senha: rows.item(i).senha,
        });
      }
      callback(senhas);
    });
  });
};
