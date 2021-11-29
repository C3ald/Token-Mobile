import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CHAINDATA from './assets/utilities/sock.js'




export default function App() {
  return (
    <View style={styles.container}>

    <View style={styles.carContainer}>


 {/* images */}
    <ImageBackground 
    source={require('./assets/images/chain-gif.gif')} 
    style={styles.graphimage}
    />
    <ImageBackground
    source={require('./assets/images/chain-icon.png')}
    style={styles.chainimage}
    />

    <ImageBackground
    source={require('./assets/images/mine-icon.png')}
    style={styles.miningicon}
    />


{/* texts */}


    <Text style={styles.chainimagetext}>Filler</Text>
    <Text style={styles.miningicontext}>Mining</Text>
    <Text style={styles.chain} ElementId="chain"></Text>



    <View style={styles.titles}>
        <Text style={styles.title}> Token Mobile </Text>
        <Text style={styles.subtitle}>(price of Token)</Text>
      </View>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#3c3c3c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',

  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },

  subtitle: {
    fontSize: 16,
    color: '#fff'
  },
  graphimage: {
    width: 300,
    height: '50%',
    resizeMode: 'cover',
    position: 'absolute',
    top: '30%',
    left: '8.5%',
  },
  chainimage: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: '58%',
    left: '9%',
  },
  chainimagetext: {
    position: 'absolute',
    color: '#f0f0f0',
    top: '66%',
    left: '11%',
    textAlign: 'center',
  },
  miningicon: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: '58%',
    left: '29%',
  },
  miningicontext: {
    position: 'absolute',
    top: '66%',
    left: '31%',
    color: '#f0f0f0',
  },
  chain: {
    position: 'absolute',
    top: '10%',
    color: '#fff',
  }
});
