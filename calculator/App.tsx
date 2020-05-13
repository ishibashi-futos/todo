import React from 'react';
import { StyleSheet, Text, View, StyleProp } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.pattern1}>
        <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'gray'}} />
      </View>
      <View style={styles.pattern2}>
        <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'gray'}} />
      </View>
      {/* 横軸いっぱい確保しているので、Widthを削除 */}
      <View style={styles.pattern3}>
        <View style={{height: 100, backgroundColor: 'blue'}} />
        <View style={{height: 100, backgroundColor: 'red'}} />
        <View style={{height: 100, backgroundColor: 'gray'}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pattern1: {
    flex: 1,
    /** 縦軸方向に整列 */
    flexDirection: 'column',
    /** 縦軸は等間隔に整列 */
    justifyContent: 'space-between',
    /** 横軸は横のスタート位置へ */
    alignItems: 'flex-start',
  },
  pattern2: {
    flex: 1,
    /** 縦軸方向に整列 */
    flexDirection: 'column',
    /** 縦軸は中央より均等に並ぶように */
    justifyContent: 'space-around',
    /** 横軸は終端へ */
    alignItems: 'flex-end',
  },
  pattern3: {
    flex: 1,
    /** 縦軸方向に整列 */
    flexDirection: 'column',
    /** 縦軸は中央寄せ */
    justifyContent: 'center',
    /** 横軸は横軸いっぱいに広げる */
    alignItems: 'stretch',
  },
});
