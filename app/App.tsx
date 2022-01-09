import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Button, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform } from 'react-native'
import { openBrowserAsync } from 'expo-web-browser'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker'

const padding = 25

export default function App() {
  const [name, setName] = useState('name')
  const [git, setGit] = useState('https://www.baropill.com/')
  const [uri, setUri] = useState('')
  const [time, setTime] = useState('Never')

  const fetchInfo = () => {
    setTime(new Date().toString())
  } // replace query here

  const [name_, setName_] = useState('')
  const [git_, setGit_] = useState('')
  const [uri_, setUri_] = useState('')
  const [time_, setTime_] = useState('Never')

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    })
    if (!result.cancelled) setUri_(result.uri)
  }
  
  const updateInfo = () => {
    setTime_(new Date().toString())
  } // replace query here

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="auto"/>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>

        <View style={styles.container}>
          <Text style={{fontSize: 20}}>{`PART 1 : DISPLAY INFO`}</Text>
          <Text>
            {`\nMy name is "${name}".\nYou can find my github `}
            <Text style={{color: 'blue', textDecorationLine: 'underline'}} onPress={()=>openBrowserAsync(git)}>{'here'}</Text>
          </Text>
          <View style={styles.imageHolder}>
            {uri ? <Image source={{uri: uri}} style={styles.image}/> : <></>}
          </View>
          <Button title="FETCH" onPress={fetchInfo}/>
          <Text style={styles.timestamp}>{`Recent fetch: ${time}`}</Text>
        </View>

        <View style={styles.container}>
          <Text style={{fontSize: 20}}>{`PART 2 : UPDATE INFO`}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Text style={{width: 50}}>{'NAME '}</Text>
            <TextInput style={styles.textInput} placeholder='Name' onChangeText={setName_} value={name_}/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Text style={{width: 50}}>{'GIT '}</Text>
            <TextInput style={styles.textInput} placeholder='Github Link' onChangeText={setGit_} value={git_}/>
          </View>
          
          <TouchableOpacity onPress={pickImage} style={styles.imageHolder}>
            {uri_ ? <Image source={{uri: uri_}} style={styles.image}/>
              : <Text style={{fontSize: 90, color: '#aaa'}}>{'+'}</Text>}
          </TouchableOpacity>
          <Button title="UPDATE" onPress={updateInfo}/>
          <Text style={styles.timestamp}>{`Recent request: ${time_}`}</Text>
        </View>
        <View style={{height: padding}}/>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: padding,
    paddingBottom: 0,
  },
  imageHolder: {
    width: 150,
    height: 150,
    backgroundColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#aaa',
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: Platform.OS == 'ios' ? 0 : 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  timestamp: {
    fontSize: 12,
    color: '#ccc',
    marginTop: Platform.OS == 'ios' ? 0 : 5,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#aaa',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
  }
});
