import React from 'react';
import { 
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export interface IToDo {
  title: string
  done: boolean
  onPress: () => void
}

export default class ToDo extends React.Component<IToDo, {}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const style = this.props.done ? styles.done : styles.well
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={style}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  well: {
    fontSize: 20,
    backgroundColor: "white",
  },
  done: {
    fontSize: 20,
    backgroundColor: "#C0C0C0",
  },
});