// MentorListScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { renderStars, calculateAverageRating, mentors } from './mentor';

const MentorListScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMentors, setFilteredMentors] = useState(mentors);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query) {
            const filtered = mentors.filter(mentor =>
                mentor.name.toLowerCase().includes(query.toLowerCase()) ||
                mentor.department.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredMentors(filtered);
        } else {
            setFilteredMentors(mentors);
        }
    };




    const renderItem = ({ item }) => {
        const avgRating = calculateAverageRating(item.reviews || []);
        const totalReviews = item.reviews ? item.reviews.length : 0;

        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('MentorDetail', { mentor: item })}
            >
                <View style={styles.cardHeader}>
                    <Image source={{ uri: item.photoUrl }} style={styles.cardImage} />
                    <View style={styles.ratingBadge}>
                        {/* <Text style={styles.ratingText}>{item.streakRate}</Text> */}
                        <Icon
                            name={item.streakStatus === 'increased' ? 'trending-up' : 'trending-down'}
                            size={14}
                            color={item.streakStatus === 'increased' ? '#4CAF50' : '#F44336'}
                        />
                    </View>
                </View>

                <View style={styles.cardBody}>
                    <Text style={styles.name}>{item.name}</Text>

                    <View style={styles.detailsRow}>
                        <View style={styles.detailBadge}>
                            <Icon name="school" size={14} color="#6200ee" />
                            <Text style={styles.detailText}>{item.department}</Text>
                        </View>
                        <View style={styles.detailBadge}>
                            <Icon name="calendar-today" size={14} color="#6200ee" />
                            <Text style={styles.detailText}>{item.year} Year</Text>
                        </View>
                    </View>

                    <View style={styles.ratingContainer}>
                        <View style={styles.starsContainer}>
                            {renderStars(avgRating)}
                            {/* <Text style={styles.ratingNumber}>{avgRating}</Text> */}
                        </View>
                        <Text style={styles.reviewsText}>({totalReviews} reviews)</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search mentors by name or department..."
                    placeholderTextColor="#999"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
                {searchQuery ? (
                    <TouchableOpacity onPress={() => handleSearch('')}>
                        <Icon name="close" size={20} color="#666" style={styles.clearIcon} />
                    </TouchableOpacity>
                ) : null}
            </View>

            <FlatList
                data={filteredMentors}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.list}
                columnWrapperStyle={styles.columnWrapper}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Icon name="search-off" size={50} color="#ccc" />
                        <Text style={styles.emptyText}>No mentors found</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
    },
    searchIcon: {
        marginRight: 8,
    },
    clearIcon: {
        marginLeft: 8,
    },
    searchInput: {
        flex: 1,
        height: 40,
        color: '#333',
        fontSize: 14,
    },
    list: {
        paddingHorizontal: 12,
        paddingBottom: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        width: '48%',
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        marginBottom: 12,
    },

    cardHeader: {
        position: 'relative',
        alignItems: 'center',
        paddingTop: 16,
        paddingHorizontal: 16,
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode: 'cover',
        borderWidth: 2,
        borderColor: '#ffffff',
        marginBottom: 8,
    },
    ratingBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 3,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        minWidth: 40,
        justifyContent: 'center',
    },
    ratingText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#333',
        marginRight: 4,
    },
    cardBody: {
        padding: 16,
        paddingTop: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        color: '#2d3436',
        textAlign: 'center',
        marginBottom: 12,
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    detailBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f3f5',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    detailText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#495057',
        marginLeft: 4,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    emptyText: {
        marginTop: 16,
        fontSize: 16,
        color: '#666',
    },
    ratingContainer: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    ratingNumber: {
        fontSize: 12,
        fontWeight: '700',
        color: '#333',
        marginLeft: 4,
    },
    reviewsText: {
        fontSize: 10,
        color: '#666',
    },
});

export default MentorListScreen;

// // MentorListScreen.js
// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     Image,
//     StyleSheet,
//     FlatList,
//     SafeAreaView,
//     TextInput,
//     Animated,
//     Platform
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { renderStars, calculateAverageRating, mentors } from './mentor';

// const MentorListScreen = ({ navigation }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filteredMentors, setFilteredMentors] = useState(mentors);
//     const [activeCard, setActiveCard] = useState(null);
//     const scaleValues = mentors.reduce((acc, mentor) => {
//         acc[mentor.id] = new Animated.Value(1);
//         return acc;
//     }, {});

//     const handleSearch = (query) => {
//         setSearchQuery(query);
//         if (query) {
//             const filtered = mentors.filter(mentor =>
//                 mentor.name.toLowerCase().includes(query.toLowerCase()) ||
//                 mentor.department.toLowerCase().includes(query.toLowerCase())
//             );
//             setFilteredMentors(filtered);
//         } else {
//             setFilteredMentors(mentors);
//         }
//     };

//     const handlePressIn = (id) => {
//         setActiveCard(id);
//         Animated.spring(scaleValues[id], {
//             toValue: 0.96,
//             useNativeDriver: true,
//         }).start();
//     };

//     const handlePressOut = (id) => {
//         setActiveCard(null);
//         Animated.spring(scaleValues[id], {
//             toValue: 1,
//             useNativeDriver: true,
//         }).start();
//     };

//     const renderItem = ({ item }) => {
//         const avgRating = calculateAverageRating(item.reviews || []);
//         const totalReviews = item.reviews ? item.reviews.length : 0;
//         const isActive = activeCard === item.id;

//         return (
//             <Animated.View
//                 style={[
//                     styles.card,
//                     isActive && styles.cardActive,
//                     { transform: [{ scale: scaleValues[item.id] }] }
//                 ]}
//             >
//                 <TouchableOpacity
//                     activeOpacity={0.9}
//                     onPressIn={() => handlePressIn(item.id)}
//                     onPressOut={() => handlePressOut(item.id)}
//                     onPress={() => navigation.navigate('MentorDetail', { mentor: item })}
//                 >
//                     <View style={styles.cardHeader}>
//                         <View style={styles.imageContainer}>
//                             <Image
//                                 source={{ uri: item.photoUrl }}
//                                 style={[
//                                     styles.cardImage,
//                                     isActive && styles.cardImageActive
//                                 ]}
//                             />
//                             <View style={styles.ratingBadge}>
//                                 {/* <Text style={styles.streakText}>{item.streakRate}</Text> */}
//                                 <Icon
//                                     name={item.streakStatus === 'increased' ? 'trending-up' : 'trending-down'}
//                                     size={14}
//                                     color={item.streakStatus === 'increased' ? '#4CAF50' : '#F44336'}
//                                 />
//                             </View>
//                         </View>
//                     </View>

//                     <View style={styles.cardBody}>
//                         <Text style={styles.name}>{item.name}</Text>
//                         {/* <Text style={styles.title}>{item.title || 'Senior Mentor'}</Text> */}

//                         <View style={styles.detailsRow}>
//                             <View style={styles.detailBadge}>
//                                 <Icon name="school" size={14} color="#6200ee" />
//                                 <Text style={styles.detailText}>{item.department}</Text>
//                             </View>
//                             <View style={styles.detailBadge}>
//                                 <Icon name="calendar-today" size={14} color="#6200ee" />
//                                 <Text style={styles.detailText}>{item.year} Year</Text>
//                             </View>
//                         </View>

//                         <View style={styles.ratingContainer}>
//                             <View style={styles.starsContainer}>
//                                 {renderStars(avgRating)}
//                                 <Text style={styles.ratingNumber}>{avgRating.toFixed(1)}</Text>
//                             </View>
//                             <Text style={styles.reviewsText}>({totalReviews} reviews)</Text>
//                         </View>
//                     </View>
//                 </TouchableOpacity>
//             </Animated.View>
//         );
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             {/* <View style={styles.header}>
//                 <Text style={styles.headerTitle}>Find Your Mentor</Text>
//                 <Text style={styles.headerSubtitle}>Connect with experienced mentors</Text>
//             </View> */}

//             <View style={styles.searchContainer}>
//                 <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
//                 <TextInput
//                     style={styles.searchInput}
//                     placeholder="Search mentors by name or department..."
//                     placeholderTextColor="#999"
//                     value={searchQuery}
//                     onChangeText={handleSearch}
//                 />
//                 {searchQuery ? (
//                     <TouchableOpacity onPress={() => handleSearch('')}>
//                         <Icon name="close" size={20} color="#666" style={styles.clearIcon} />
//                     </TouchableOpacity>
//                 ) : null}
//             </View>

//             <FlatList
//                 data={filteredMentors}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id.toString()}
//                 numColumns={2}
//                 contentContainerStyle={styles.list}
//                 columnWrapperStyle={styles.columnWrapper}
//                 ListEmptyComponent={
//                     <View style={styles.emptyContainer}>
//                         <Icon name="search-off" size={50} color="#ccc" />
//                         <Text style={styles.emptyText}>No mentors found</Text>
//                         <Text style={styles.emptySubtext}>Try different search terms</Text>
//                     </View>
//                 }
//             />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f8f9fa',
//     },
//     header: {
//         paddingHorizontal: 24,
//         paddingTop: 16,
//         paddingBottom: 8,
//     },
//     headerTitle: {
//         fontSize: 28,
//         fontWeight: '800',
//         color: '#2d3436',
//     },
//     headerSubtitle: {
//         fontSize: 14,
//         color: '#666',
//         marginTop: 4,
//     },
//     searchContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         borderRadius: 12,
//         margin: 16,
//         marginTop: 8,
//         paddingHorizontal: 16,
//         paddingVertical: 8,
//         elevation: 3,
//         shadowColor: '#6200ee',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 8,
//     },
//     searchIcon: {
//         marginRight: 8,
//     },
//     clearIcon: {
//         marginLeft: 8,
//     },
//     searchInput: {
//         flex: 1,
//         height: 40,
//         color: '#333',
//         fontSize: 14,
//     },
//     list: {
//         paddingHorizontal: 16,
//         paddingBottom: 24,
//     },
//     columnWrapper: {
//         justifyContent: 'space-between',
//         marginBottom: 16,
//     },
//     card: {
//         backgroundColor: 'white',
//         borderRadius: 16,
//         width: '48%',
//         overflow: 'hidden',
//         elevation: 2,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 6,
//         marginBottom: 16,
//         borderWidth: 1,
//         borderColor: '#f1f3f5',
//     },
//     cardActive: {
//         elevation: 6,
//         shadowColor: '#6200ee',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.15,
//         shadowRadius: 10,
//         borderColor: '#e0e0ff',
//     },
//     cardHeader: {
//         alignItems: 'center',
//         paddingTop: 20,
//     },
//     imageContainer: {
//         position: 'relative',
//     },
//     cardImage: {
//         width: 90,
//         height: 90,
//         borderRadius: 45,
//         resizeMode: 'cover',
//         borderWidth: 3,
//         borderColor: '#ffffff',
//         backgroundColor: '#f5f5f5',
//     },
//     cardImageActive: {
//         borderColor: '#d1c4e9',
//     },
//     ratingBadge: {
//         position: 'absolute',
//         bottom: 0,
//         right: 0,
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         borderRadius: 12,
//         paddingHorizontal: 8,
//         paddingVertical: 4,
//         elevation: 3,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.1,
//         shadowRadius: 2,
//         borderWidth: 1,
//         borderColor: '#f1f3f5',
//     },
//     streakText: {
//         fontSize: 14,
//         fontWeight: '700',
//         color: '#333',
//         marginRight: 4,
//     },
//     cardBody: {
//         padding: 16,
//         paddingTop: 12,
//     },
//     name: {
//         fontSize: 16,
//         fontWeight: '700',
//         color: '#2d3436',
//         textAlign: 'center',
//         marginBottom: 4,
//     },
//     title: {
//         fontSize: 12,
//         color: '#6200ee',
//         textAlign: 'center',
//         fontWeight: '600',
//         marginBottom: 12,
//     },
//     detailsRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 12,
//     },
//     detailBadge: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#f8f5ff',
//         borderRadius: 8,
//         paddingHorizontal: 8,
//         paddingVertical: 4,
//         borderWidth: 1,
//         borderColor: '#ede7f6',
//     },
//     detailText: {
//         fontSize: 12,
//         fontWeight: '600',
//         color: '#5e35b1',
//         marginLeft: 4,
//     },
//     emptyContainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 50,
//         padding: 20,
//     },
//     emptyText: {
//         marginTop: 16,
//         fontSize: 18,
//         color: '#666',
//         fontWeight: '600',
//     },
//     emptySubtext: {
//         fontSize: 14,
//         color: '#999',
//         marginTop: 8,
//     },
//     ratingContainer: {
//         alignSelf: 'center',
//         alignItems: 'center',
//     },
//     starsContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 4,
//     },
//     ratingNumber: {
//         fontSize: 12,
//         fontWeight: '700',
//         color: '#ff9800',
//         marginLeft: 4,
//     },
//     reviewsText: {
//         fontSize: 10,
//         color: '#666',
//     },
// });

// export default MentorListScreen;

