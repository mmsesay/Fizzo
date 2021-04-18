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
  FlatList,
  useColorScheme,
  View,
} from 'react-native';
import AppCard from './components/AppCard';


const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=c57d7cfbeda14676b7af68da22f2a42e`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.articles)
        console.log(json.articles)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.mainTitle}>Fizzo</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {
          //Loop of JS which is like foreach loop
          data.map((item) => <AppCard article={item} navigation={navigation} />)
        }
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

export default HomeScreen;

