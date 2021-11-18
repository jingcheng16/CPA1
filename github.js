import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput,Button, FlatList } from 'react-native';

const github = () => {

  const[userid, setUserid] = useState('');
  const[showRepository,setShowRepository] = useState(false);
  const[data, setData] = useState([]);

  const getGithubData = async (userid) => {
    try{
      let result = await fetch('https://api.github.com/users/'+userid+'/repos')
      let gdata = await result.json()
      setData(gdata)
    }catch(e){
      console.log(`error in getGithubData: ${JSON.stringify(e)}`)
    }

  }

  const renderItem = ({item}) => {
    return (
      <View style = {styles.repository}>
        <Text style = {{fontSize: 20}}>{item.name}</Text>
     </View>
  )}

  useEffect(() => {
    getGithubData(userid)
  }, [userid]);
  

  return(
    <View style = {styles.screen}>
      <View style = {styles.header}>  
        <Text style = {styles.titleText}>
          Github Viewer
        </Text>
      </View>
      <View style = {styles.body}>
        <View style = {styles.inputRow}>
          <Text style = {styles.githubId}>
            github Id:
          </Text>
          <TextInput style = {styles.githubId} placeholder="userid" onChangeText = {text => setUserid(text)} value = {userid}/>
        </View>
        {showRepository?<Button title = "hide repositories" onPress = {()=>setShowRepository(false)}/>
        :<Button title = "show repositories" onPress = {()=>setShowRepository(true)}/>}
        {showRepository?
        <FlatList data = {data} renderItem = {renderItem} keyExtractor = {item => item.id}/>
        :<View style = {styles.repository}><Text>None</Text></View>}
      </View>
      <View style = {styles.debug}>
        <Text style = {styles.debugText}>DEBUGGING</Text>
        <Text style = {styles.debugText}>userId: {userid}</Text>
        <Text style = {styles.debugText}>showReps:{showRepository?"true":"false"}</Text>
        <Text style = {styles.debugText}>repos.length = {showRepository?data.length:"1"}</Text>
      </View>
      
    </View>

  ); 
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems:'center'
  },
  titleText: {
    color: 'red',
    fontSize: 50
  },
  body: {
    flex: 6,
    alignItems: 'flex-start'
  },
  inputRow: {
    flexDirection:'row',
    alignItems:'flex-start'
  },
  githubId:{
    fontSize:30,
  },
  repository:{
    backgroundColor:'lightgrey',
    margin: 10,
    padding: 10,
  },
  debug:{
    flex:1
  },
  debugText:{
    fontSize:15
  }
})

export default github;