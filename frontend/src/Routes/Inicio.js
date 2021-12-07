import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
    height: 50,
    width: 180,
    letterSpacing: 0.25,
    backgroundColor: '#22577A',
    borderRadius: 2,
    marginTop: 18,
  },

  buttonGerencia: {
    alignItems: 'center',
    padding: 10,
    height: 75,
    width: 180,
    letterSpacing: 0.25,
    backgroundColor: '#22577A',
    borderRadius: 2,
    marginTop: 18,
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
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

      <TouchableHighlight
        onPress={() => handleAlterPress()}
        style={styles.buttonGerencia}>
        <Text style={styles.buttonText}>Gerenciar Remédios</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => handleAlterPress()}
        style={styles.buttonGerencia}>
        <Text style={styles.buttonText}>Gerenciar Usuários</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => handleAlterPress()}
        style={styles.button}>
        <Text style={styles.buttonText}>Alterar usuário</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => handleAlterPress()}
        style={styles.button}>
        <Text style={styles.buttonText}>Alterar senha</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Inicio;
