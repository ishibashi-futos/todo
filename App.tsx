import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native';
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

  private onAddItem(): void {
    const title = this.state.inputText;
    if (!title) {
      return;
    }
    const nextIndex = this.state.currentIndex + 1;
    const newTodos = [...this.state.todo, {index: nextIndex, title: title, done: false}];
    this.setState({
      todo: newTodos,
      currentIndex: nextIndex,
      inputText: "",
    });
  }

  public render = (): JSX.Element => {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.filter}>
          <Text>Filter text Area</Text>
        </View>
        <ScrollView>
          <FlatList data={this.state.todo}
          renderItem={
            ({item}) => <Text>{item.title}</Text>
          }
          keyExtractor={(item) => `todo_${item.index}`}
          ></FlatList>
        </ScrollView>
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
    paddingBottom: 50,
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
