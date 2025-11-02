import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={{width: '100%', alignItems: 'flex-start'}}>
                <Text style={styles.title}>Creaate an account</Text>

            </View>
         
         
            <View style={{width: '100%'}}>
                <Text style={{fontSize: 16, fontFamily: 'Jost', color: '#666666'}}>Full Name</Text>
                <CustomTextInput style={{marginBottom: 24}} placeholder="Enter your full name" keyboardType="default" autoCapitalize="none" autoComplete="name" autoCorrect={false} autoFocus={true} value={fullName} onChangeText={setFullName} />

                <Text style={{fontSize: 16, fontFamily: 'Jost', color: '#666666'}}>Email</Text>
                <CustomTextInput style={{marginBottom: 24}} placeholder="Enter your email" keyboardType="email-address" autoCapitalize="none" autoComplete="email" autoCorrect={false} autoFocus={true} value={email} onChangeText={setEmail} />

                <Text style={{fontSize: 16, fontFamily: 'Jost', color: '#666666'}}>Password</Text>
                <CustomTextInput placeholder="Enter your password" keyboardType="default" autoCapitalize="none" autoComplete="password" autoCorrect={false} autoFocus={true} value={password} onChangeText={setPassword} />
            </View>

            <View>
                <Text style={{fontSize: 16, fontFamily: 'Jost', color: '#666666', marginBottom: 8}}>
                    Already have an account? <TouchableOpacity onPress={() => {navigation.navigate('Login')}}><Text style={{color: '#000'}}>Sign in</Text></TouchableOpacity>
                </Text>
                <CustomButton title="Login" onPress={() => {}} />
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

export default RegisterScreen;