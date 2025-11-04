import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Switch , Linking, Alert} from "react-native";
import ArrowRightSvg from "../../assets/svg/ArrowRightSvg";
import colors from "../../theme/colors";
import { useState } from "react";
import CustomModal from "../../components/CustomModal";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const ProfileScreen = ({navigation}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSupportModalVisible, setIsSupportModalVisible] = useState(false);

    const dispatch = useDispatch();

    const handleOpenModal = () => {
        setIsModalVisible(true);
    };
    const handleOpenSupportModal = () => {
        setIsSupportModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setIsSupportModalVisible(false);
    };

    return (
        <>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.accountContainer}>
                    <Text style={styles.title}>Account</Text>
                    <Image source={require('../../assets/img/TestBook.jpg')} style={styles.image} />
                    <Text style={styles.name}>Name</Text>
                    <Text style={styles.nameValue}>John Doe</Text>
            </View>
            <View style={styles.accountInfoContainer}>
                <View style={styles.groupOptionContainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('EditProfile')}} style={styles.optionContainer}>
                        <Text style={styles.optionTitle}>Edit Profile</Text>
                        <ArrowRightSvg width={20} height={20} color={colors.textSecondary} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleOpenModal} style={styles.optionContainer}>
                        <Text style={styles.optionTitle}>Change Password</Text>
                        <ArrowRightSvg width={20} height={20} color={colors.textSecondary} />
                    </TouchableOpacity>
                </View>

                <View style={styles.groupOptionContainer}>
                    <View style={styles.optionContainer}>
                        <Text style={styles.optionTitle}>Notifications</Text>
                        <Switch
                            value={true}
                            onValueChange={() => {}}
                        />
                    </View>
                    <View style={styles.optionContainer}>
                        <Text style={styles.optionTitle}>Theme</Text>
                        <Switch
                            value={true}
                            onValueChange={() => {}}
                        />
                    </View>
                </View>
                
                <View style={styles.groupOptionContainer}>
                <TouchableOpacity onPress={()=>{navigation.navigate('SubscriptionScreen')}} style={styles.optionContainer}>
                    <Text style={styles.optionTitle}>Subscription</Text>
                    <ArrowRightSvg width={20} height={20} color="#666" />
                </TouchableOpacity>
                </View>
                

                <View style={styles.groupOptionContainer}>
                    <TouchableOpacity onPress={handleOpenSupportModal} style={styles.optionContainer}>
                        <Text style={styles.optionTitle}>Support</Text>
                        <ArrowRightSvg width={20} height={20} color={colors.textSecondary} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {Linking.openURL('https://www.google.com')}} style={styles.optionContainer}>
                        <Text style={styles.optionTitle}>Privacy Policy</Text>
                        <ArrowRightSvg width={20} height={20} color={colors.textSecondary} />
                    </TouchableOpacity>
                  
                </View>
                <View style={styles.groupOptionContainer}>
                   
                <TouchableOpacity onPress={() => {dispatch(logout())}} style={[styles.optionContainer, {justifyContent: 'center'}]}>
                        <Text style={[styles.optionTitle, {color: 'red'}]}>Logout</Text>
                        {/* <ArrowRightSvg width={20} height={20} color={colors.textSecondary} /> */}
                    </TouchableOpacity>
                </View>

                
            </View>
        </ScrollView>
            <CustomModal
                visible={isModalVisible}
                title="Change Password"
                mainText="We'll send you an email to reset your password"
                onClose={handleCloseModal}
            />
            <CustomModal
                visible={isSupportModalVisible}
                title="Support"
                mainText="If you need help, please contact us at support@myapp.com"
                onClose={handleCloseModal}
            />
        </>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    groupOptionContainer: {
        backgroundColor: colors.cardBackground,
        padding: 10,
        borderRadius: 20,
        marginBottom: 12,
        gap: 12,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    optionContainer: {
        flexDirection: 'row',
        backgroundColor: colors.background,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 20,
        marginBottom: 0,
    },
    optionTitle: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textPrimary,
    },
    optionValue: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textSecondary,
    },
    accountContainer: {
        backgroundColor: colors.primaryDark,
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 50,
        marginBottom: -50,
        justifyContent: 'center',
        // marginTop: 24,
        
        paddingHorizontal: 20,
    },
    accountInfoContainer: {
        backgroundColor: colors.white,
        padding: 20,
        // marginTop: -24,  
        borderTopLeftRadius: 40,
        paddingBottom: 120,
        borderTopRightRadius: 40,
    },
    title: {
        fontSize: 34,
        fontFamily: 'Jost',
        color: colors.white,
        marginBottom: 24,
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 99,
    },
    name: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.white,
        marginTop: 14,
    },
    nameValue: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.white,
        marginBottom: 12,
    },
});

export default ProfileScreen;