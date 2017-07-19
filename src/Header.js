
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated,
  Easing,
} from 'react-native';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.animation1 = new Animated.Value(-300);
  }

  // componentWillMount(){
  //   Animated.timing(
  //     this.animation1,
  //     {
  //       toValue:0,
  //       duration:300,
  //     }
  //   ).start();
  // }

  //   componentDidMount(){
  //   Animated.timing(
  //     this.animation1,
  //     {
  //       toValue:0,
  //       duration:300,
  //     }
  //   ).start();
  // }

  //   componentDidUpdate(){
  //   Animated.timing(
  //     this.animation1,
  //     {
  //       toValue:0,
  //       duration:300,
  //     }
  //   ).start();
  // }

    componentWillUpdate(){
    Animated.timing(
      this.animation1,
      {
        toValue:0,
        duration:300,
      }
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
          { this.props.showBack ? <TouchableHighlight style={styles.backButton} onPress={this.props.back}>
            <Image source={require('./../img/back.png')} />
          </TouchableHighlight> : <TouchableHighlight style={styles.backButton} onPress={this.props.back}>
            <Image source={require('./../img/menu.png')} />
          </TouchableHighlight>}
          <Text style={styles.welcome}>
            {this.props.showBack ? <Text style={styles.welcomeTitle}>{this.props.title}</Text> : <Text style={{fontSize:40}}><Text>bart</Text><Text style={styles.welcomeBart}>sign</Text></Text>}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    borderColor:'#444444',
    borderBottomWidth:1,
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
    color:'#fff',
    fontWeight:'bold',
  },
  welcomeBart:{
    color:'#add8e6',
  },
  welcomeTitle:{
    fontSize:20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backButton:{
    position:'absolute',
    top:40,
    left:15,
  }
});

