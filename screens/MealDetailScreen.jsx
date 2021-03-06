import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/data";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId); 
  
  return (
    <View style={styles.screen}>
      
      <Text>Meal Detail Screen!</Text>
      <Text>{mealId}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId); 
  return {
    headerTitle: selectedMeal.title,
  };

}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
