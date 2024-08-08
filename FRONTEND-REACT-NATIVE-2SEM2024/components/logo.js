import { StyleSheet, Text, View, Image } from 'react-native';
export default function header(){
    return(
    <View>
      <Image style={styles.logo} source={{uri:'https://img.quizur.com/f/img645ea8b26b3cc6.13036497.jpg?lastEdited=1683925181'}}/>
      <Text style={styles.logoText}>Cavalos</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        height:'50px',
        width:'50px'
    }

  });
  