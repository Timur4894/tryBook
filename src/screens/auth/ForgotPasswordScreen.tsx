import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import colors from "../../theme/colors";
import CustomModal from "../../components/CustomModal";

const ForgotPasswordScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCloseModal = () => {
        setIsModalVisible(false);
        navigation.goBack();
    };

    return (
        <>
       
            <View style={styles.container}>
                <View style={{width: '100%', alignItems: 'flex-start'}}>
                    <Text style={styles.title}>Forgot Password?</Text>
                    <Text style={styles.subtitle}>No worries, it happens to the best of us.</Text>
                </View>
            
            
                <View style={{width: '100%'}}>
                    <Text style={{fontSize: 16, fontFamily: 'Jost', color: colors.textSecondary}}>Email</Text>
                    <CustomTextInput style={{marginBottom: 24}} placeholder="Enter your email" keyboardType="email-address" autoCapitalize="none" autoComplete="email" autoCorrect={false} autoFocus={true} value={email} onChangeText={setEmail} />
                    <Text style={{fontSize: 14, fontFamily: 'Jost', color: colors.textSecondary, alignSelf: 'center'}}>We'll send you an email to reset your password.</Text>
                </View>

                
                <CustomButton  buttonSrtyle={{width: '100%'}} title="Reset Password" onPress={() => {setIsModalVisible(true)}} />
            </View>
            <CustomModal
                visible={isModalVisible}
                title="Change Password"
                mainText="We'll send you an email to reset your password"
                onClose={handleCloseModal}
            />
     </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 44,
        fontFamily: 'Jost',
        color: colors.textPrimary,
    },
    subtitle: {
        fontSize: 34,
        fontFamily: 'Jost',
        color: colors.textSecondary,
    },
});

export default ForgotPasswordScreen;