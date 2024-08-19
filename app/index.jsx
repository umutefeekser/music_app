import { View, FlatList, StyleSheet } from "react-native";
import MusicCard from '../components/MusicCard';
import SearchBar from '../components/SearchBar';
import { useState } from "react";

export default function Index() {

  const [text, setText] = useState("");

  const onChange = text => {
    setText(text);
  }

  return (
    <View style={styles.container}>
      <SearchBar
      onChange={onChange}
      />
      
      <FlatList
      data={require("../assets/music-data.json").filter(i => i.title.toLowerCase().includes(text.toLowerCase()) || i.artist.toLowerCase().includes(text.toLowerCase()))}
      renderItem={({item}) => <MusicCard item={item}/>}
      keyExtractor={i => i.id}
      ItemSeparatorComponent={<View style={styles.seperator}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  seperator: {
    borderWidth: 1,
    borderColor: "#e0e0e0"
  }
})
