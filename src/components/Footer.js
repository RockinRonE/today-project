import React from 'react'; 
import { View, Image, Dimensions } from 'react-native'; 

const Footer = () => {
	const { width } = Dimensions.get('window'); 
	return (
		<View>
      <Image
        source={require('../../assets/images/footer.png') }
        style={{ height: 170, width: width }}
      />
    </View>
	);
}; 

export default Footer; 
