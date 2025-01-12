import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Define the Course type
interface Course {
    id: number;
    title: string;
    description: string;
    instructor: string;
}

// CourseCard component that accepts `enrollment` prop
const Enroll = ({ enrollment, }: { enrollment: Course,  }) => {
    return (
        <View style={styles.card}>
            {/* Course Details */}
            <View style={styles.courseDetails}>
                <Text style={styles.title}>{enrollment.title}</Text>
                <Text style={styles.instructor}>Instructor: {enrollment.instructor}</Text>
                <Text style={styles.description}>{enrollment.description}</Text>
            </View>

            {/* Enroll Button at the bottom */}
            <View style={styles.enrollButtonContainer}>
                <Button title="Enroll" />
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginVertical: 10,
        backgroundColor: '#fff',
        overflow: 'hidden', // Ensures content doesn't overflow the rounded corners
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    courseDetails: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    instructor: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#777',
    },
    enrollButtonContainer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#f8f8f8',
    },
});

export default Enroll;
