import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";

const CardStyle = (props) => {
    
    return (
      <TouchableNativeFeedback onPress={props.onSelect}>
        <View
          style={{
            backgroundColor: props.color,
            ...styles.gridItem,
            ...styles.container,
          }}
        >
          <Text style={styles.headerStyle}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
};

styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
    shadowOffset: {width: 0, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 3
  },
  headerStyle: {
      fontFamily: 'open-sans'
  }
});

export default CardStyle;