import { View, Text, ScrollView, StyleSheet, Image} from "react-native";
import CustomButton from "../../components/CustomButton";
import colors from "../../theme/colors";

const BookDetailScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.imageShadow}>
                    <Image source={require('../../assets/img/TestBook.jpg')} style={{
                        width: 180, 
                        height: 240, 
                        borderRadius: 20, 
                        marginTop: 50,
                    }} resizeMode="stretch"/>
                </View>
            </View>
            <View style={styles.bookInfoContainer}>
                <Text style={styles.bookName}>Book Name</Text>
                <Text style={styles.authorName}>Author Name</Text> 
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.someInfo}>120 pages</Text>
                    <View style={{width: 1, height: 16, backgroundColor: colors.divider, marginHorizontal: 8}}/>
                    <Text style={styles.someInfo}>ENG</Text>
                    <View style={{width: 1, height: 16, backgroundColor: colors.divider, marginHorizontal: 8}}/>
                    <Text style={styles.someInfo}>4.5 rate</Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>

            
        </ScrollView>
            <View style={styles.buttonContainer}>
                <CustomButton title="Read Now" onPress={() => {}} buttonSrtyle={{width: '48%'}}/>
                <CustomButton title="Add to Library" onPress={() => {}} buttonSrtyle={{width: '48%'}}/>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        // paddingHorizontal: 20,
    },
    imageContainer:{
        width: '100%',
        alignSelf: 'center',   
        paddingBottom: 14,
        height: 320,
        backgroundColor: colors.primaryLight,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 24,
        borderRadius: 40,
    },
    imageShadow: {
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 12,
    },
    bookName: {
        fontSize: 24,
        fontFamily: 'Jost',
        color: colors.textPrimary,
        marginBottom: 8,
    },
    authorName: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textSecondary,
        marginBottom: 8,
    },
    bookInfoContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },
    someInfo: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textPrimary,
        // marginBottom: 8,
    },
    descriptionContainer: {
        marginTop: 24,
        paddingHorizontal: 20,
    },
    descriptionTitle: {
        fontSize: 20,
        fontFamily: 'Jost',
        color: colors.textPrimary,
        marginBottom: 8,
    },
    descriptionText: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textSecondary,
        marginBottom: 8,
    },
    buttonContainer: {
       position: 'absolute',
       bottom: 60,
       width: '100%',
       flexDirection: 'row',
       justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});

export default BookDetailScreen;