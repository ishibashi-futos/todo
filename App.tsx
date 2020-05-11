import React from 'react';
import { 
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  AsyncStorage,
  Alert,
} from 'react-native';
import { TextInput, Button, KeyboardAvoidingView } from 'react-native';

interface ToDo {
  index: number
  title: string
  done: boolean
}

interface IState {
  todo: ToDo[]
  currentIndex: number
  inputText: string
}

/** ToDoを保存するストレージキー */
const STORAGE_TODO_KEY = "@todoapp.todo"

export default class App extends React.Component<{}, IState> {
  constructor(prop: any) {
    super(prop);
    this.state = {
      todo: [
        {index: 0, title: "原稿を書く", done: false},
        {index: 1, title: "犬の散歩をする", done: false},
      ],
      currentIndex: 1,
      inputText: "",
    }
    this.render = this.render.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
  }

  componentDidMount() {
    this.loadTodo();
  }

  private async loadTodo() {
    try {
      const todostr = await AsyncStorage.getItem(STORAGE_TODO_KEY);
      if (todostr) {
        const todo: IState = JSON.parse(todostr);
        const currentIndex = todo.currentIndex;
        this.setState({...todo});
      }
    } catch (e) {
      console.log(e)
    }
  }

  private async saveTodo(state: IState) {
    const todostr = JSON.stringify(state);
    await AsyncStorage.setItem(STORAGE_TODO_KEY, todostr);
  }

  private onAddItem(): void {
    const title = this.state.inputText;
    if (!title) {
      Alert.alert("入力エラー", "タイトルが入力されていません",
        [
          {
            text: "キャンセル",
            onPress: () => {console.log("on ok.")}
          }
        ]
      )
      return;
    }
    const nextIndex = this.state.currentIndex + 1;
    const newTodos = [...this.state.todo, {index: nextIndex, title: title, done: false}];
    const newState = {
      todo: newTodos,
      currentIndex: nextIndex,
      inputText: "",
    }
    this.setState(newState);
    this.saveTodo(newState);
  }

  public render = (): JSX.Element => {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.filter}>
          <Text>Filter text Area</Text>
        </View>
        <SafeAreaView>
          <FlatList data={this.state.todo}
          renderItem={
            ({item}) => <Text>{item.title}</Text>
          }
          keyExtractor={(item) => `todo_${item.index}`}
          ></FlatList>
        </SafeAreaView>
        <View style={styles.input}>
          <TextInput
            onChangeText={(text) => {
              this.setState({inputText: text});
            }}
            value={this.state.inputText}
            style={styles.inputText}
          ></TextInput>
          <Button onPress={this.onAddItem}
            title="Add"
            color="#841584"
          ></Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 100,
  },
  filter: {
    height: 30,
  },
  todolist: {
    flex: 1,
  },
  input: {
    height: 30,
    flexDirection: 'row',
  },
  inputText: {
    flex: 1,
  },
  inputButton: {
    width: 100,
  }
});
