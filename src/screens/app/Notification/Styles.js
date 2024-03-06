import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      notificationContent: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
        
    textContainer: {
        flexDirection: 'column',
        flex: 1,
      },
      
    markButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginTop: 50,
        height: 20,
      },
      notification: {
        flexDirection: 'row',
        backgroundColor: '#EDF5F3',
        width: 330,
        height: 80,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
        shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
      },
})
export default styles