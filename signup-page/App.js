import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      password: '',
    };
  }
  myFun = () => {
    const {fname, lname, password} = this.state;
    if (fname == '') {
      this.setState({Error: 'please fill the first name'});
    } else if (lname == '') {
      this.setState({Error: 'please fill the last name'});
    } else if (password == '') {
      this.setState({Error: 'please fill the password'});
    } else if (password.length < 5) {
      this.setState({Error: 'password  must be more than 5'});
    } else {
      this.setState({Error: 'Sign up successfully'});
    }
  };
  render() {
    return (
      <View style={styles.container}>
     <ImageBackground
          source={require('register_top.png')}
          resizeMode="stretch"
          style={styles.image}>
        <Image  style={{
            resizeMode: "center",
            height: 100,
            width: 100,
          }} source={require('logo (2).png')}>
        </Image>
        </ImageBackground>
        <Text>{this.state.Error}</Text>
<TextInput
          placeholder="Name"
          style={styles.myText}
          onChangeText={fname => this.setState({fname})}
        />
        

        <TextInput
          placeholder="E-Mail"
          style={styles.myText}
          onChangeText={lname => this.setState({lname})}
        />

        <TextInput
          placeholder="Mobile No."
          style={styles.myText}
          onChangeText={password => this.setState({password})}
        />

        <TextInput
          placeholder="Password"
          style={styles.myText}
          onChangeText={password => this.setState({password})}
        />

        <TouchableOpacity
          onPress={this.myFun}
          style={{backgroundColor: '#FF8C00', padding: 8, width: 250, borderRadius: 10, justifyContent:'center',alignItems:'center'}}>
        
          <Text style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 'bold',
            }}>SIGNUP</Text>
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
    height:180,
    width:280,
  },
    
  myText: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    padding: 10,
    width: '90%',
    borderRadius : 40,
  },
  
  
});