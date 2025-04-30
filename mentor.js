// mentors.js
// Function to render stars based on rating

import Icon2 from 'react-native-vector-icons/FontAwesome';
// Function to calculate average rating
export const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length; // Return the number directly
};

export const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<Icon2 key={`full-${i}`} name="star" size={14} color="#FFD700" />);
    }

    if (hasHalfStar) {
        stars.push(<Icon2 key="half" name="star-half" size={14} color="#FFD700" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Icon2 key={`empty-${i}`} name="star-o" size={14} color="#FFD700" />);
    }

    return stars;
};

export const mentors = [
    {
        id: 1,
        photoUrl: 'https://plus.unsplash.com/premium_photo-1690579805307-7ec030c75543?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Ram',
        streakRate: 84,
        streakStatus: 'decreased',
        department: 'CSE',
        year: 'III',
        description: 'Specializes in React Native and UI/UX design.',
        menteesCount: 24,
        menteesCleared: 18,
        reviews: [
            {
                id: 1,
                reviewer: 'ramya',
                rating: 5,
                comment: 'ram is an amazing mentor! Helped me understand complex concepts easily.'
            },
            {
                id: 2,
                reviewer: 'mohan',
                rating: 4,
                comment: 'Great sessions, very knowledgeable about React Native performance optimization.'
            },
            {
                id: 3,
                reviewer: 'hijas',
                rating: 5,
                comment: 'Patient and thorough explanations. Highly recommend!'
            },
            {
                id: 4,
                reviewer: 'mohan',
                rating: 4,
                comment: 'Great sessions, very knowledgeable about React Native performance optimization.'
            },
            {
                id: 5,
                reviewer: 'hijas',
                rating: 5,
                comment: 'Patient and thorough explanations. Highly recommend!'
            }
        ]
    },
    {
        id: 2,
        photoUrl: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww',
        name: 'Sree',
        streakRate: 121,
        streakStatus: 'increased',
        department: 'IT',
        year: 'IV',
        description: 'Full-stack developer with expertise in JavaScript frameworks. Passionate about teaching best practices.',
        menteesCount: 32,
        menteesCleared: 28,
        reviews: [
            {
                id: 1,
                reviewer: 'abdul',
                rating: 5,
                comment: 'sree is incredibly knowledgeable and makes learning fun!'
            },
            {
                id: 2,
                reviewer: 'deepak',
                rating: 5,
                comment: 'Best mentor. Very responsive and helpful.'
            },
            {
                id: 3,
                reviewer: 'hijas',
                rating: 5,
                comment: 'Patient and thorough explanations. Highly recommend!'
            },
            {
                id: 4,
                reviewer: 'mohan',
                rating: 4,
                comment: 'Great sessions, very knowledgeable about React Native performance optimization.'
            },
            {
                id: 5,
                reviewer: 'hijas',
                rating: 5,
                comment: 'Patient and thorough explanations. Highly recommend!'
            }
        ]
    },
    {
        id: 3,
        photoUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        name: 'mukthar',
        streakRate: 205,
        streakStatus: 'increased',
        department: 'ECE',
        year: 'II',
        description: 'Full-stack developer with expertise in JavaScript frameworks. Passionate about teaching best practices.',
        menteesCount: 19,
        menteesCleared: 15,
        reviews: [
            {
                id: 1,
                reviewer: 'mohammed',
                rating: 4,
                comment: 'Great insights into mobile architecture patterns.'
            },
            {
                id: 2,
                reviewer: 'jesus',
                rating: 5,
                comment: 'mukthar has a unique way of explaining complex topics simply.'
            },
            {
                id: 3,
                reviewer: 'mahan',
                rating: 4,
                comment: 'Very professional and well-prepared for each session.'
            },
            {
                id: 4,
                reviewer: 'mohan',
                rating: 4,
                comment: 'Great sessions, very knowledgeable about React Native performance optimization.'
            },
            {
                id: 5,
                reviewer: 'hijas',
                rating: 5,
                comment: 'Patient and thorough explanations. Highly recommend!'
            }
        ]
    },
    {
        id: 4,
        photoUrl: 'https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg',
        name: 'dhivya',
        streakRate: 6008,
        streakStatus: 'decreased',
        department: 'EEE',
        year: 'I',
        description: 'UI/UX specialist with a focus on accessibility and inclusive design.',
        menteesCount: 27,
        menteesCleared: 22,
        reviews: [
            {
                id: 1,
                reviewer: 'sree ram',
                rating: 5,
                comment: 'dhivya opened my eyes to accessibility issues I never considered.'
            },
            {
                id: 2,
                reviewer: 'nithin',
                rating: 5,
                comment: 'Fantastic mentor with a great eye for design details.'
            },
            {
                id: 3,
                reviewer: 'hijas',
                rating: 5,
                comment: 'Patient and thorough explanations. Highly recommend!'
            },
            {
                id: 4,
                reviewer: 'mohan',
                rating: 4,
                comment: 'Great sessions, very knowledgeable about React Native performance optimization.'
            },
            {
                id: 5,
                reviewer: 'hijas',
                rating: 5,
                comment: 'Patient and thorough explanations. Highly recommend!'
            }
        ]
    },
    {
        id: 5,
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'arjun',
        streakRate: 1530,
        streakStatus: 'increased',
        department: 'AD',
        year: 'III',
        description: 'Senior architect with expertise in scalable systems.',
        menteesCount: 15,
        menteesCleared: 12,
        reviews: [
            {
                id: 1,
                reviewer: 'kiran',
                rating: 5,
                comment: 'Exceptional mentor with deep technical knowledge.'
            }
        ]
    },
    {
        id: 6,
        photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'priya',
        streakRate: 132,
        streakStatus: 'decreased',
        department: 'EIE',
        year: 'IV',
        description: 'Mobile development specialist focusing on performance.',
        menteesCount: 21,
        menteesCleared: 18,
        reviews: [
            {
                id: 1,
                reviewer: 'ananya',
                rating: 4,
                comment: 'Helpful sessions with good practical examples.'
            }
        ]
    },
    {
        id: 7,
        photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Anjali',
        streakRate: 98,
        streakStatus: 'increased',
        department: 'CSE',
        year: 'II',
        description: 'Data science specialist with ML expertise.',
        menteesCount: 18,
        menteesCleared: 14,
        reviews: [
            {
                id: 1,
                reviewer: 'vikram',
                rating: 5,
                comment: 'Excellent at explaining complex algorithms.'
            }
        ]
    },
    {
        id: 8,
        photoUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Rahul',
        streakRate: 87,
        streakStatus: 'increased',
        department: 'IT',
        year: 'I',
        description: 'Cybersecurity expert with networking knowledge.',
        menteesCount: 12,
        menteesCleared: 9,
        reviews: [
            {
                id: 1,
                reviewer: 'neha',
                rating: 4,
                comment: 'Great practical security examples.'
            }
        ]
    }
];


// export const mentors = [
//     {
//         id: 1,
//         photoUrl: 'https://plus.unsplash.com/premium_photo-1690579805307-7ec030c75543?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D',
//         name: 'Ram',
//         streakRate: 84,
//         streakStatus: 'decreased',
//         department: 'CSE',
//         year: 'III',
//         description: 'Specializes in React Native and UI/UX design.',
//         reviews: [
//             {
//                 id: 1,
//                 reviewer: 'ramya',
//                 rating: 5,
//                 comment: 'ram is an amazing mentor! Helped me understand complex concepts easily.'
//             },
//             {
//                 id: 2,
//                 reviewer: 'mohan',
//                 rating: 4,
//                 comment: 'Great sessions, very knowledgeable about React Native performance optimization.'
//             },
//             {
//                 id: 3,
//                 reviewer: 'hijas',
//                 rating: 5,
//                 comment: 'Patient and thorough explanations. Highly recommend!'
//             }
//         ]
//     },
//     {
//         id: 2,
//         photoUrl: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww',
//         name: 'Sree',
//         streakRate: 121,
//         streakStatus: 'increased',
//         department: 'IT',
//         year: 'IV',
//         description: 'Full-stack developer with expertise in JavaScript frameworks. Passionate about teaching best practices.',
//         reviews: [
//             {
//                 id: 1,
//                 reviewer: 'abdul',
//                 rating: 5,
//                 comment: 'sree is incredibly knowledgeable and makes learning fun!'
//             },
//             {
//                 id: 2,
//                 reviewer: 'deepak',
//                 rating: 5,
//                 comment: 'Best mentor. Very responsive and helpful.'
//             }
//         ]
//     },
//     {
//         id: 3,
//         photoUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
//         name: 'mukthar',
//         streakRate: 205,
//         streakStatus: 'increased',
//         department: 'ECE',
//         year: 'II',
//         description: 'Full-stack developer with expertise in JavaScript frameworks. Passionate about teaching best practices.',
//         reviews: [
//             {
//                 id: 1,
//                 reviewer: 'mohammed',
//                 rating: 4,
//                 comment: 'Great insights into mobile architecture patterns.'
//             },
//             {
//                 id: 2,
//                 reviewer: 'jesus',
//                 rating: 5,
//                 comment: 'mukthar has a unique way of explaining complex topics simply.'
//             },
//             {
//                 id: 3,
//                 reviewer: 'mahan',
//                 rating: 4,
//                 comment: 'Very professional and well-prepared for each session.'
//             }
//         ]
//     },
//     {
//         id: 4,
//         photoUrl: 'https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg',
//         name: 'dhivya',
//         streakRate: 68,
//         streakStatus: 'decreased',
//         department: 'EEE',
//         year: 'I',
//         description: 'UI/UX specialist with a focus on accessibility and inclusive design.',
//         reviews: [
//             {
//                 id: 1,
//                 reviewer: 'sree ram',
//                 rating: 5,
//                 comment: 'dhivya opened my eyes to accessibility issues I never considered.'
//             },
//             {
//                 id: 2,
//                 reviewer: 'nithin',
//                 rating: 5,
//                 comment: 'Fantastic mentor with a great eye for design details.'
//             }
//         ]
//     },
//     {
//         id: 5,
//         photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//         name: 'arjun',
//         streakRate: 153,
//         streakStatus: 'increased',
//         department: 'AD',
//         year: 'III',
//         description: 'Senior architect with expertise in scalable systems.',
//         reviews: [
//             {
//                 id: 1,
//                 reviewer: 'kiran',
//                 rating: 5,
//                 comment: 'Exceptional mentor with deep technical knowledge.'
//             }
//         ]
//     },
//     {
//         id: 6,
//         photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//         name: 'priya',
//         streakRate: 132,
//         streakStatus: 'decreased',
//         department: 'EIE',
//         year: 'IV',
//         description: 'Mobile development specialist focusing on performance.',
//         reviews: [
//             {
//                 id: 1,
//                 reviewer: 'ananya',
//                 rating: 4,
//                 comment: 'Helpful sessions with good practical examples.'
//             }
//         ]
//     },
//     {
//         id: 7,
//         photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//         name: 'Anjali',
//         streakRate: 98,
//         streakStatus: 'increased',
//         department: 'CSE',
//         year: 'II',
//         description: 'Data science specialist with ML expertise.',
//         reviews: [
//             {
//                 id: 1,
//                 reviewer: 'vikram',
//                 rating: 5,
//                 comment: 'Excellent at explaining complex algorithms.'
//             }
//         ]
//     },
//     {
//         id: 8,
//         photoUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//         name: 'Rahul',
//         streakRate: 87,
//         streakStatus: 'increased',
//         department: 'IT',
//         year: 'I',
//         description: 'Cybersecurity expert with networking knowledge.',
//         reviews: [
//             {
//                 id: 1,
//                 reviewer: 'neha',
//                 rating: 4,
//                 comment: 'Great practical security examples.'
//             }
//         ]
//     }
// ];

