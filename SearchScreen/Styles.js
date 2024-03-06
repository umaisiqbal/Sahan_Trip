import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../src/theme'


const styles = StyleSheet.create({

    backButton: {
        color:'Black',
        flexDirection: 'row', 
        alignItems: 'center',
        opacity: 1,
        
      },
      backButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
      
      },
      textContainer: {
        backgroundColor: 'red',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      // flatlists: {
      //   borderRadius: 10,
      //   marginTop: 10,
      //    marginLeft:10,
      //    shadowColor: 'black',
      //    shadowOffset: { width: 0, height: 2 },
      //    shadowOpacity: 10,
      //    shadowRadius: 5,
      //    elevation: 60,
      //      // Set the height of your image
      //       resizeMode: 'cover',
        
      // },
      // imageBackground: {
      //   backgroundColor: 'black',
      //   borderRadius: 20,
      //   paddingBottom:10,

      // },
   
})
export default styles