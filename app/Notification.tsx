import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notification: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.message}>You have no new notifications.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: '#888',
    },
});

export default Notification;