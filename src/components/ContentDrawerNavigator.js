import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { Separator, CardItem } from 'native-base';
import UserThumbnail from '../components/commons/UserThumbnail';
import { CommonsStyle } from '../utils/Styles';
import { DARKNESS_BLACK_COLOR, GRAY_COLOR } from '../utils/Colors';

const { 
  ScrollViewContainer, 
  AvatarContainer, 
  AvatarText,
  TipContainer,
  TipTitle,
  TipText,
  SeparatorLine
  } = CommonsStyle.CustomDrawerNavigatorStyle;

const Tip = (props) => (
  <View style={ TipContainer }>
    <Text style={ TipTitle }>Faça mais com sua conta</Text>
    <Text style={ TipText }>Ganhe dinheiro dirigindo</Text>
  </View>
);

const ContentDrawerNavigator = (props) => (
  <View style={{ flex: 1 }}>
    <ScrollView 
      alwaysBounceVertical 
      contentContainerStyle={ ScrollViewContainer }
      style={{ flex: 1, flexWrap: 'wrap' }}
    >
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <UserThumbnail 
          username="Fernando" 
          containerStyle={ AvatarContainer }
          textStyle={ AvatarText }
        />
        <View style={ SeparatorLine } />
        <Tip />
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
    <View style={ SeparatorLine } />
    <View style={{ height: 40, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, flexDirection: 'row', backgroundColor: 'white' }}>
      <Text>Informações legais</Text>
      <Text>v4.343.23123</Text>
    </View>
  </View>
);

  export default ContentDrawerNavigator;