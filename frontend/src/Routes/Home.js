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
    backgroundColor: '#80ED99',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
  },

  text: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#22577A',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'gray',
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
        <Text style={styles.text}>Login</Text>
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
          placeholder={'Digite sua senha'}
          onChangeText={setPassword}
          value={password}
        />
      </TouchableOpacity>

      <Button onPress={() => handleSignInPress()} title="Logar" />
      <Button
        onPress={() => navigation.navigate('Cadastro')}
        title="Não possui cadastro?"
      />
    </View>
  );
};

export default Home;
