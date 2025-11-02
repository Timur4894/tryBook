import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";

const ForgotPasswordScreen = ({navigation}) => {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <View style={{width: '100%', alignItems: 'flex-start'}}>
                <Text style={styles.title}>Forgot Password?</Text>
                <Text style={styles.subtitle}>No worries, it happens to the best of us.</Text>
            </View>
         
         
            <View style={{width: '100%'}}>
                <Text style={{fontSize: 16, fontFamily: 'Jost', color: '#666666'}}>Email</Text>
                <CustomTextInput style={{marginBottom: 24}} placeholder="Enter your email" keyboardType="email-address" autoCapitalize="none" autoComplete="email" autoCorrect={false} autoFocus={true} value={email} onChangeText={setEmail} />
                <Text style={{fontSize: 14, fontFamily: 'Jost', color: '#666666', alignSelf: 'center'}}>We'll send you an email to reset your password.</Text>
            </View>

               
            <CustomButton  buttonSrtyle={{width: '100%'}} title="Reset Password" onPress={() => {navigation.goBack()}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 44,
        fontFamily: 'Jost',
    },
    subtitle: {
        fontSize: 34,
        fontFamily: 'Jost',
        color: '#666666',
    },
});

export default ForgotPasswordScreen;