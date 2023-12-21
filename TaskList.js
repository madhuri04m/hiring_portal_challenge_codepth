import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import axios from 'axios';

const TaskList = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // TODO: Fetch tasks from the backend and update the state
  }, []);

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('TaskDetail', { taskId: item._id })}
            />
          </View>
        )}
      />
      <Button title="Add Task" onPress={() => navigation.navigate('TaskForm')} />
    </View>
  );
};

export default TaskList;
