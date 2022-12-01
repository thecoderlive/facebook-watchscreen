import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const watchListItem = ({ item }) => (
<View style={styles.watch_list_item}>
<Image
    style={styles.user_icon}
    source={{uri: item.user_icon}}
   />
<Text style={styles.user_name}>{item.user_name}</Text>
<Text style={styles.hash_tag}>{item.hash_tag}</Text>
<Image
    style={styles.video_thumbnail}
    source={{uri: item.video_thumbnail}}
    />
<Text style={styles.like_counts}>{item.like_counts}</Text>
<Image
    style={styles.like_icon}
    source={{uri: item.like_icon}}
   />
</View>
  );

const WatchList = ({ item }) => (
<FlatList
    style={styles.watch_list}
    data={item}
    renderItem={watchListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default WatchList;

const styles = StyleSheet.create({
    'user_icon': {
        'width': '14vw',
        'height': '14vw',
        'margin': 5,
        'borderRadius': 50
    },
    'user_name': {
        'color': '#0b0a0a',
        'fontSize': 18,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'hash_tag': {
        'color': '#4b91ec',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'video_thumbnail': {
        'width': '100vw',
        'height': '100vw',
        'marginTop': 5
    },
    'like_counts': {
        'color': '#858585',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'like_icon': {
        'width': '6vw',
        'height': '6vw',
        'margin': 10
    }
});