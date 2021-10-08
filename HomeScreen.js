import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';


export default class HomeScreen extends React.Component {
student1aPressed(){
  var student1a = db.ref('Student1/' + '/')
  student1a.update({
    'absent': 'true'
  })
}

student1bPressed(){
  var student1b = db.ref('Student1/' + '/')
  student1b.update({
    'present': 'true'
  })
}
student2aPressed(){
  var student2a = db.ref('Student2/' + '/')
  student2a.update({
    'absent': 'true'
  })
}

student2bPressed(){
  var student2b = db.ref('Student2/' + '/')
  student2b.update({
    'present': 'true'
  })
}
student3aPressed(){
  var student3a = db.ref('Student3/' + '/')
  student3a.update({
    'absent': 'true'
  })
}

student3bPressed(){
  var student3b = db.ref('Student3/' + '/')
  student3b.update({
    'present': 'true'
  })
}
student4aPressed(){
  var student4a = db.ref('Student4/' + '/')
  student4a.update({
    'absent': 'true'
  })
}

student4bPressed(){
  var student4b = db.ref('Student4/' + '/')
  student4b.update({
    'present': 'true'
  })
}

  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View style = {styles.container}>
        <AppHeader />

        <Text style={styles.studenChartContainer}>Student1</Text>
        <Text style={styles.studenChartContainer}>Student2</Text>
        <Text style={styles.studenChartContainer}>Student3</Text>
        <Text style={styles.studenChartContainer}>Student4</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.student1aPressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button }
          onPress={() => {
            this.student2aPressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
               this.student3aPressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
             this.student4aPressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>
           <TouchableOpacity
          style={styles.button2}
          onPress={() => {
           this.student1bPressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
             this.student2bPressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.student3bPressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.student4bPressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.button3Text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  studenChartContainer: {
     flexDirection: 'row',
     padding: 10,
     alignItems: 'center',
     marginTop: 20
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: -45,
    marginBottom: -32,
    marginLeft: 200,
    width: 90,
    height: 25,
    backgroundColor: 'red'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 19,
    marginTop: 8,
    marginLeft: -30,
    width: 90,
    height: 25,
    backgroundColor: 'green'
  },
  button2Text: {
    textAlign: 'center',
    color: 'white',
  },
  button3: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    //marginBottom: 10,
   marginTop: 30,
    marginLeft: 40,
    width: 200,
    height: 50,
    backgroundColor: 'teal',
  },
   button3Text: {
    textAlign: 'center',
    color: 'springgreen',
  },
   container: {
   backgroundColor: "lightpink"

   }
});