import React from "react";
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.results}>
        <View style={styles.resultLine}><Text>結果1</Text></View>
        <View style={styles.resultLine}><Text>結果2</Text></View>
        <View style={styles.resultLine}><Text>結果3</Text></View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonLine}><Text>ButtonLine1</Text></View>
        <View style={styles.buttonLine}><Text>ButtonLine2</Text></View>
        <View style={styles.buttonLine}><Text>ButtonLine3</Text></View>
        <View style={styles.lastLinesContainer}>
          <View style={styles.twoButtonLines}>
            <View style={styles.buttonLine}>
              <Text>ButtonLine4</Text>
              <Text>ButtonLine5</Text>
            </View>
          </View>
          <View style={styles.enterButtonContainer}>
            <Text>Enter Button</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
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
