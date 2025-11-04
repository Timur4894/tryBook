import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../theme/colors";
import CustomButton from "./CustomButton";

interface CustomModalProps {
    visible: boolean;
    title: string;
    mainText: string;
    onClose: () => void;
}

const CustomModal = ({ visible, title, mainText, onClose }: CustomModalProps) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <View style={styles.content}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.mainText}>{mainText}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton 
                            title="OK" 
                            onPress={onClose}
                            buttonSrtyle={styles.okButton}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: colors.white,
        borderRadius: 20,
        width: '85%',
        maxWidth: 400,
        padding: 24,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    content: {
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Jost',
        color: colors.textPrimary,
        marginBottom: 16,
        textAlign: 'center',
        fontWeight: '600',
    },
    mainText: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textSecondary,
        textAlign: 'center',
        lineHeight: 24,
    },
    buttonContainer: {
        width: '100%',
    },
    okButton: {
        width: '100%',
    },
});

export default CustomModal;