import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation';
import UserThumbnail from '../components/commons/UserThumbnail';
import { CommonsStyle } from '../utils/Styles';

const { CustomDrawerNavigatorStyle } = CommonsStyle;

const ContentDrawerNavigator = (props) => (
    <ScrollView alwaysBounceVertical contentContainerStyle={ CustomDrawerNavigatorStyle.ScrollViewContainer }>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <UserThumbnail 
          username="Fernando" 
          containerStyle={ CustomDrawerNavigatorStyle.AvatarContainer }
          textStyle={ CustomDrawerNavigatorStyle.AvatarText }
        />
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );

  export default ContentDrawerNavigator;