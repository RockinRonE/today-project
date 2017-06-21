import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

class Date extends Component {
	state = { 
		displayDate: null,
		quoteDate: null  
	};

	componentWillMount() {
		displayDate = moment().format("ddd MMM DD").toUpperCase();
		quoteDate = moment().format("MMM" + '-' + "DD").toUpperCase();

		this.setState({
			displayDate,
			quoteDate
		});
	}

	render() {
			console.log(this.state, 'this is state'); 
		return (
			<Text style={styles.dateStyle} >
				{this.state.displayDate}
			</Text>
		);
	}
}

const styles = {
	dateStyle: {
		paddingTop: 30,
		fontWeight: '800',
		color: 'grey',
		textAlign: 'center',
	}
}

export default Date; 