/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Button, Image, Pressable} from 'react-native';
import AppCard from '../components/AppCard';


type Props = {
  navigation: any
};

const HomeScreen = ({navigation}: any) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=c57d7cfbeda14676b7af68da22f2a42e',
    )
      .then(response => response.json())
      .then(json => {
        setData(json.articles);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    
    <View>
      <View>
        <Text style={styles.mainTitle}>Latest News</Text>
      </View>
      <View>
      {data === undefined?
        <Text>Loading</Text>
        :
        <ScrollView style={styles.sView}>
          {
            //Loop of JS which is like foreach loop
            data.map((article: any) => 
              <View key={article.url} style={styles.cardView}>
                <View style={styles.rowSection}>
                  <Image
                    style={styles.thumbnail}
                    source={{
                      uri: article.urlToImage,
                    }}
                  />
                  {/* title */}
                  <View style={styles.titleContainer}>
                    <Pressable
                      onPress={() => navigation.navigate('Detail', { data: article })}>
                      <Text numberOfLines={2} style={styles.title}>{article.title}</Text>
                      <Text style={styles.pubDate}>
                        Published on: {article.publishedAt.substring(0, 10)}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>            
            )
          }
        </ScrollView>
      }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  },
  cardView: {
    backgroundColor: '#bdc3c7',
    height: 100,
    marginHorizontal: 20,
    marginVertical: 20
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  rowSection: {
    flexDirection: 'row',
  },
  titleContainer: {
    padding: 10,
    flex: 1
  },
  title: {
    fontSize: 16,
  },
  summary: {
    fontSize: 15,
    paddingTop: 10,
  },
  sView: {
    marginBottom: 150,
  },
  pubDate: {
    fontSize: 13,
    paddingTop: 5,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginVertical: 12
  }

});

export default HomeScreen;


