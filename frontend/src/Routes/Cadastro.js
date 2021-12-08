import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
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
    backgroundColor: 'white',
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

  textLogoNome: {
    fontSize: 75,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#22577A',
  },

  textLogo2: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#2e798a',
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
    justifyContent: 'center',
    padding: 10,
    height: 50,
    width: 130,
    backgroundColor: '#22577A',
    borderRadius: 2,
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
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
        const response = await api.post('/usuario', {
          email: email,
          nome: name,
          senha: password,
        });
        if (response.status == 200) {
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textLogoNome}>
          MyPH{' '}
          <Icon name="drug-pack" size={60} color={1389e4} flexDirection="row" />
        </Text>

        <Text style={styles.textLogo2}> My Pocket Home </Text>
      </TouchableOpacity>
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
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Cadastro;
