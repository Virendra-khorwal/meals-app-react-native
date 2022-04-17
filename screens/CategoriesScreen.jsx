import { View, Text, StyleSheet ,FlatList} from "react-native";
import Color from "../constants/Color";
import { CATEGORIES } from "../data/data";
import CardStyle from "../components/CardStyle";


const CategoriesScreen = (props) => {
  
  const renderItemData =(itemData)=> {
    return <CardStyle title={itemData.item.title} color={itemData.item.color}  onSelect={()=> {
      {
        props.navigation.navigate({
          routeName: "CategoriesMeals",
          params: {
            categoryId: itemData.item.id,
          },
        });
      }
    }} />
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderItemData} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle : 'Meals Category'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
  
});

export default CategoriesScreen;
