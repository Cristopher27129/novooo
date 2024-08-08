import { StyleSheet, Text, View } from 'react-native';
export default function center(){
    return(
    <View style={styles.center}>
      <Text style={styles.centerText}>center</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    center: {
      backgroundColor: '#ff0000',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '50vh',
      position: 'absolute',
      top: '20vh'
    },
    centerText: {
      color:"#fff"
    }
  });
  