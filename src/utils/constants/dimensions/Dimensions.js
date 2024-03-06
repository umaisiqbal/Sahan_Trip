import {Dimensions as Dim} from 'react-native';

const {width, height} = Dim.get('window');

const Dimensions = {
  Width: width < height ? width : height,
  Height: width < height ? height : width,
};

export default Dimensions;
