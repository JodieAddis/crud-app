import { Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";
import { data } from "@/data/todos";

export default function Index() {
  const [todos, setTodos] = useState(data.sort((a, b) => b.id - a.id));
  const [text, setText] = useState("");

  //Fonction d'ajout
  const addTodo = () => {
    if (text.trim()) {
      const newId = todos.length > 0 ? todos[0].id + 1 : 1;
      setTodos([{ id: newId, title: text, completed: false }, ...todos]);
      setText("");
    }
  };

  //Fonction de mise à jour
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //Fonction pour la suppression
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput />
        <Pressable>
          <Text></Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
