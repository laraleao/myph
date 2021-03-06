import React, {useState} from 'react';
import NumericInput from 'react-native-numeric-input';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Button,
} from 'react-native';
import {WebView} from 'react-native-webview';

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

  input: {
    marginTop: 8,
    height: 30,
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

// FAZER
const Remedio = () => {
  const [nome, setNome] = useState('');
  const [validade, setValidade] = useState('');
  const [url, setUrl] = useState('');
  const [go, setGo] = useState(false);
  const [qtde, setQtde] = useState('');
  const [associar, setAssociar] = useState('');

  if (go === false) {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.text}>Nome</Text>
          <TextInput style={styles.input} onChangeText={setNome} value={nome} />
        </TouchableOpacity>

        {/* NUMERO - FAZER? */}
        <TouchableOpacity>
          <Text style={styles.text}>Validade</Text>
          <TextInput
            style={styles.input}
            onChangeText={setValidade}
            value={validade}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={styles.text}
            onChangeText={text => setUrl(text)}
            value={url}>
            Bula
          </Text>
          <Button onPress={() => setGo(true)} title="Pesquisar Bula" />
        </TouchableOpacity>

        <Text style={styles.text}>Quantidade</Text>
        <NumericInput
          style={styles.input}
          value={qtde}
          onChangeText={setQtde}
          totalWidth={140}
          totalHeight={50}
          minValue={1}
          maxValue={50}
          valueType="integer"
          iconSize={22}
          step={1.5}
          rounded
          textColor="#091357"
          rightButtonBackgroundColor="#22577E"
          leftButtonBackgroundColor="#5584AC"
        />

        <TouchableOpacity>
          <Text style={styles.text}>Associar rem??dio</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAssociar}
            value={associar}
          />
        </TouchableOpacity>

        {/* CRIAR FUNCAO */}
        <TouchableHighlight onPress={() => FUNCAO()} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableHighlight>
      </View>
    );
  } else {
    return <WebView source={{uri: 'https://www.bulas.med.br/'}} />;
  }
};
export default Remedio;
