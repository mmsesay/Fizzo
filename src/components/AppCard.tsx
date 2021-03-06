// AppCard.tsx
import React from 'react';
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';

const AppCard = ({navigation, article}: any) => {
  const getItem = item => {
    // Function for click on an item
    console.log(item);
    navigation?.navigate('Detail', { data: item })
  };

  return (
    <View key={article.id} style={styles.mainView}>
      <View style={styles.rowSection}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: article.urlToImage,
          }}
        />
        {/* brief */}
        <View style={styles.briefContainer}>
          {/* <Text style={styles.title} onPress={() => getItem(article)}>
            App Card
          </Text> */}

          <Pressable
            onPress={() => navigation.navigate('Detail')}
          style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
          >
            <Text>App Card</Text>
          </Pressable>
          <Text style={styles.summary}>Sumary</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#bdc3c7',
    height: 100,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  rowSection: {
    flexDirection: 'row',
  },
  briefContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  summary: {
    fontSize: 15,
    paddingTop: 10,
  },
});

export default AppCard;
