import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';
import ArrowRightSvg from '../../assets/svg/ArrowRightSvg';
import DiamondSvg from '../../assets/svg/DiamondSvg';
import CustomButton from '../../components/CustomButton';

const SubscriptionScreen = ({ navigation }: { navigation: any }) => {
    const features = [
        'Read unlimited books',
        'Share your favorite books with your friends',
        'Download your favorite books to your device',
        'Support the development of the app',

    ];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Header with Back Button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <ArrowRightSvg width={24} height={24} color={colors.white} style={{transform: [{rotate: '180deg'}]}} />
                </TouchableOpacity>
            </View>

            {/* Icon Section */}
            <View style={styles.iconSection}>
                <View style={styles.iconContainer}>
                    <DiamondSvg width={24} height={24} color={colors.primaryLight} style={styles.iconSmall} />
                    <DiamondSvg width={40} height={40} color={colors.primaryLight} />
                    <DiamondSvg width={24} height={24} color={colors.primaryLight} style={styles.iconSmall} />
                </View>
                <Text style={styles.title}>TryBook Premium</Text>
                <Text style={styles.subtitle}>
                    Boost your reading experience – unlock unlimited books
                </Text>
            </View>

            {/* Features Card */}
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Premium</Text>
                        <Text style={styles.cardPrice}>$4.99/month</Text>
                    </View>
                    <View style={styles.featuresList}>
                        {features.map((feature, index) => (
                            <View key={index} style={styles.featureItem}>
                                <View style={styles.checkmarkContainer}>
                                    <Text style={styles.checkmark}>✓</Text>
                                </View>
                                <Text style={styles.featureText}>
                                    {feature.includes('5GB') ? (
                                        <>
                                            <Text style={styles.featureBold}>5GB</Text> of File Storage
                                        </>
                                    ) : feature.includes('3') ? (
                                        <>
                                            <Text style={styles.featureBold}>3</Text> Projects With AI Suggestions
                                        </>
                                    ) : (
                                        feature
                                    )}
                                </Text>
                            </View>
                        ))}
                    </View>
                    {/* Pagination Dots */}
                   
                </View>
            </View>

            {/* Upgrade Button */}
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="Upgrade"
                    onPress={() => {
                        // Handle upgrade logic
                    }}
                    buttonSrtyle={styles.upgradeButton}
                    titleStyle={styles.upgradeButtonText}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryDark,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    cardPrice: {
        fontSize: 24,
        fontFamily: 'Jost',
        color: colors.textPrimary,
        fontWeight: 'bold',
    },
    header: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    iconSection: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 40,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        position: 'relative',
    },
    iconSmall: {
        marginHorizontal: 8,
    },
    title: {
        fontSize: 36,
        fontFamily: 'Jost',
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textSecondary,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 20,
    },
    cardContainer: {
        paddingHorizontal: 20,
        marginBottom: 40,
    },
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 24,
        padding: 24,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    cardTitle: {
        fontSize: 28,
        fontFamily: 'Jost',
        color: colors.textPrimary,
        fontWeight: '600',
        // marginBottom: 24,
    },
    featuresList: {
        marginBottom: 24,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    checkmarkContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    checkmark: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
    featureText: {
        fontSize: 16,
        fontFamily: 'Jost',
        color: colors.textSecondary,
        flex: 1,
    },
    featureBold: {
        fontWeight: 'bold',
        color: colors.white,
    },
    paginationDots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },


    buttonContainer: {
        paddingHorizontal: 20,
        paddingBottom: 40,
        marginTop: 20,
    },
    upgradeButton: {
        width: '100%',
        backgroundColor: colors.primaryLight,
    },
    upgradeButtonText: {
        fontSize: 20,
        fontWeight: '600',
    },
});

export default SubscriptionScreen;