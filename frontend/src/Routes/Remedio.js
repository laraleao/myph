import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

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

// FAZER
const Remedio = () => {
  const [nome, setNome] = useState('');
  const [validade, setValidade] = useState('');
  const [bula, setBula] = useState('');
  const [qtde, setQtde] = useState('');
  const [associar, setAssociar] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Nome</Text>
        <TextInput style={styles.input} onChangeText={setNome} value={nome} />
      </TouchableOpacity>

      {/* NUMERO - FAZER */}
      <TouchableOpacity>
        <Text style={styles.text}>Validade</Text>
        <TextInput
          style={styles.input}
          onChangeText={setValidade}
          value={validade}
        />
      </TouchableOpacity>

      {/* ASSOCIAR LINK */}
      <TouchableOpacity>
        <Text style={styles.text}>Bula Online</Text>
        <TextInput style={styles.input} onChangeText={setBula} value={bula} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text}>Quantidade</Text>
        <TextInput style={styles.input} onChangeText={setQtde} value={qtde} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text}>Associar remédio</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAssociar}
          value={associar}
        />
      </TouchableOpacity>

      {/* CRIAR FUNCAO */}
      <Button onPress={() => FUNCAO()} title="Cadastrar" />
    </View>
  );
};
export default Remedio;
