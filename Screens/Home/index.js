import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Dimensions, } from "react-native";
const {height, width} = Dimensions.get('window')
const Stack = createStackNavigator();
import stripe from 'tipsi-stripe';

stripe.setOptions({
    publishableKey : 'pk_test_51Hr6iuB1fVVcJhktAcWfm2hbzj6xR8KPakebyu66xQVSz7fNUXCPD0SVY6fUrF8JhSy0fJbX05VuTPJtAMDl8fBN00IwBs2ADe'
});

const requestPayment = () => {
    return stripe
      .paymentRequestWithCardForm()
      .then(stripeTokenInfo => {
        console.log('Token created', { stripeTokenInfo });
      })
      .catch(error => {
        console.log('Payment failed', { error });
      });
  };

export default function Home ({navigation}) {
    const [sc, setSc] = useState(1)
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            <TouchableOpacity activeOpacity={1} style={{height: height/ 14, width: width/1.09, borderWidth: 1, borderRadius: 20, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', 
                transform:[{
                    scale : sc
                }]
            }}
                onPressIn={()=>{setSc(0.94)}}
                onPress={()=>{navigation.navigate('Payment')}}
                onPressOut={()=>setSc(1)}
            >
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Pay</Text> 
            </TouchableOpacity>
        </View>
    )
}