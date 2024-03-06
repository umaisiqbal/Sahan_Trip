import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Dimensions } from '../../utils/constants'
export default styles = StyleSheet.create({
  card:{
    
    backgroundColor: 'rgba(0,0,0,0.59)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
      
  },
  email:{
   marginHorizontal:10,
  },
  password:{
    marginHorizontal:10,
    marginTop: 10
   },
   emailInput:{
    opacity: 0.59, alignSelf: 'center',
    backgroundColor:"#FFFFFF",
    borderColor:'#FFFFFF',
    width:Dimensions.Width * 0.8,
    
   },
   phoneInput:{
    opacity: 0.59, alignSelf: 'center',
    backgroundColor:"#FFFFFF",
    borderColor:'#FFFFFF',
    width:Dimensions.Width * 0.6,
    textColor:"rgba(255, 255, 255, 0.9)"
   },
   passwordInput:{
    opacity: 0.59,
     alignSelf: 'center',
    backgroundColor:"#FFFFFF",
    borderColor:'#FFFFFF',
    width:Dimensions.Width * 0.8,
    textColor:"rgba(255, 255, 255, 0.9)"
   },
  loginButton: {
       flexDirection: 'row',
       marginTop: 30,
       alignItems: 'center',
      paddingBottom: 10,
      color:Colors.White
     },
     card1:
     {
        justifyContent: 'center',
        width: '95%',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.59)',
        borderRadius: 20,
      },
      image:{
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: -60,
        marginTop: -50,
      }
})