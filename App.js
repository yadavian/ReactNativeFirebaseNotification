import React, { useState } from 'react'
import messaging from '@react-native-firebase/messaging';
import { Text } from 'react-native';
import { firebase } from '@react-native-firebase/messaging/lib';
import DeviceInfo from 'react-native-device-info';

// or ES6+ destructured imports


const App = () => {

  const [token, setToken] = useState('')
  const [deviceId, setDeviceId] = useState('')
  console.log(`deviceId  =>`, deviceId)

  React.useEffect(() => {

    const defaultAppMessaging = firebase.messaging();

    getToken = async () => {
      //get the messeging token
      const token = await defaultAppMessaging.getToken();
      console.log(`token  =>`, token)
      setToken(token)
      console.log(`getDeviceId()  =>`, getDeviceId())
    }

    console.log(`getToken()  =>`, getToken())

    DeviceInfo.getFirstInstallTime().then((firstInstallTime) => {
      console.log(`firstInstallTime  =>`, firstInstallTime)
      setDeviceId(firstInstallTime);
    });

    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }
  }, [])

  return (
    <Text>App</Text>
  )
}

export default App