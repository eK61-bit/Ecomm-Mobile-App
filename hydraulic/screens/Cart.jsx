import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./cart.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import fetchCart from "../hook/fetchCart";
import CartTile from "../components/cart/cartTile";
import { Button } from "../components";

const Cart = ({ navigation }) => {
  const { data, loading, error, refetch } = fetchCart();
  const [selected, setSelected] = useState(null);
  const [select, setSelect] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <Text style={styles.titletxt}>Sepetim</Text>
      </View>

      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <CartTile
              item={item}
              onPress={() => {
                setSelect(!select), setSelected(item);
              }}
              select={select}
            />
          )}
        />
      )}

      {select === false ? (
        <View></View>
      ) : (
        <Button title={"Kontrol Et"} isValid={select} onPress={() => {}} />
      )}
    </SafeAreaView>
  );
};

export default Cart;
