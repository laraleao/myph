import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F2C9',
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'gray',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#003638',
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
      <TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={setUsuario}
          value={usuario}
          placeholder="Alterar usuário"></TextInput>
      </TouchableOpacity>
      <Button
        style={{fontSize: 25}}
        onPress={() => handleAlterPress()}
        title="Alterar usuário"
      />

      <TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Alterar senha"></TextInput>
      </TouchableOpacity>
      <Button
        style={{fontSize: 25}}
        onPress={() => handleAlterPress()}
        title="Alterar Senha"
      />
    </View>
  );
};

export default Inicio;
