import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../theme/colors";

const CustomButton = ({ title, onPress, titleStyle, buttonSrtyle }: { title: string, onPress: () => void, titleStyle?: any, buttonSrtyle?: any }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, buttonSrtyle]}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Jost',
        color: colors.white,
    },
});

export default CustomButton;