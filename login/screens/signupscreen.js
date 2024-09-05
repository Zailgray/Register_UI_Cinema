import { Image, StyleSheet,View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

const signupscreen = () => {
const [isChecked, setChecked] = useState(false);
const buttonreg = () => {
  console.log("Welcome our new client!");
}
  return (
    <View style={styles.background}>
      <View style={styles.back1}>
          <Image source={require("../assets/back_login.png")} style={styles.back} />
          <View style = {styles.logo}>
              <Image source={require("../assets/logologin.png")} style={styles.toplogo} />
          </View>
      </View>
      <View style={styles.input_fname}>
          <TextInput placeholder='FIRST NAME'/>
      </View>      
      <View style={styles.input_lname}>
          <TextInput placeholder='LAST NAME'/>
      </View>
      <View style={styles.age}>
          <TextInput placeholder='AGE'/>
      </View>
      <View style={styles.gender}>
          <TextInput placeholder='GENDER(M/F)'/>
      </View>
      <View style={styles.email}>
          <TextInput placeholder='EMAIL ADDRESS'/>
      </View>
      <View style={styles.checkbox}>
          <Text style={styles.condition}><Checkbox value={isChecked} onValueChange={setChecked} />  AGREE WITH THE TERMS AND CONDITION.</Text>
      </View>
      <View style={styles.butreg}>
          <TouchableOpacity style={styles.button1} onPress={buttonreg}>
            <Text style={styles.reg}>REGISTER</Text>
          </TouchableOpacity>
      </View>

    </View> 
  )
}

export default signupscreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#2D3873',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  toplogo:{
    width: "80%",
    height: "35%",
    marginLeft: 38,
    marginBottom: 200,
    marginTop: 5,
  },
  back: {
      width: "15%",
      height: "10%",
      paddingVertical: 0,
      marginLeft: 10,
      marginTop: -145,
      marginBottom: 10,
      paddingBottom: 30,
      
  },
  input_fname: {
    padding: 0,
    marginTop: 0,
    position: "absolute",
    marginTop: 50,
    marginLeft: 50,
    backgroundColor: "white",
    width: 259,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    paddingLeft: 7,

  },
  input_lname: {
    padding: 0,
    marginTop: 0,
    position: "absolute",
    marginTop: 110,
    marginLeft: 50,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    paddingLeft: 7,
    width: 259,
    height: 40,
  },
  age: {
    padding: 0,
    marginTop: 0,
    position: "absolute",
    marginTop: 170,
    marginLeft: 50,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    paddingLeft: 7,
    width: 259,
    height: 40,
  },
  gender: {
    padding: 0,
    marginTop: 0,
    position: "absolute",
    marginTop: 230,
    marginLeft: 50,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    paddingLeft: 7,
    width: 259,
    height: 40,
  },
  email: {
    padding: 0,
    marginTop: 0,
    position: "absolute",
    marginTop: 290,
    marginLeft: 50,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    paddingLeft: 7,
    width: 259,
    height: 40,
  },
  checkbox: {
    padding: 0,
    justifyContent: 'center',
    marginTop: 0,
    position: "absolute",
    marginTop: 340,
    marginLeft: 50,
    borderRadius: 30,
    justifyContent: "center",
    paddingLeft: 7,
    width: 259,
    height: 40,

  },
  condition: {
    fontSize: 11,
    textAlign: 'center',
    color: 'white'
  
  },
  butreg: {
    padding: 0,
    justifyContent: 'center',
    marginTop: 0,
    position: "absolute",
    marginTop: 400,
    marginLeft: 50,
    justifyContent: "center",
    paddingLeft: 7,
    width: 259,
    height: 40,
  },
  reg: {
    textAlign: 'center'
  },
  button1:{
    backgroundColor: '#81BD36',
    width: 259,
    height: 40,
    width: 150,
    justifyContent: 'center',
    marginLeft: 44,
    borderRadius: 30
   }
})