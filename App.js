import { React } from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/81827714?s=400&u=8b028a89da7de711aa74d64e2403e9b74078b676&v=4';
const colorFontGithub = '#c9d1d9';
const urlProfileGithub = 'https://github.com/alexrobem22';


export default function App() {

  const handlePressGoToGithub = async ()=>{
    console.log("verificando link");
    const res = await Linking.canOpenURL(urlProfileGithub);

    if(res){
      console.log("dentro do if");
      await Linking.openURL(urlProfileGithub);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
    <View style={styles.content}>
      <Image style={styles.avatar} source={{uri: imageProfileGithub}} accessibilityLabel="Foto de perfil de alexrobem22"/>
      
      <Text style={[styles.defaultText, styles.name]} accessibilityLabel="nome alex silva">Alex Silva</Text>
      <Text style={[styles.defaultText, styles.description]} accessibilityLabel="Full Stack" >Programador Full Stack</Text>
    

    </View>
    <Pressable onPress={handlePressGoToGithub}>
    <View style={styles.button}>
      <Text> Open in Github</Text>
    </View>
    </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//Expandir para a tela inteira
    backgroundColor: colorGithub,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
   alignItems: 'center',
   padding: 20,
  },
  avatar: {
    width:200,
    height: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2
  },
  defaultText: {
    color: colorFontGithub
  },
  name:{
    fontWeight: 'bold',
    fontSize: 30,
    margin: 5
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button:{
    marginTop: 40,
    backgroundColor: colorFontGithub,
    borderRadius: 10,
    padding: 20,
  }


});
