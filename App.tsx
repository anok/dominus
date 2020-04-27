import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Appbar, Provider, Button, TextInput } from 'react-native-paper';


const lugares =
  ['Salão Principal', 'Cozinha', 'Sapê'];

export default class App extends React.Component {
  state = {
    ultimoResultado: '',
    linhasOcupadas: 0,
    text: 'Resultado',
  }
  _posicaoAleatoria(vetor) {
    return vetor[Math.floor(Math.random() * vetor.length)];
  }
  lugares() {
    let lugarAleatorio = this._posicaoAleatoria(lugares);
    this.setState({ text: 'Lugar: \n' + lugarAleatorio })
  }
  render() {
    return (<Provider>
      <SafeAreaView style={styles.safeDroidArea}>
        <View style={styles.row}>
          <Text style={styles.result}>{this.state.text}</Text>
        </View>
        <Text style={styles.labelTitle}>Novo Jogo</Text>
        <View style={styles.row}>
          <Button mode="contained" labelStyle={styles.label} style={styles.button} onPress={() => console.log('pressed')}>Trama</Button>
          <Button mode="contained" labelStyle={styles.label} style={styles.button} onPress={() => console.log('pressed')}>Arquétipo</Button>
        </View>
        <View>
        </View>
        <Text style={styles.labelTitle}>Cenas</Text>
        <View style={styles.row}>
          <Button mode="contained" labelStyle={styles.label} style={styles.button} onPress={this.lugares.bind(this)}>Lugares</Button>
          <Button mode="contained" labelStyle={styles.label} style={styles.button} onPress={() => console.log('pressed')}>Personagem</Button>
        </View>
        <View>
          <Button mode="contained" labelStyle={styles.label} style={styles.button} onPress={() => console.log('pressed')}>Evento</Button>
        </View>
        <Text style={styles.labelTitle}>Desafios</Text>
        <View style={styles.row}>
          <Button mode="contained" labelStyle={styles.label} style={styles.button} onPress={() => console.log('pressed')}>Desafio</Button>
          <Button mode="contained" labelStyle={styles.label} style={styles.button} onPress={() => console.log('pressed')}>Desvantagem</Button>
        </View>
        <View style={styles.row}>
          <Button mode="contained" labelStyle={styles.label} style={styles.button} onPress={() => console.log('pressed')}>Vantagem</Button>
        </View>
        <Text style={styles.labelTitle}>Banco de Idéias</Text>
        <View style={styles.row}>
          <Button mode="contained" labelStyle={styles.label} style={styles.button} onPress={() => console.log('pressed')}>Assunto</Button>
          <Button mode="contained" labelStyle={styles.label} style={styles.button} onPress={() => console.log('pressed')}>Ação</Button>
        </View>
        <View style={styles.row}>
          <Button mode="contained" labelStyle={styles.label} style={styles.button} onPress={() => console.log('pressed')}>Coisa</Button>
          <Button mode="contained" labelStyle={styles.label} style={styles.button} onPress={() => console.log('pressed')}>Qualidade</Button>
        </View>
      </SafeAreaView>
    </Provider>)
  };
}

const styles = StyleSheet.create({
  safeDroidArea: {
    top: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#bbbcbc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  inputText: {
    flexGrow: 0.9,
    marginBottom: 5,
  },
  label: {
    fontSize: 15,
  },
  labelTitle: {
    fontSize: 30,
  },
  result: {
    fontSize: 40,
  },
  button: {
    margin: 2,
  }
});
