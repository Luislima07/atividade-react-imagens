import React, { use, useState } from 'react'
import { StyleSheet, Text, TextInput, Button, Image, View, TouchableOpacity } from 'react-native';


export default function App() {
  const [images1, setImages1] = useState(require('./src/img1.jpg'));
  const [images2, setImages2] = useState(require('./src/img3.jpg'))
  const [images3, setImages3] = useState(require('./src/img5.jpg'))

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
    };
    return (
      <View style={styles.principal}>
        <Text style={styles.texto}>Troca Imagem!</Text>
        <View style={styles.container1}>
          <Image source={images1} style={styles.img} />
          <TouchableOpacity>
            <Button title='Pressione aqui' onPress={mudarImagem1} />
          </TouchableOpacity>
        </View>
          <View style={styles.container2}>
            <Image style={styles.img} source={images2} />
            <TouchableOpacity>
              <Button title='Pressione aqui' onPress={mudarImagem2} />
            </TouchableOpacity>
          </View>
          <View style={styles.container3}>
            <Image style={styles.img} source={images3} />
            <TouchableOpacity>
              <Button title='Pressione aqui' onPress={mudarImagem3} />
            </TouchableOpacity>
          </View>
      </View>
    );
  }

  //Styles
  const styles = StyleSheet.create({
    principal: {
      flex: 1,
      backgroundColor: '#5e5e5eff',
    },
    container1: {
      flex: 2,
      alignItems: 'center',
    },
    container2: {
      flex: 2,
      alignItems: 'center',
      backgroundColor: '#6a0002ff',
    },
    container3: {
      flex: 3,
      alignItems: 'center',
      backgroundColor: '#133238',
    },
    texto: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
      color: '#ffff',
      textAlign: 'center',
      backgroundColor: '#323030ff'
    },
    img: {
      width: 200,
      height: 200,
      borderColor: '#ffffff',
      borderRadius: 50,
      margin: 20,
    },
  })
