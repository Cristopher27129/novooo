import { StyleSheet, Text, View } from 'react-native';
export default function header(){
    return(
    <View style={styles.header}>
      <Text style={styles.headerText}>header</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'rgb(20,20,20)',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '20vh',
      position: 'absolute',
      top:'0',
      color:'(255,255,255)'
    },
    headerText: {
      color:"#fff"
    }
  });
  