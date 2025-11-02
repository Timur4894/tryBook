import { StyleSheet, TextInput } from "react-native";

const CustomTextInput = ({ style, placeholder, keyboardType, autoCapitalize, autoComplete, autoCorrect, autoFocus, value, onChangeText }: { style: StyleProp<ViewStyle>, placeholder: string, keyboardType: string, autoCapitalize: string, autoComplete: string, autoCorrect: boolean, autoFocus: boolean, value: string, onChangeText: (text: string) => void }) => {
    return (
        <TextInput 
            placeholder={placeholder}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            autoCorrect={autoCorrect}
            autoFocus={autoFocus}
            value={value}
            onChangeText={onChangeText}
            style={[styles.input, style]}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#666666',
        borderRadius: 20,
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
});
export default CustomTextInput;