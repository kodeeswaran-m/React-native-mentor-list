import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const CreateTask = ({ navigation }) => {
    const [taskName, setTaskName] = useState('');
    console.log(taskName);
    const handleSubmit = async () => {
        try {
            await axios.post('http://10.150.248.162:8080/tasks', {
                name: taskName
            });
            setTaskName('');
            navigation.navigate('DisplayTasks');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Task name"
                value={taskName}
                onChangeText={setTaskName}
            />
            <Button title="Create Task" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default CreateTask;