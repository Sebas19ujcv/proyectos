/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

function App(): React.JSX.Element {
  

  return (
    <SafeAreaView>
      ContentContainerStyle={styles.svContenedor}
      <ScrollView> contentInsetAdjustmentBehavior="automatic" 
        <text style={styles.encabezado}>Sebastian castro</text>
<image style=(styles.20210613_163348) 
source={require('.imagenes/20210613_163348.jpg')}
/>
<view>
  <text> style= {styles.seccionHeader} Lugar de nacimiento:</text>
  <text> style={styles.seccioncontent} Honduras, Tegucigalpa</text>
</view>
<view>
  <text> style= {styles.seccionHeader} Fecha de nacimiento:</text>
  <text> style={styles.seccioncontent} 19 de septiembre de 1999 </text>
</view>
<view>
  <text> style= {styles.seccionHeader} Pasatiempos:</text>
  <text> style={styles.seccioncontent} Jugar, descansar, salir, correr </text>
</view>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  encabezado: {
 fontSize: 36,
 fontWeight: "bold",
 color: "00000"
  },

  svContenedor: {
alignItems: 'center'
 },
 20210613_163348: {
  width:200,
  height:220,

 },
 seccion: {
  flexDirection: 'row'
 },
 seccionHeader: {
  fontSize: 24,
fontWeight: 'bold'
 },

});

export default App;
