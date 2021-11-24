import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import api from './services/api';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F2C9',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
  },

  text: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#003638',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'gray',
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

      <Button onPress={() => handleSignIn()} title="Cadastrar" />
    </View>
  );
};

export default Cadastro;
