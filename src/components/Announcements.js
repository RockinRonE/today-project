import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Button, Text, Icon } from 'native-base'; 

class Announcements extends Component {
	
	render() {

		const kickstarter_url = 'https://www.kickstarter.com/projects/matthewhoffman/you-are-beautiful-where-you-are';

		return (
			<Button 
				success 
				iconLeft
				onPress={() => Linking.openURL(kickstarter_url)
					.catch(err => Toast.show({
						supoortedOrientations: ['portrait', 'landscape'],
						text: 'Unable to open link at this time :(',
						position: 'top',
						buttonText: 'Okay'
					}))
				}>
				<Icon name='ios-people' />
				<Text>Check out our Kickstarter!</Text>
			</Button>
		);
	}
}

export default Announcements; 
