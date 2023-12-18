import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  useGetAllProductsQuery,
  useGetNameWiseProductQuaryQuery,
  usePassImageWithMultiPartQueryQuery,
} from './reduxConfig/slice/apiServiceSlice';

const Demo = () => {
  //   const {data, isLoading, error} = useGetAllProductsQuery();  //!normal get method

  // const {data, isLoading, error} = useGetNameWiseProductQuaryQuery({
  //     bodyJson : {},
  // });  //!POST METHOD WTJ PASS YOUR BODY

  // const [getNameWiseProduct, {isLoading, data}] =
  //   useGetNameWiseProductMutation();
  // console.log(data);
  // useEffect(() => {
  //   getNameWiseProduct({
  //     name: 'morpheus',
  //     job: 'leader',
  //   });
  // }, []); //!using Post with mutation when you want change any data or set pagination

  //   const fromData = new FormData();
  //   fromData.append('key', 'value');
  //   const {data, isLoading, error} = usePassImageWithMultiPartQueryQuery({
  //       bodyJson : fromData
  //   });  //!POST METHOD WTJ PASS YOUR BODY FORM DATA

  return (
    <View>
      <Text>Demo</Text>
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({});
