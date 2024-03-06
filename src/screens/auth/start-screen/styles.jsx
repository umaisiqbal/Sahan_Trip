import { StyleSheet } from "react-native";
import { Colors } from "../../../theme";

export default styles = StyleSheet.create({
    wrapper : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.LightPrimary,
      },
      heading:
      { 
        textAlign: 'center'},
    buttons:{
            shadowColor: Colors.Black,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 5,
    }
})