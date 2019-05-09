import React, { Component } from 'react';
import { StyleSheet, View, Button,Platform, Text, Image} from 'react-native';
export default class App extends Component{

  constructor(){
      super();
      this.state = {
          TextHolder: 'Hong ????'
      }
  }

  ChangeTextFunction =()=> {
      var randomWords = require('random-words');
      this.setState({
        TextHolder: 'Hong '+randomWords()+'!'
      })
  }

   render(){

     let pic = {
       uri: 'https://media.licdn.com/dms/image/C4E03AQHAIwJ7VllNwA/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=4TbyHwuqg1qZuraZx76qFp5UoCF8u7u5IOorlzN6oGM'
     };

      return(
      <View style={styles.MainContainer}>
          <Text style={{marginBottom: 20, fontSize: 30, fontWeight: "bold"}}> {this.state.TextHolder} </Text>
          <Button title="Click to Generate Nickname" onPress={this.ChangeTextFunction}/>
          <Image source={pic} style={{marginTop: 20, width: 259, height: 300}}/>

      </View>
      );
  }
}


const styles = StyleSheet.create(
{

MainContainer:
{
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   marginTop: (Platform.OS) === 'ios' ? 20 : 0
}

});
