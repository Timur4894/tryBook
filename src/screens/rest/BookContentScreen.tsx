import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import CustomButton from "../../components/CustomButton";
import { TouchEventType } from "react-native-gesture-handler/lib/typescript/TouchEventType";
import FillRightArrowSvg from "../../assets/svg/FillRightArrowSvg";
import ArrowRightSvg from "../../assets/svg/ArrowRightSvg";
import colors from "../../theme/colors";

const BookContentScreen = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentHeader}>
                    <TouchableOpacity onPress={() => {navigation.goBack()}} style={{}}>
                        <ArrowRightSvg width={20} height={20} color={colors.textPrimary} style={{marginRight: 4, transform: [{rotate: '180deg'}]}}/>
                    </TouchableOpacity>

                </View>
                <Text style={styles.title}>Harry Potter and the Philosopher's Stone</Text>
                <Text style={styles.author}>J.K. Rowling</Text>

                <View style={styles.contentContainer}>
                    <Text style={styles.contentTitle}>Chapter 1</Text>
                    <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
               <TouchableOpacity style={styles.button}>
                    <FillRightArrowSvg width={20} height={20} color={colors.textPrimary} style={{marginRight: 4, transform: [{rotate: '180deg'}]}}/>

                    <Text style={styles.buttonText}>
                        Previous
                    </Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                    <FillRightArrowSvg width={20} height={20} color={colors.textPrimary} style={{marginLeft: 4}}/>
               </TouchableOpacity>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 20,
        backgroundColor: colors.background,
    },
    contentHeader:{
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Jost',
        color: colors.textPrimary,
        // marginBottom: 24,
    },
    author: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textSecondary,
        marginBottom: 24,
    },
    contentContainer: {
        marginTop: 24,
        paddingBottom: 200,
    },
    contentTitle: {
        fontSize: 20,
        fontFamily: 'Jost',
        color: colors.textPrimary,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textPrimary,
    },
    contentText: {
        fontSize: 18,
        fontFamily: 'Jost',
        color: colors.textSecondary,
        marginBottom: 24,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 60,
        backgroundColor: colors.cardBackground,
        width: '90%',
        borderRadius: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    button: {
        width: '48%',
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
    },
});

export default BookContentScreen;