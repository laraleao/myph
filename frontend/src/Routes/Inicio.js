import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#80ED99',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 50,
  },

  input: {
    marginTop: 8,
    height: 40,
    width: 230,
    margin: 18,
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
  },

  text: {
    padding: 8,
    color: '#091357',
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },

  button: {
    alignItems: 'center',
    padding: 10,
    height: 40,
    width: 150,
    letterSpacing: 0.25,
    backgroundColor: '#22577A',
  },
});

const Inicio = () => {
  const [password, setPassword] = useState('');
  const [usuario, setUsuario] = useState('');

  handleAlterPress = async () => {
    if (password.length === 0) {
      return;
    } else {
      try {
        const response = await api.patch('/users', {
          password: password,
        });
        if (password != null) {
          console.log('Não é possível alterar');
        } else {
          console.log('Senha alterada');
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Bem vindo</Text>
      {/* FAZER */}
      <TouchableHighlight
        onPress={() => handleAlterPress()}
        style={styles.button}>
        <Text>Gerenciar Remédios</Text>
      </TouchableHighlight>
      {/* <TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Alterar senha"></TextInput>
      </TouchableOpacity> */}

      <TouchableHighlight
        onPress={() => handleAlterPress()}
        style={styles.button}>
        <Text>Gerenciar Usuários</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => handleAlterPress()}
        style={styles.button}>
        <Text>Alterar usuário</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => handleAlterPress()}
        style={styles.button}>
        <Text>Alterar senha</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Inicio;
