import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('register_top.png')}
          resizeMode="stretch"
          style={styles.image}>
        <Image source={require('logo.png')}>
        </Image>
        </ImageBackground>
        <Text>{this.state.Error}</Text>

        <TextInput
          placeholder="E-Mail"
          style={styles.myText}
          onChangeText={email => this.setState({email})}
        />

        <TextInput
          placeholder="Password"
          style={styles.myText}
          onChangeText={password => this.setState({password})}
        />

        <TouchableOpacity
          onPress={this.myFun}
          style={{
            backgroundColor: '#FF8C00',
            borderWidth: 1,
            margin: 10,
            padding: 10,
            width: '90%',
            borderRadius: 40,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    top: 0,
    left: 0,
    right:0,
    height:330,
    width:300,
    
  },

  myText: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    padding: 10,
    width: '90%',
    borderRadius: 40,
  },
});