import { TextInput } from "react-native"
import styles from './SearchBar.style'

const SearchBar = (props) => {
  return (
    <TextInput placeholder="Ara..." onChangeText={props.onChange} style={styles.textInput}/>
  )
}

export default SearchBar