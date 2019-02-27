import React, { Component } from 'react';
import { View } from 'react-native';
import { HomeViewStyle } from '../utils/Styles';
import Header from '../components/CustomHeader';
import { Icon } from 'native-base';
import Search from '../components/Search';
import Map from '../components/Map';

//Cria uma linha vertical invisivel para permitir abrir o drawer menu 
//=> https://stackoverflow.com/questions/44602642/react-native-drawer-not-opening-on-swipe-over-map/49905612#49905612
const EdgeVertical = props => (
	<View style={ HomeViewStyle.EdgeVertical } />
)
	
const SearchBar = props => (
	<View style={ HomeViewStyle.SearchBar }>
		<Icon type='FontAwesome' name='square' style={{ margin: 10, marginTop: 18, fontSize: 8 }}/>
		<Search />
	</View>
)

class HomeView extends Component {
	render() {
		return (
			<View style={ HomeViewStyle.container }>
				<Map/>
				<Header onClickAction={() => this.props.navigation.openDrawer()} style={ HomeViewStyle.Header }/>
				<SearchBar/>
				<EdgeVertical />
			</View>
		)
	}
}

export default HomeView;