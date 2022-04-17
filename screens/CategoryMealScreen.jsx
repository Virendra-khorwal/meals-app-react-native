import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import Color from "../constants/Color";
import { CATEGORIES, MEALS } from "../data/data";
import MealsStyle from "../components/MealsStyle";

const CategoryMealScreen = (props) => {
  const renderMealItem = (ItemData) => {
    return (
      <MealsStyle
        title={ItemData.item.title}
        duration={ItemData.item.duration}
        complexity={ItemData.item.complexity}
        affordability={ItemData.item.affordability}
        image={ItemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({routeName: 'MealDetail', params:{
            mealId:ItemData.item.id
          }})
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCat.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default CategoryMealScreen;
