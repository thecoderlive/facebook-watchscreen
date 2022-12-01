import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import WatchList from './WatchList'

const Watch = () => (
<ScrollView style={styles.watch} showsVerticalScrollIndicator={false}>
<WatchList item={item.watch_list}/>
</ScrollView>
)

export default Watch;

const styles = StyleSheet.create({
    
});