import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import api from './services/api';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#80ED99',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 50,
  },

  text: {
    padding: 8,
    color: '#091357',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
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

  button: {
    alignItems: 'center',
    padding: 10,
    height: 40,
    width: 120,
    letterSpacing: 0.25,
    backgroundColor: '#22577A',
  },
});

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  handleSignIn = async () => {
    console.log(email, name, password);
    if (email.length === 0 || name.length === 0 || password.length === 0) {
      return;
    } else {
      try {
        const response = await api.post('/users', {
          email: email,
          name: name,
          password: password,
        });
        if (response.status == 201) {
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder={'Digite seu nome'}
          onChangeText={setName}
          value={name}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder={'Digite seu e-mail'}
          onChangeText={setEmail}
          value={email}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder={'Crie sua senha'}
          onChangeText={setPassword}
          value={password}
        />
      </TouchableOpacity>

      <TouchableHighlight onPress={() => handleSignIn()} style={styles.button}>
        <Text>Cadastrar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Cadastro;
