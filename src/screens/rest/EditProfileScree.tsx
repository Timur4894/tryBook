import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import colors from "../../theme/colors";
import ArrowRightSvg from "../../assets/svg/ArrowRightSvg";
import ImgSvg from "../../assets/svg/ImgSvg";

const EditProfileScreen = ({ navigation }) => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    // В будущем можно добавить состояние для изображения

    const handleSave = () => {
        // Здесь будет логика сохранения данных
        navigation.goBack();
    };

    const handleChangePhoto = () => {
        // Здесь будет логика выбора нового фото
        // Можно использовать react-native-image-picker или expo-image-picker
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <ArrowRightSvg width={24} height={24} color={colors.white} style={{transform: [{rotate: '180deg'}]}} />
                </TouchableOpacity>
                <Text style={styles.title}>Edit Profile</Text>
            </View>
            
            <View style={styles.accountContainer}>
                <TouchableOpacity onPress={handleChangePhoto} style={styles.imageContainer}>
                    <Image source={require('../../assets/img/TestBook.jpg')} style={styles.image} />
                    <View style={styles.editIconContainer}>
                        <ImgSvg width={20} height={20} color={colors.white} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.accountInfoContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Name</Text>
                    <CustomTextInput 
                        placeholder="Enter your name" 
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <CustomTextInput 
                        placeholder="Enter your email" 
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete="email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                    />
                </View>

                <View style={styles.buttonGroup}>
                    <CustomButton 
                        title="Save Changes" 
                        onPress={handleSave}
                        buttonSrtyle={styles.saveButton}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    headerContainer: {
        backgroundColor: colors.primaryDark,
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 16,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Jost',
        color: colors.white,
    },
    accountContainer: {
        backgroundColor: colors.primaryDark,
        alignItems: 'center',
        paddingBottom: 80,

        justifyContent: 'center',
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 99,
        borderWidth: 0,
        borderColor: colors.white,
    },
    editIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors.primary,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        borderColor: colors.white,
    },
    editIconText: {
        fontSize: 18,
    },
    accountInfoContainer: {
        backgroundColor: colors.white,
        padding: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: -40,
        paddingTop: 40,
        paddingBottom: 120,
    },
    inputGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textPrimary,
        marginBottom: 8,
    },
    input: {
        marginBottom: 0,
    },
    buttonGroup: {
        marginTop: 8,
    },
    saveButton: {
        width: '100%',
    },
});

export default EditProfileScreen;