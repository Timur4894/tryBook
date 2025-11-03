import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { login } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import colors from "../../theme/colors";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    

    return (
        <View style={styles.container}>
            <View style={{width: '100%', alignItems: 'flex-start'}}>
                <Text style={styles.title}>Let's Sign you in</Text>
                <Text style={styles.subtitle}>Welcome back</Text>
                <Text style={styles.subtitle}>You've been missed!</Text>
            </View>
         
         
            <View style={{width: '100%'}}>
                <Text style={{fontSize: 16, fontFamily: 'Jost', color: colors.textSecondary}}>Email</Text>
                <CustomTextInput style={{marginBottom: 24}} placeholder="Enter your email" keyboardType="email-address" autoCapitalize="none" autoComplete="email" autoCorrect={false} autoFocus={true} value={email} onChangeText={setEmail} />

                <Text style={{fontSize: 16, fontFamily: 'Jost', color: colors.textSecondary}}>Password</Text>
                <CustomTextInput placeholder="Enter your password" keyboardType="default" autoCapitalize="none" autoComplete="password" autoCorrect={false} autoFocus={true} value={password} onChangeText={setPassword} />
                <TouchableOpacity onPress={() => {navigation.navigate('ForgotPassword')}} style={{alignItems: 'flex-end', marginTop: 8}}>
                    <Text style={{fontSize: 14, fontFamily: 'Jost', color: colors.textSecondary}}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <View>
                    <Text style={{fontSize: 16, fontFamily: 'Jost', color: colors.textSecondary, marginBottom: 8}}>
                    Don't have an account? <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                        <Text style={{color: colors.primary}}>Create an account</Text></TouchableOpacity>

                </Text>
                <CustomButton title="Login" onPress={() => {dispatch(login({email: email, token: '1234567890'}))}} />
            </View>
        </View>
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

export default LoginScreen;