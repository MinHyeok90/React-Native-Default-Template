import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import ChatRoom from '~/Screens/Home';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ChatRoom />
  );
};

export default App;
