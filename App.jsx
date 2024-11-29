// In App.js in a new project

import * as React from 'react';
import { View, Text,TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Login() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flex:1,  margin: 0, padding: 10}}>
        <Text style={styles.PageHeading}>Welcome Back! {"\n"}Glad to see you, Again!</Text>
      </View>
      <View style={styles.subContainerBottom}>
        <View style={{ width:'90%'}}>
          <TextInput placeholder='Email' style={styles.inputField}/>
          <TextInput placeholder='Password' secureTextEntry style={styles.inputField}/>
          <TouchableOpacity >
            <Text style={{textAlign:'right', padding: 10}}>forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnWrap} onPress={()=>{navigation.navigate('home')}}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', fontSize:16}}>or login with</Text>
          <View style={styles.iconWrap}>
            <Image style={{height:40, width: 40}} source={require('./assets/google.png')}/>
            <Image style={{height:40, width: 40}} source={require('./assets/facebook.png')}/>
            <Image style={{height:40, width: 40}} source={require('./assets/apple.png')}/>
          </View>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <Text style={{fontSize:16}}>Don't have an Account? </Text>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('Signup') 
              }}>
              <Text style={{fontSize:16, fontWeight:600}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
function SignUp(){
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
      <View style={{ width: "100%", flex:1,  margin: 0, padding: 10}}>
        <Text style={styles.PageHeading}>Hello! Register to get started</Text>
      </View>
      <View style={styles.subContainerBottom}>
        <View style={{ width:'90%'}}>
          <TextInput placeholder='Username' style={styles.inputField}/>
          <TextInput placeholder='Email' style={styles.inputField}/>
          <TextInput placeholder='Password' secureTextEntry style={styles.inputField}/>
          <TextInput placeholder='Confirm Password' secureTextEntry style={styles.inputField}/>
          <TouchableOpacity style={styles.btnWrap} onPress={()=>{navigation.navigate('home')}}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', fontSize:16}}>or Register with</Text>
          <View style={styles.iconWrap}>
            <Image style={{height:40, width: 40}} source={require('./assets/google.png')}/>
            <Image style={{height:40, width: 40}} source={require('./assets/facebook.png')}/>
            <Image style={{height:40, width: 40}} source={require('./assets/apple.png')}/>
          </View>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <Text style={{fontSize:16}}>Already have an Account? </Text>
            <TouchableOpacity onPress={()=>{
              navigation.goBack() }}>
              <Text style={{fontSize:16, fontWeight:600}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
function Home(){
  return(
    <View style={styles.container}>
      <View style={{ width: "100%", flex:1,  margin: 0, padding: 10}}>
        <Text style={styles.PageHeading}>Welcome!</Text>
      </View>
    </View>
  )
}


function RootStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerStyle: {backgroundColor: '#52596b'}, headerTitleStyle:{color: '#fff'}}} >
      <Stack.Screen name="Login" options={{title: 'Login'}}component={Login} />
      <Stack.Screen name='Signup' options={{title: 'SignUp'}} component={SignUp}/>
      <Stack.Screen name='home' options={{tile: 'Home'}} component={Home}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexWrap:'wrap',
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    padding: 10,
    backgroundColor:'#fff' 
  },
  subContainerBottom:{
    width: "100%",
    flex:4,
    alignItems: 'center', 
    justifyContent: 'center', 
    height:'auto', 
    margin: 0, 
    padding: 0
  },
  inputField:{
    padding: 10,
    marginVertical: 10,
    height:50,
    backgroundColor:'#e5e8ee',
    borderRadius:5
  },
  btnText:{
    color:'#ecf1f6', 
    fontSize:28, 
    textAlign:'center', 
    textAlignVertical:'center'
  },
  btnWrap:{
    height:50, 
    backgroundColor:'#1f232e', 
    marginVertical:40, 
    display:'flex', 
    justifyContent:'center', 
    borderRadius:5
  },
  PageHeading:{
    fontSize: 38,
    margin: 0
  },
  iconWrap:{
    marginVertical:30,
    display:'flex',
    height:'auto',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline'
  }
})