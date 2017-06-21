import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import moment from 'moment'; 


class Quote extends Component {
	state = { quoteUrl: null }

	componentWillMount() {
		quoteDate = moment().format("MMM" + '-' + "DD").toUpperCase();
		quoteUrl = `https://storage.googleapis.com/bookshelf-today/${quoteDate}`;
		this.setState({ quoteUrl });
	}




	render() {
		const quote_url = this.state.quoteUrl; 
		console.log(quote_url, 'quote url')
		return (
				<Image 
					resizeMode="contain"
					source={{ uri: quote_url }} 
					style={styles.quoteStyle}
				/>
		)
	}
}

const {width} = Dimensions.get('window'); 

const styles = {
	quoteStyle: {
		// resizeMode: 'cover'
		height: 300,
		// flex: 1,
		width: 300, 
		// flex: 1,
		marginTop: 80,
	},
	viewContainer: {
		// position: 'relative',
		// padding: 5,
		// flexDirection: 'row',
		justifyContent: 'center',
		// maxHeight: 400,
		// width: width,
	}
};

export default Quote; 