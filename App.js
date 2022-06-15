
import { useState } from "react";
import { StyleSheet, Text, View  ,TouchableOpacity } from "react-native";



export default function App() {

  const [val , setval] = useState(0)
  const add = () =>{
     setval(val + 1 )
  }

  const sub = () =>{
    setval(val - 1 )
 }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{val}</Text>
      <View style={styles.containeer} >
      <TouchableOpacity
        
        onPress={add}
      ><Text style={styles.button}>Increment</Text>
      </TouchableOpacity>

      </View>

      <View style={styles.containeer}>
      <TouchableOpacity
        
        onPress={sub}
      ><Text style={styles.button}>Decrement</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  text :{
    color : "black" ,
    fontSize : 40 
  },
  containeer: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    marginTop : 30 ,
  },
  button : {
    
    color : "white" ,
  }
});
