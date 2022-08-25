import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://b86cd4e4af4f49fd9df62309d60e8cd1@o1306210.ingest.sentry.io/6687965",
  enableNative: false,
});

import { Home } from './src/pages/Home';

function App() {
  useEffect(() => {
    // throw new Error('Teste para error tracking sentry');

    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });

    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />

      <Home />
    </>
  );
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);