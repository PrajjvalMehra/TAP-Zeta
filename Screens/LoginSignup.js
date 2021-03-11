import React from 'react';
import { View, Text, Button , StyleSheet,Image,Animated} from 'react-native';




const LoginSignup = ()=> {

    return(
        <View style={style.container}>
            <View style={style.logoContainer}>
              <Image source={require('../assets/TAPLogo.png')} style={{ width:200 , height:150, resizeMode:'contain'}}/>
            </View>
            
        </View>

    )

}


export default LoginSignup;

const style = StyleSheet.create({

    container: {
        flex : 1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#010014",
        paddingTop:40


        
    },
    logoContainer: {
        flex:1,
        // backgroundColor:"red",
        marginTop : "30%",
        height:"100%"
       
    }

})