import React from 'react'
import messaging from '@react-native-firebase/messaging';
import { Text } from 'react-native';
import { firebase } from '@react-native-firebase/messaging/lib';


const App = () => {

  const [token, setToken] = React.useState('')

  React.useEffect(() => {

    const defaultAppMessaging = firebase.messaging();

    getToken = async () => {
      //get the messeging token
      const token = await defaultAppMessaging.getToken();
      console.log(`token  =>`, token)
      setToken(token)
    }

    console.log(`getToken()  =>`, getToken())

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