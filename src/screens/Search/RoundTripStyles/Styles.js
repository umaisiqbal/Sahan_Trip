// RoundTripStyles.js
import { StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../theme';
import {Dimensions, GlobalStyles} from '../../../utils/constants';
const styles = StyleSheet.create({
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingTop: 16,
  },
  flight: {
    width: 218,
    height: 328,
    resizeMode: 'contain',
    marginBottom: GlobalStyles.marginBottomLarge,
  },
  Adventure: {
    width: 340,
    height: 350,
    borderRadius: 10,
    marginTop: 10,
  },
  flatlist: {
    borderRadius: 10,
    marginTop: 10,
     marginLeft:10
  },
  icon: {
    marginRight: 10,
    color: Colors.Primary,
  },
  bottomsheet: {
    
    paddingHorizontal: 10,
  },
  FontAwesomeICons: {
    color: Colors.Primary,
      marginRight:4,
    height:20
  },

  dateOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems : "center",
    columnGap : Dimensions.Width*0.03,
  },
  option1: {
    flexDirection: 'row',
    backgroundColor: Colors.LightWhite,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 10,
    width: 160,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  option: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    padding: 16,
    paddingLeft: 10,
    borderRadius: 15,
    width: 130,
    height: 50,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginLeft:14,
    
  },
  edit:{
    backgroundColor:Colors.Primary,
    width:20,
    height:20,
    borderRadius:30,
    paddingHorizontal:2,
    color: Colors.White,
    position: 'absolute',
    right: 130,  
    bottom: 10, 
  },
  option2: {
    flexDirection: 'row',
    backgroundColor: Colors.LightWhite,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    width: 330,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  departure: {
    flexDirection: 'row',
    backgroundColor: Colors.LightWhite,
    flexGrow : 1,
    height: Dimensions.Height*0.064,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  borderLine: {
    padding: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LighterGray,
  },
  decButton : 
    {
      backgroundColor: Colors.LightGray,
      borderRadius: 9,
      width: Dimensions.Width*0.076,
      height: Dimensions.Width*0.07,
      
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },

    title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: Colors.Black,
    },
    gap: {
      margin: 10,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cabinClass:
    {
      flexDirection: 'row',
      borderBottomColor: 'gray',
      justifyContent: 'space-between',
      paddingVertical: 5,
      width: '85%',
      marginVertical: 10,
    },
    cabinClassView:{
      width: Dimensions.Width * 0.04,
      height: Dimensions.Height * 0.018,
      borderWidth: 0.5,
      marginHorizontal: 60,
      borderRadius: 9,
      borderColor: '#575656',
      flexDirection: 'row',
    },
    bordersLine:{
      borderBottomWidth: 1,
      borderColor: Colors.LightGray,
      width: '72%',
      marginLeft: 10,
    },
    selectedView:{
      width: Dimensions.Width * 0.025,
      height: Dimensions.Height * 0.012,
      borderRadius: 5,
    },
    searchFlight:{
      height:Dimensions.Height * 0.02,
          width:Dimensions.Width * 0,
          alignItems:'center'
    },
    applyButton:{
      height:Dimensions.Height * 0.05,
      width:Dimensions.Width * 0.9
    }
});

export default styles;
