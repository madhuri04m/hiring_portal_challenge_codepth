import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const TaskDetail = ({ route }) => {
  const { taskId } = route.params;
  const [task, setTask] = useState(null);

  useEffect(() => {
    // TODO: Fetch task details from the backend and update the state
  }, []);

  return (
    <View>
      {task ? (
        <View>
          <Text>Title: {task.title}</Text>
          <Text>Description: {task.description}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default TaskDetail;
