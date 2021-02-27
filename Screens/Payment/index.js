import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Dimensions, } from "react-native";
const {height, width} = Dimensions.get('window')
const Stack = createStackNavigator();
import stripe from 'tipsi-stripe';
import RNUpiPayment from 'react-native-upi-payment'

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

export default function Payment ({navigation}) {
    const [sc, setSc] = useState(1);
    const [sc2, setSc2] = useState(1);
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            {/* Payment Using Card Stripe */}
            <TouchableOpacity activeOpacity={1} style={{height: height/ 14, width: width/1.09, borderWidth: 1, borderRadius: 20, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', 
                transform:[{
                    scale : sc
                }]
            }}
                onPressIn={()=>{setSc(0.94)}}
                onPress={()=>{requestPayment()}}
                onPressOut={()=>setSc(1)}
            >
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Pay</Text> 
            </TouchableOpacity>
            {/* Payment Using Upi */}
            <TouchableOpacity activeOpacity={1} style={{height: height/ 14, width: width/1.09, borderWidth: 1, borderRadius: 20, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', marginTop: 10,
                transform:[{
                    scale : sc2
                }]
            }}
                onPressIn={()=>{setSc2(0.94)}}
                onPress={()=>{RNUpiPayment.initializePayment({
                    vpa: 'sk8012281029@paytm', // or can be john@ybl or mobileNo@upi
                    payeeName: 'Harish',
                    amount: '10',
                    transactionRef: 'aasf-332-aoei-fn'
                  }, (suss)=>{
                    console.log('sucesses')
                  }, (failureCallback)=> {
                    console.log('Failed')
                  });}}
                onPressOut={()=>setSc2(1)}
            >
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Pay Via Upi</Text> 
            </TouchableOpacity>
        </View>
    )
}