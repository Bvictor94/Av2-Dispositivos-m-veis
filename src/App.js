import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Button, Text, FlatList, StyleSheet } from 'react-native';
import { criarTabela, inserirSenha, apagarSenha, buscarSenhas } from './database';
import { gerarSenha } from './utils/geradorDeSenhas';

const App = () => {
  const [senhas, setSenhas] = useState([]);

  useEffect(() => {
    criarTabela();
    carregarSenhas();
  }, []);

  const carregarSenhas = () => {
    buscarSenhas(setSenhas);
  };

  const handleGerarSenha = () => {
    const novaSenha = gerarSenha();
    inserirSenha(novaSenha);
    carregarSenhas();
  };

  const handleApagarSenha = (id) => {
    apagarSenha(id);
    carregarSenhas();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Gerar e Salvar Senha" onPress={handleGerarSenha} />
      <FlatList
        data={senhas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.senhaItem}>
            <Text>{item.senha}</Text>
            <Button title="Apagar" onPress={() => handleApagarSenha(item.id)} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  senhaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default App;
