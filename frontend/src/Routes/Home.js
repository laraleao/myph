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
    backgroundColor: '#80ED99',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 50,
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

  textInput: {
    padding: 8,
    color: '#091357',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },

  button: {
    alignItems: 'center',
    padding: 10,
    height: 40,
    width: 60,
    backgroundColor: '#22577A',
  },
});

const Home = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  handleSignInPress = async () => {
    console.log(email, password);
    if (email.length === 0 || password.length === 0) {
      return;
    } else {
      try {
        const response = await api.post('/sessions', {
          email: email,
          password: password,
        });
        if (response.status == 201) {
          navigation.navigate('Inicio');
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
          <Icon name="drug-pack" size={60} color="#000" flexDirection="row" />
        </Text>

        <Text style={styles.textLogo2}> My Pocket Home </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textInput}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder={'Digite seu e-mail'}
          onChangeText={setEmail}
          value={email}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textInput}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder={'Digite sua senha'}
          onChangeText={setPassword}
          value={password}
        />
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.button}
        onPress={() => handleSignInPress()}>
        <Text>Logar</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.buttonCadastro}
        onPress={() => navigation.navigate('Cadastro')}>
        <Text>Não possui cadastro?</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Home;
