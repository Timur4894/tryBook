import { StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomButton = ({ title, onPress, titleStyle, buttonSrtyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, buttonSrtyle]}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Jost',
        color: '#fff',
    },
});

export default CustomButton;