import React from "react";
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import CalcButton from "./components/Button";

export default class App extends React.Component {

  constructor(props: any) {
    super(props)
    this.onClickValue = this.onClickValue.bind(this);
    this.onClickEnter = this.onClickEnter.bind(this);
    this.onClickCalc = this.onClickCalc.bind(this);
    this.onClickAc = this.onClickAc.bind(this);
    this.onClickC = this.onClickC.bind(this);
  }

  onClickValue(value: Numbers): () => void {
    return () => {
      console.log("on click value: " + value);
      return 
    }
  }

  onClickEnter(): void {
    console.log("on click enter");
  }

  onClickCalc(value: Operators): () => void {
    return () => {
      console.log("on click calc: " + value);
      return 
    }
  }

  onClickAc(): void {
    console.log("on click ac");
  }

  onClickC(): void {
    console.log("on click c");
  }

  readonly buuttons = [
    [
      {flex: 2, label: "ac", onPress: this.onClickAc},
      {label: "c", onPress: this.onClickC},
      {label: "+", onPress: this.onClickCalc("+")},
    ],
    [
      {label: "7", onPress: this.onClickValue(7)},
      {label: "8", onPress: this.onClickValue(8)},
      {label: "9", onPress: this.onClickValue(9)},
      {label: "-", onPress: this.onClickCalc("-")},
    ],
    [
      {label: "4", onPress: this.onClickValue(4)},
      {label: "5", onPress: this.onClickValue(5)},
      {label: "6", onPress: this.onClickValue(6)},
      {label: "*", onPress: this.onClickCalc("*")},
    ],
    [
      {label: "1", onPress: this.onClickValue(1)},
      {label: "2", onPress: this.onClickValue(2)},
      {label: "3", onPress: this.onClickValue(3)},
    ],
  ];

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.results}>
          <View style={styles.resultLine}><Text>結果1</Text></View>
          <View style={styles.resultLine}><Text>結果2</Text></View>
          <View style={styles.resultLine}><Text>結果3</Text></View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.buttonLine}>
            <CalcButtons buttons={this.buuttons[0]}></CalcButtons>
          </View>
          <View style={styles.buttonLine}>
            <CalcButtons buttons={this.buuttons[1]}></CalcButtons>
          </View>
          <View style={styles.buttonLine}>
            <CalcButtons buttons={this.buuttons[2]}></CalcButtons>
          </View>
          <View style={styles.lastLinesContainer}>
            <View style={styles.twoButtonLines}>
              <View style={styles.buttonLine}>
                <CalcButtons buttons={this.buuttons[3]}></CalcButtons>
              </View>
              <View style={styles.buttonLine}>
                <CalcButton flex={2} label={"0"} onPress={this.onClickValue(1)}></CalcButton>
                <CalcButton label={"/"} onPress={this.onClickCalc("/")}></CalcButton>
              </View>
            </View>
            <View style={styles.enterButtonContainer}>
              <CalcButton label={"enter"} onPress={this.onClickEnter}></CalcButton>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

{/* <CalcButton flex={2} label={"ac"} onPress={this.onClickAc}></CalcButton>
<CalcButton label={"c"} onPress={this.onClickC}></CalcButton>
<CalcButton label={"+"} onPress={this.onClickCalc("+")}></CalcButton> */}

type Operators = "+" | "-" | "*" | "/";
type Numbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface ICalcButton {
  buttons: {
    label: string
    flex?: number
    onPress: () => void
  }[]
}

const CalcButtons: React.FC<ICalcButton> = (props: ICalcButton) => {
  return (
    <React.Fragment>
      {
        props.buttons.map(button => {
          return (
            <CalcButton key={button.label} flex={button.flex} label={button.label} onPress={button.onPress} />
          );
        })
      }
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // 結果を表示する領域
  results: {
    flex: 3,
    borderBottomColor: "#fff"
  },
  resultLine: {
    flex: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttons: {
    flex: 5,
  },
  buttonLine: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",
    borderWidth: 1,
  },
  lastLinesContainer: {
    flex: 2,
    flexDirection: "row"
  },
  twoButtonLines: {
    flex: 3,
  },
  enterButtonContainer: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
  },
});

const sampleStyles = StyleSheet.create({
  pattern1: {
    flex: 1,
    /** 縦軸方向に整列 */
    flexDirection: "column",
    /** 縦軸は等間隔に整列 */
    justifyContent: "space-between",
    /** 横軸は横のスタート位置へ */
    alignItems: "flex-start",
  },
  pattern2: {
    flex: 1,
    /** 縦軸方向に整列 */
    flexDirection: "column",
    /** 縦軸は中央より均等に並ぶように */
    justifyContent: "space-around",
    /** 横軸は終端へ */
    alignItems: "flex-end",
  },
  pattern3: {
    flex: 1,
    /** 縦軸方向に整列 */
    flexDirection: "column",
    /** 縦軸は中央寄せ */
    justifyContent: "center",
    /** 横軸は横軸いっぱいに広げる */
    alignItems: "stretch",
  },
});
