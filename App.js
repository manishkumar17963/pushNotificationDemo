import React from 'react';
import {View, Text} from 'react-native';
import PushNotificationManager from './pushNotifications';

const App = () => {
  return (
    <>
      <PushNotificationManager>
        <View style={{flex: 1}}>
          <Text>Hello manish</Text>
        </View>
      </PushNotificationManager>
    </>
  );
};

export default App;
