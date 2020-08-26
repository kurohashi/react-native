/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import Fiboview from "fibo-react"

setJSExceptionHandler((error, isFatal) => {
  console.log(error, isFatal);
  // throw new Error("unhandled exception")
}, true);

setNativeExceptionHandler((errorString) => {
  console.log(errorString);
  // throw new Error("unhandled exception")
});

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  let fibo = {};
  let click = (e) => {
    // console.log(e, JSON.stringify(e._dispatchInstances.stateNode.viewConfig));
    fibo.set("click_event", e);
  };
  return (
    <>
    <View onTouchStart={(e)=>{click(e)}}>
      <Text>Hello world</Text>
    </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
          initialParams={{ setClick: click }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ setClick: click }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    <Fiboview
      appid="b46654bda14d03cfa39562de623c89"
      userInfo={{userId: "shubham@fibo.com"}}
      ref={(e)=>{fibo = e}}
    />
    </>
  );
};

function HomeScreen({ navigation, route }) {
  navigation.addListener("state", (e)=>{});
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onTouchStart={(e)=>route.params.setClick(e)}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation, route }) {
  navigation.addListener("state", (e)=>{});
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onTouchStart={(e)=>route.params.setClick(e)}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={(e) => {navigation.navigate('Home')}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;