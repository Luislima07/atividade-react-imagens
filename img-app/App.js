import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [images1, setImages1] = useState(require('./src/img1.jpg'));
  const [images2, setImages2] = useState(require('./src/img3.jpg'))
  const [images3, setImages3] = useState(require('./src/img5.jpg'))
  const [images4, setImages4] = useState(require('./src/img7.jpg'))


  function mudarImagem1() {
    if (images1 === require('./src/img1.jpg')) {
      setImages1(require('./src/img2.jpg'));
    } else {
      setImages1(require('./src/img1.jpg'));
    }
  }

  function mudarImagem2() {
    if (images2 === require('./src/img3.jpg')) {
      setImages2(require('./src/img4.jpg'));
    } else {
      setImages2(require('./src/img3.jpg'));
    }
  }

  function mudarImagem3() {
    if (images3 == require('./src/img5.jpg')) {
      setImages3(require('./src/img6.jpg'))
    } else {
      setImages3(require('./src/img5.jpg'))
    }
  }
  function mudarImagem4() {
    if (images4 == require('./src/img7.jpg')) {
      setImages4(require('./src/img8.jpg'))
    } else {
      setImages4(require('./src/img7.jpg'))
    }
  }

  return (
    <View style={styles.principal}>
      <Text style={styles.texto}>Troca Imagem!</Text>

      <View style={styles.grid}>
        <View style={styles.box1}>
          <Image source={images1} style={styles.img} />
          <TouchableOpacity style={styles.btn} onPress={mudarImagem1}>
            <Text style={styles.btnTexto}>Trocar Imagem</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <Image source={images2} style={styles.img} />
          <TouchableOpacity style={styles.btn} onPress={mudarImagem2}>
            <Text style={styles.btnTexto}>Trocar Imagem</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box3}>
          <Image source={images3} style={styles.img} />
          <TouchableOpacity style={styles.btn} onPress={mudarImagem3}>
            <Text style={styles.btnTexto}>Trocar Imagem</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box4}>
          <Image source={images4} style={styles.img} />
          <TouchableOpacity style={styles.btn} onPress={mudarImagem4}>
            <Text style={styles.btnTexto}>Trocar Imagem</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//Styles
const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#5e5e5e',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#323030',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', // permite quebrar linha
  },
  box1: {
    width: '50%', // 2 por linha
    height: '50%', // 2 linhas
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#403838ff',
  },
  box2: {
    width: '50%', // 2 por linha
    height: '50%', // 2 linhas
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#515b66ff',
  },
  box3: {
    width: '50%', // 2 por linha
    height: '50%', // 2 linhas
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#51665fff',
  },
  box4: {
    width: '50%', // 2 por linha
    height: '50%', // 2 linhas
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#3d3e2dff',
  },
  img: {
    width: 150,
    height: 250,
    borderRadius: 15,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#ffffffff',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
  },
  btnTexto: {
    fontWeight: 'bold',
    color: '#000000ff',
  },
});
