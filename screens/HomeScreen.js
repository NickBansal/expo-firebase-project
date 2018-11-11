import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { TestComponent } from '../components/AppComponents'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ padding: 80 }}>
        <Text style={{  fontSize: 60  }}>Hello</Text>
        <TestComponent />
      </View>
    );
  }
}
