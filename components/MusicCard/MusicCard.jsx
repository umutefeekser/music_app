import { Image, Text, View } from 'react-native';
import styles from './MusicCard.style';

const MusicCard = ({item}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.imageUrl}} />
        <View style={styles.inner_container}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.bottom}>
                <View style={styles.bottom_inner}>
                    <Text style={styles.artist}>{item.artist}</Text>
                    <Text style={styles.year}>{item.year}</Text>
                </View>
                {item.isSoldOut && <Text style={styles.soldOut}>TÜKENDİ</Text>}
            </View>
        </View>
    </View>
  )
}
;

export default MusicCard