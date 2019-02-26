import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated, TouchableOpacity, Geolocation } from 'react-native';
import { HomeViewStyle } from '../utils/Styles';
import MapView, { Callout } from 'react-native-maps';
import Header from '../components/CustomHeader';
import { Input, Icon } from 'native-base';
import customMapStyle from '../utils/Styles/CustomMapStyle.json';
import Search from '../components/search/Search';
import { connect } from 'react-redux';

//Cria uma linha vertical invisivel para permitir abrir o drawer menu 
//=> https://stackoverflow.com/questions/44602642/react-native-drawer-not-opening-on-swipe-over-map/49905612#49905612
const EdgeVertical = props => (
	<View style={ HomeViewStyle.EdgeVertical } />
)
	
const SearchBar = props => (
	<View style={ HomeViewStyle.SearchBar }>
		<Icon type='FontAwesome' name='square' style={{ margin: 10, fontSize: 8 }}/>
		<Search />
	</View>
)
		
const FloatView = props => (
	<Animated.View
		style={{ position: 'absolute', height: '20%', width: '100%', backgroundColor: '#F00', bottom: 20 }}/>
)

class HomeView extends Component {

	constructor(props) {
		super(props);
		this.state = { initialRegion: {
			longitude: 0,
			latitude: 0,
			longitudeDelta: 0.999,
			latitudeDelta: 0.999
		}};
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				 const initialRegion = JSON.stringify(position);
				 this.setState({ initialRegion });
			},
			(error) => alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
	 );
	}

	render() {
		let places = {latitude: 0, longitude:0, longitudeDelta: 0.999, latitudeDelta: 0.999};
		if (this.props.places) {
			places = {...places, ...this.props.places};
		}

		return (
			<View style={ HomeViewStyle.container }>
				<Header onClickAction={() => this.props.navigation.openDrawer()} style={ HomeViewStyle.Header }/>
				<SearchBar/>
				<MapView 
					style={ HomeViewStyle.MapView }
					region={places}
					showsUserLocation
					followsUserLocation
					showsMyLocationButton
					userLocationAnnotationTitle={'Você'}/>
				<EdgeVertical />
			</View>
		)
	}
}

const mapStatesToProps = (state, props) => {
	const { places } =  state.MapPlacesReducer;
	return { places };
}

export default connect(mapStatesToProps, null, null)(HomeView);