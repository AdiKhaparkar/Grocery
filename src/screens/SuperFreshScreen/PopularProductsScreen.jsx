import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {GROCERYPRODUCTS} from '../../data/groceryProducts';
import ProductItem from './ProductItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addCartProduct} from '../../redux/actions/userAction';
import ListItem from '../../components/ListItem';

const PopularProductsScreen = () => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={styles.headerText}>Popular Products</Text>
        <Icon name="bell-badge-outline" size={30} />
      </View>
      <View style={[styles.itemDivider, styles.bottomLine]} />
      <View style={styles.sortedItem}>
        <View style={styles.itemDirection}>
          <Fontisto name="list-1" size={16} />
          <Text> Sort</Text>
        </View>
        <View style={styles.itemDirection}>
          <AntDesign name="filter" size={20} />
          <Text> Filter</Text>
        </View>
      </View>
      <View style={[styles.itemDivider, styles.bottomLine]} />

      <ListItem
        data={GROCERYPRODUCTS}
        renderItem={({item, index}) => {
          return (
            <ProductItem
              item={item}
              onAddToCart={() => {
                dispatch(addCartProduct(item));
              }}
            />
          );
        }}
        numColumns={2}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemDivider}></View>;
        }}
      />
    </SafeAreaView>
  );
};
export default PopularProductsScreen;
