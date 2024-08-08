import { StyleSheet, Text, View } from 'react-native';
export default function footer(){
    return(
    <View style={styles.footer}>
        <Text>footer</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    footer: {
      backgroundColor: '#cccccc',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '30vh',
      position: 'absolute',
      top: '70vh'
    }
  });
  