import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import InfoSvg from "../../assets/svg/InfoSvg";
import colors from "../../theme/colors";
import DiamondSvg from "../../assets/svg/DiamondSvg";

const MyLibrary = ({navigation}) => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>My Library</Text>
            <View style={styles.searchContainer}>
                <TextInput placeholder="Search" style={styles.searchInput} />
            </View>
            <View style={styles.bookListContainer}>
                <View style={styles.bookCard}>
                    <TouchableOpacity onPress={() => {navigation.navigate('BookDetail')}} style={{position: 'absolute', bottom: 12, right: 12}}>
                        <InfoSvg width={30} height={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('BookContent')}} style={styles.imageShadow}>
                        <Image source={require('../../assets/img/TestBook.jpg')} style={styles.bookImage} resizeMode="stretch" />
                    </TouchableOpacity>
                    <Text style={styles.bookName}>Book Name</Text>
                    <Text style={styles.authorName}>Author Name</Text>
                </View>
                <View style={styles.bookCard}>
                    <DiamondSvg width={20} height={20} color={colors.primaryLight} style={{position: 'absolute', top: -30, right: 0 }}/>
                    <TouchableOpacity onPress={() => {navigation.navigate('BookDetail')}} style={{position: 'absolute', bottom: 12, right: 12}}>
                        <InfoSvg width={30} height={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('BookContent')}} style={styles.imageShadow}>
                        <Image source={require('../../assets/img/TestBook.jpg')} style={styles.bookImage} resizeMode="stretch" />
                    </TouchableOpacity>
                    <Text style={styles.bookName}>Book Name</Text>
                    <Text style={styles.authorName}>Author Name</Text>
                </View>
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
        fontSize: 24,
        fontFamily: 'Jost',
        color: colors.textPrimary,
        marginBottom: 24,
    },
    bookListContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 100,
        justifyContent: 'center',
       
    },
    bookCard: {
        width: '100%',
        marginTop: 34,
        marginBottom: 54,
        borderRadius: 20,
        backgroundColor: colors.cardBackground,
        alignItems: 'center',
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    bookImage: {
        width: '80%',
        marginTop: -34,
        height: 400,
        borderRadius: 10,
    },
    imageShadow: {
        width: '100%',
        alignItems: 'center',
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 12,
    },
    bookName: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textPrimary,

    },
    authorName: {
        fontSize: 14,
        fontFamily: 'Jost',
        color: colors.textSecondary,
        marginBottom: 8,
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
});
export default MyLibrary;