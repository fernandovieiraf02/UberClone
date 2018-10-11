import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation';

const ContentDrawerNavigator = (props) => (
    <ScrollView>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );

  export default ContentDrawerNavigator;