/**
 * PROJECT TITLE:         FIZZO
 * AUTHOR:                AFIZ SAVAGE
 * START WRITING ON:      12-APRIL-2021
 * END WRITING ON:        12-APRIL-2021
 */

 import React, { useEffect, useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 
 const DetailScreen = ({ navigation, route }) => {
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);
 
   return (
     <SafeAreaView>
       <View>
         <Text style={styles.mainTitle}>Fizzo</Text>
       </View>
       <ScrollView contentInsetAdjustmentBehavior="automatic">
         <Text>Detail view</Text>
         <Text>This is {route.params.name}'s profile</Text>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   mainScroll: {
     marginBottom:  20
   },
   mainTitle: {
     color: "blue",
     fontSize: 30,
     padding: 4
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default DetailScreen;
 
 