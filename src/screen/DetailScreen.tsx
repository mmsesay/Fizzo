import React, { useState } from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';

let tracker: number; // will track the display
const DetailScreen = ({route}: any) => {

  const [trackValue, setTrackValue] = useState<number>(0);
  // destructure
  const { data } = route.params;
  
  const incrementTrack = ({ content }: any) => {
    setTrackValue(+1)

    return <Text>{content}</Text>;
  }

  const resetTrack = () => {
    setTrackValue(0)
  }

  return (
    <View style={styles.container}>
      
       <Text adjustsFontSizeToFit={true} style={styles.title}>
        {data.title}
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: data.urlToImage,
        }}
      />
      <View style={styles.metaDataContainer}>
        <Text>
          Author: {data.author.startsWith('https') ? data.source.name : data.author}
        </Text>
        <Text>
          Pub: {data.publishedAt.substring(0, 10)}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text numberOfLines={0} style={styles.content} adjustsFontSizeToFit={true}>{data.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  image: {
    height: 150
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center'
  },
  metaDataContainer: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentContainer: {
    paddingTop: 10,
    flex: 1
  },
  content: {
    paddingTop: 20,
    fontSize: 18,
  }
});

export default DetailScreen;
