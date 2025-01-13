import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// Define the Course type
interface Course {
    id: number;
    title: string;
    description: string;
    instructor: string;
}

// CourseCard component that accepts `enrollment` prop
const Enroll = ({ enrollment, }: { enrollment: Course, }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.courseName} >{enrollment.title} </Text>
            <View style={styles.imageSection}>
            <Image
                source={require('@/assets/images/javascript.png')}
                style={{ width: '100%', height: '100%', borderRadius: 12 }}
            />
            </View>

            <View style={{ flexDirection: "row", width: '100%', height: 100, alignItems: "center", }}>
                <View style={styles.lessions}>

                    <View style={styles.icon}>


                        <Image
                            source={require('@/assets/icons/icons8-book-50.png')}
                            style={{ width: 30, height: 30, borderRadius: 24 }}

                        />
                    </View>
                    <View style={styles.textPart}>
                        <Text style={{ color: "#fff" }}> hellow </Text>
                    </View>

                </View>
                <View style={[styles.lessions, { marginLeft: 5 }]}>
                    <View style={styles.icon}>


                        <Image
                            source={require('@/assets/icons/icons8-clock-50.png')}
                            style={{ width: 30, height: 30, borderRadius: 24 }}

                        />
                    </View>
                    <View style={styles.textPart}>
                        <Text style={{ color: "#fff" }}> hellow </Text>
                    </View>
                </View>
                <View style={[styles.share, { marginLeft: 5 }]}>
                    <View>
                        <Image
                            source={require('@/assets/icons/icons8-share-50.png')}
                            style={{ width: 30, height: 30, borderRadius: 24 }}
                        />
                    </View>
                </View>

            </View>

        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    imageSection: {
        width: '100%',
        height: 180,
        marginTop: 20,
        backgroundColor: "green",
        borderRadius: 12,
    },
    courseName: {
        marginTop: 30,
        fontSize: 40,
        color: "white",
    },
    lessions: {
        width: '40%',
        height: 50,
        flexDirection: "row",
        borderRadius: 30,
        backgroundColor: "#080808"

    },
    share: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#DAD9DC",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 48,
        height: 49,
        borderRadius: 50,
        backgroundColor: "#1c1d20",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    textPart: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Enroll;
