import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import colors from "../../theme/colors";
import DiamondSvg from "../../assets/svg/DiamondSvg";

const ExploreBooksScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Your Interest</Text>
            <View style={styles.searchContainer}>
                <TextInput placeholder="Search" style={styles.searchInput} />
            </View>
            <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                <View style={styles.bookCard}>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageShadow}>
                            <Image source={require('../../assets/img/TestBook.jpg')} style={{
                                width: 100, 
                                height: 140,  
                                borderRadius: 10, 
                                marginTop: -24,
                            }} resizeMode="stretch"/>
                        </View>
                    </View>
                    <Text style={styles.bookName}>Book Name</Text>
                    <Text style={styles.authorName}>Author Name</Text>
                </View>
                <View style={styles.bookCard}>
                <DiamondSvg width={20} height={20} color={colors.primaryLight} style={{position: 'absolute', top: 0, right: 4 }}/>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageShadow}>
                            <Image source={require('../../assets/img/TestBook.jpg')} style={{
                                width: 100, 
                                height: 140,  
                                borderRadius: 10, 
                                marginTop: -24,
                            }} resizeMode="stretch"/>
                        </View>
                    </View>
                    <Text style={styles.bookName}>Book Name</Text>
                    <Text style={styles.authorName}>Author Name</Text>
                </View>
                <TouchableOpacity onPress={() => {navigation.navigate('BookDetail')}} style={styles.bookCard}>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageShadow}>
                            <Image source={require('../../assets/img/TestBook.jpg')} style={{
                                width: 100, 
                                height: 140,  
                                borderRadius: 10, 
                                marginTop: -24,
                            }} resizeMode="stretch"/>
                        </View>
                    </View>
                    <Text style={styles.bookName}>Book Name</Text>
                    <Text style={styles.authorName}>Author Name</Text>
                </TouchableOpacity>
               
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 20,
        backgroundColor: colors.background,
    },
    title: {
        alignSelf: 'center',
        fontSize: 24,
        fontFamily: 'Jost',
        color: colors.textPrimary,
        marginBottom: 24,
    },
    bookCard: {
        alignItems: 'center',
        width: '45%',
        marginBottom: 24,
    },
    imageContainer: {
        width: '90%',
        paddingBottom: 14,
        backgroundColor: colors.cardBackground,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        borderRadius: 10,
    },
    imageShadow: {
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
    },
    searchContainer: {
        width: '100%',
        marginBottom: 24,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: colors.textSecondary,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
    },
    bookName: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textPrimary,
        // marginBottom: 8,
    },
    authorName: {
        fontSize: 14,
        fontFamily: 'Jost',
        color: colors.textSecondary,
        marginBottom: 8,
    },
});

export default ExploreBooksScreen;