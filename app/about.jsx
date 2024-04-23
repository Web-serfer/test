import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Page() {
  return (
    <View style={s.container}>
      <View style={s.main}>
        <Text style={s.title}>About screen</Text> 

        {/* button */}
        <TouchableOpacity style={s.button}>
          <Link href="/" style={s.link}>
            Go to home
          </Link>
        </TouchableOpacity>      
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007BFF', 
    padding: 10,
    borderRadius: 25, 
    alignItems: 'center',
    marginTop: 20
  },
  link: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
});

