import React from 'react';
import { View, Text ,Button, StyleSheet,Image,Animated,TouchableOpacity,TouchableHighlight} from 'react-native';
import Divider from 'react-native-divider';
// import { Button } from 'react-native-paper'; 
import googleLogo from '../assets/googleLogo.png';
import facebookLogo from '../assets/facebookLogo.png';




const LoginSignup = ()=> {

    
    return(
        <View style={style.container}>
            <View style={style.logoContainer}>
              <Image source={require('../assets/TAPLogo.png')} style={{height:"100%", resizeMode:'contain'}}/>
            </View>
            <View style={style.signInSignUpContainer}>
                <View style={{marginHorizontal:15}}>
                <TouchableOpacity>
                    <Text style={{ color:"white",fontWeight:'bold',fontSize:"45%"}}>Sign in</Text>
                </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:15}}>
                <TouchableOpacity>
                    <Text style={{color:"white", fontWeight:'bold',fontSize:"45%"}}>Sign up</Text>
                </TouchableOpacity>
                </View>
            </View>



            <View style={style.socialContainer}>
                <Divider orientation="center" borderColor="rgba(255,255,255,0.3)" color="rgba(255,255,255,0.6)">OR</Divider>
                <View style={style.socialButtonContainer}>
                <TouchableOpacity>
                    <View style={style.googleLogo}>
                        
                            <Image source={googleLogo} style={{width:"15%",resizeMode:'contain'}}/>
                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={style.googleLogo}>
                        
                            <Image source={facebookLogo} style={{width:"15%",resizeMode:'contain'}}  />
                        
                    </View>
                </TouchableOpacity>
                </View>

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
        paddingTop:"30%"


        
    },

  
    logoContainer: {
        flex:0.45,
        // backgroundColor:"pink",
        marginTop : "0%",
        height:"10%",
       
    },
    socialContainer:{
        marginTop:"10%",
        flexDirection:'column',
        flex:1,
        height:"40%",
        justifyContent: 'flex-end',
        paddingBottom:"12%",
        // backgroundColor:"red",
        width:"90%",
        
        
    },
    socialButtonContainer:{
        paddingTop:2,
        flexDirection:'row',
        justifyContent:'center',
        // alignItems:'center',
        width:"100%",
        height:"30%",
        // backgroundColor:"red"
        
    },
    googleLogo:{
        // backgroundColor:"red",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:160,
        height:"55%",
        borderWidth:1,
        borderColor:"rgba(255,255,255,0.3)",
        borderRadius: 35,
        marginHorizontal:18
    },
    signInSignUpContainer:{
        marginTop:"9%",
        flex:0.45,
        flexDirection:'row',
        justifyContent:'center',
        // backgroundColor:"red",
        width:"73.3%",
        marginHorizontal:1,
    }


})