import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { renderStars, calculateAverageRating } from '../mentor';

const MentorDetailScreen = ({ route }) => {
    const { mentor } = route.params;

    const handleRequestMentor = () => {
        console.log(`Request sent to ${mentor.name}`);
        // Add your request logic here
    };

    const renderReview = ({ item }) => (
        <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
                <Text style={styles.reviewerName}>{item.reviewer}</Text>
                <View style={styles.starRating}>
                    <Text style={styles.ratingText}>{item.rating}</Text>
                    <Icon name="star" size={16} color="#FFD700" />
                </View>
            </View>
            <Text style={styles.reviewComment}>{item.comment}</Text>
        </View>
    );

    const avgRating = calculateAverageRating(mentor.reviews || []);
    const totalReviews = mentor.reviews ? mentor.reviews.length : 0;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.profileHeader}>
                    <View style={styles.profileImageContainer}>
                        <Image source={{ uri: mentor.photoUrl }} style={styles.profileImage} />
                        <View style={styles.streakBadge}>
                            <Text style={styles.streakRate}>{mentor.streakRate}</Text>
                            <Icon
                                name={mentor.streakStatus === 'increased' ? 'trending-up' : 'trending-down'}
                                size={14}
                                color={mentor.streakStatus === 'increased' ? '#4CAF50' : '#F44336'}
                            />
                        </View>
                    </View>

                    <Text style={styles.name}>{mentor.name}</Text>

                    <View style={styles.detailsContainer}>
                        <View style={styles.detailItem}>
                            <Icon name="school" size={16} color="#6200ee" />
                            <Text style={styles.detailText}>{mentor.department}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Icon name="calendar-today" size={16} color="#6200ee" />
                            <Text style={styles.detailText}>Year {mentor.year}</Text>
                        </View>
                    </View>
                    {/* Add these two new cards */}
                    <View style={styles.statsContainer}>
                        <View style={styles.statCard}>
                            <Icon name="people" size={20} color="#6200ee" />
                            <Text style={styles.statNumber}>{mentor.menteesCount}</Text>
                            <Text style={styles.statLabel}>Total Mentees</Text>
                        </View>

                        <View style={styles.statCard}>
                            <Icon name="check-circle" size={20} color="#4CAF50" />
                            <Text style={styles.statNumber}>{mentor.menteesCleared}</Text>
                            <Text style={styles.statLabel}>Mentees Cleared</Text>
                        </View>
                    </View>
                    <View style={styles.ratingContainer}>
                        <View style={styles.starsContainer}>
                            {renderStars(avgRating)}
                            <Text style={styles.ratingNumber}>{avgRating.toFixed(1)}</Text>
                        </View>
                        <Text style={styles.reviewsCount}>({totalReviews} reviews)</Text>
                    </View>

                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About</Text>
                    <Text style={styles.description}>{mentor.description}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Reviews</Text>
                    {mentor.reviews?.length > 0 ? (
                        <FlatList
                            data={mentor.reviews}
                            renderItem={renderReview}
                            keyExtractor={item => item.id.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.reviewsList}
                        />
                    ) : (
                        <Text style={styles.noReviews}>No reviews yet</Text>
                    )}
                </View>
            </ScrollView>

            <View style={styles.fixedButtonContainer}>
                <TouchableOpacity
                    style={styles.requestButton}
                    onPress={handleRequestMentor}
                >
                    <Text style={styles.buttonText}>Request Mentor</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollView: {
        marginBottom: 80,
    },
    profileHeader: {
        alignItems: 'center',
        padding: 24,
        backgroundColor: 'white',
        marginBottom: 8,
    },
    profileImageContainer: {
        position: 'relative', // Required for absolute positioning of the badge
        marginBottom: 16,
        width: 120, // Fixed width (adjust as needed)
        height: 120, // Fixed height (should match width for a perfect circle)
    },
    profileImage: {
        width: '100%', // Fill container
        height: '100%', // Fill container
        borderRadius: 60, // Half of width/height for a perfect circle
        borderWidth: 3,
        borderColor: '#6200ee',
    },
    streakBadge: {
        position: 'absolute',
        bottom: -5,
        right: -5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        minWidth: 30,
    },
    streakRate: {
        fontSize: 14,
        fontWeight: '700',
        color: '#333',
        marginRight: 4,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2d3436',
        marginBottom: 12,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        // marginBottom: 16,
        width: '100%',
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f3f5',
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginHorizontal: 6,
    },
    detailText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#495057',
        marginLeft: 6,
    },
    ratingContainer: {
        alignItems: 'center',
        marginBottom: 8,
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    ratingNumber: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333',
        marginLeft: 8,
    },
    reviewsCount: {
        fontSize: 14,
        color: '#666',
    },
    section: {
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6200ee',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#555',
    },
    reviewsList: {
        paddingVertical: 8,
    },
    reviewCard: {
        width: 280,
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        padding: 16,
        marginRight: 12,
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    reviewerName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    starRating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 14,
        fontWeight: '600',
        marginRight: 4,
        color: '#333',
    },
    reviewComment: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    noReviews: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        paddingVertical: 16,
    },
    fixedButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    requestButton: {
        backgroundColor: '#6200ee',
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 16,
    },
    statCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 8,
        marginBottom: 10,
        width: '38%',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    statNumber: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 8,
    },
    statLabel: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
});

export default MentorDetailScreen;