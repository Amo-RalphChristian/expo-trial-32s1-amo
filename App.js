import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return; 
    
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    
    setEnteredGoalText(''); 
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>My Course Goals</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          placeholderTextColor="#94a3b8"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            pressed && styles.addButtonPressed
          ]}
          onPress={addGoalHandler}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>

      <View style={styles.goalsContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal.id}>
              <Text style={styles.goalText}>{goal.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    backgroundColor: '#FFFFFF',
    width: '75%',
    marginRight: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    color: '#334155',
  },
  addButton: {
    backgroundColor: '#6366F1',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  addButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  goalsContainer: {
    flex: 5,
    paddingTop: 20,
  },
  goalItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#6366F1',
    elevation: 1, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  goalText: {
    color: '#334155',
    fontSize: 16,
    fontWeight: '500',
  },
});