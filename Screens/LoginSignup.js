import React from 'react';
import { View, Text , StyleSheet,Image,Animated,TouchableOpacity} from 'react-native';
import Divider from 'react-native-divider';
import googleLogo from '../assets/googleLogo.png';
import facebookLogo from '../assets/facebookLogo.png';
import AnimatedInput from "react-native-animated-input";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';










const LoginSignup = ()=> {
    
        
  const [selected,setSelected]=React.useState(true);
  const handleClick1=()=>{
      setSelected(true);
  }
  const handleClick2=()=>{
    setSelected(false);
}
    return(
        <View style={style.container}>
            
            <View style={style.logoContainer}/>
              <Image source={require('../assets/TAPLogo.png')} style={{height:130, resizeMode:'contain'}}/>
            
        
             <View style={style.signInSignUpContainer}>
                <View style={{marginHorizontal:15}}>
                <TouchableOpacity onPress={handleClick1} >
                   {selected?<Text style={{ color:"white",fontSize:40, fontFamily:'PoppinsBold'}}>Sign in</Text>:<Text style={{ color:"gray",fontWeight:'bold',fontSize:40, fontFamily:'PoppinsBold'}}>Sign in</Text>} 
                </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:15}}>
                <TouchableOpacity onPress={handleClick2}>
                {selected?<Text style={{ color:"gray",fontSize:40, fontFamily:'PoppinsBold'}}>Sign Up</Text>:<Text style={{ color:"white",fontWeight:'bold',fontSize:40, fontFamily:'PoppinsBold'}}>Sign Up</Text>}
                </TouchableOpacity>
                </View>
            
            </View>
            
            {selected?
            <View style={style.signInFormContainer}>
                <View style={style.formInputContainer}>
                   <AnimatedInput 
                        inputContainerStyle={{borderBottomWidth: 0}}
                        placeholder="Email"
                        underlineColorAndroid="transparent"
                        styleContent={{backgroundColor:"transparent",width:275,borderBottomWidth:0,marginTop:0}}
                        styleInput={{color:"white", borderBottomWidth:0,justifyContent:"center",fontSize:17,marginTop:3, fontFamily:"Poppins"}}
                        styleLabel={{color:"rgba(255,255,255,0.6)",borderBottomWidth:0,marginTop:5, fontFamily:"Poppins"}}
                        styleBodyContent={{borderBottomWidth:0}}
                        
                        InputProps={{disableUnderline:true}}
                        style={{borderWidth:0}}
                   />
                   
                    
                </View>
                <View style={style.formInputContainer}>
                   <AnimatedInput 
                        inputContainerStyle={{borderBottomWidth: 0}}
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        styleContent={{backgroundColor:"transparent",width:275,borderBottomWidth:0}}
                        styleInput={{color:"white", borderBottomWidth:0,paddingTop:2,fontSize:17, fontFamily:"Poppins"}}
                        styleLabel={{color:"rgba(255,255,255,0.6)",borderBottomWidth:0,marginTop:5, fontFamily:"Poppins"}}
                        styleBodyContent={{borderBottomWidth:0}}
                        
                        
                        InputProps={{disableUnderline:true}}
                        style={{borderWidth:0}}
                   />
                   
                    
                </View>
                
                    <TouchableOpacity style={style.signUpButton}>
                    <LinearGradient colors={["#FF0A6C", "#2D27FF"]} start={[0,1]} end={[1,0]} style={{flex:1,width:"100%", borderRadius:30,justifyContent:'center',alignItems:'center'}} >
                        
                            <Text style={{color:"white",fontSize:20,fontWeight:'bold' , fontFamily:"PoppinsBold"}}>Sign In</Text>
                        
                    </LinearGradient>
                    </TouchableOpacity>
                    
                
                   
            </View>:
                <View style={style.signUpFormContainer}>
                <View style={style.formInputContainer1}>
                   <AnimatedInput 
                        inputContainerStyle={{borderBottomWidth: 0}}
                        placeholder="First Name &#38; Last Name "
                        underlineColorAndroid="transparent"
                        styleContent={{backgroundColor:"transparent",width:275,borderBottomWidth:0,marginTop:0}}
                        styleInput={{color:"white", borderBottomWidth:0,justifyContent:"center",fontSize:17, fontFamily:"Poppins"}}
                        styleLabel={{color:"rgba(255,255,255,0.6)",borderBottomWidth:0,marginTop:5, fontFamily:"Poppins"}}
                        styleBodyContent={{borderBottomWidth:0}}
                        
                        
                        InputProps={{disableUnderline:true}}
                        style={{borderWidth:0}}
                   />
                   
                    
                </View>
                <View style={style.formInputContainer1}>
                   <AnimatedInput 
                        inputContainerStyle={{borderBottomWidth: 0}}
                        placeholder="Email"
                        underlineColorAndroid="transparent"
                        styleContent={{backgroundColor:"transparent",width:275,borderBottomWidth:0}}
                        styleInput={{color:"white", borderBottomWidth:0,paddingTop:2,fontSize:17, fontFamily:"Poppins"}}
                        styleLabel={{color:"rgba(255,255,255,0.6)",borderBottomWidth:0,marginTop:4, fontFamily:"Poppins"}}
                        styleBodyContent={{borderBottomWidth:0}}
                        
                        
                        InputProps={{disableUnderline:true}}
                        style={{borderWidth:0}}
                   />
                   
                    
                </View>
                <View style={style.formInputContainer1}>
                   <AnimatedInput 
                        inputContainerStyle={{borderBottomWidth: 0,paddingTop:5}}
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        styleContent={{backgroundColor:"transparent",width:275,borderBottomWidth:0,paddingTop:5}}
                        styleInput={{color:"white", borderBottomWidth:0,paddingTop:0,fontSize:17, fontFamily:"Poppins"}}
                        styleLabel={{color:"rgba(255,255,255,0.6)",borderBottomWidth:0,marginTop:3, fontFamily:"Poppins"}}
                        styleBodyContent={{borderBottomWidth:0}}
                        
                        
                        InputProps={{disableUnderline:true}}
                        style={{borderWidth:0}}
                   />
                   
                    
                </View>
                    <TouchableOpacity style={style.signUpButton} >
                    <LinearGradient  colors={["#FF0A6C", "#2D27FF"]} start={[0,1]} end={[1,0]} style={{flex:1,width:"100%", borderRadius:30,justifyContent:'center',alignItems:'center'}} >
                        
                            <Text  style={{color:"white",fontSize:20,fontWeight:'bold', fontFamily:"PoppinsBold"}}>Sign Up</Text>
                        
                    </LinearGradient>
                    </TouchableOpacity>
                    
                   
            </View>}


            <View style={style.socialContainer}>
                <Divider orientation="center" borderColor="rgba(255,255,255,0.3)" color="rgba(255,255,255,0.6)" fontFamily="inherit">OR</Divider>
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
    },
    signUpFormContainer:{
        height:370,
        marginTop:0,
        alignItems:'center',
        flexDirection:'column',
    },
    signInFormContainer:{
        height:370,
        marginTop:0,
        alignItems:'center',
        flexDirection:'column',
    },
    formInputContainer:{
        flex:0.22,
        justifyContent:'flex-start',
        marginTop:20,
        // paddingTop:20,
        borderRadius:20,
        alignItems:'center',
        backgroundColor:"rgba(255,255,255,0.2)",
        flexDirection:'column',
        width:310,
        // height:200,
    },
    formInputContainer1:{
        flex:0.235,
        justifyContent:'flex-start',
        marginTop:20,
        // paddingTop:20,
        borderRadius:20,
        alignItems:'center',
        backgroundColor:"rgba(255,255,255,0.2)",
        flexDirection:'column',
        width:310,
        // height:200,
    },
    signUpButton:{
        flex:0.2,
        position:"relative",
        justifyContent:'center',
        marginTop:25,
        // paddingTop:10,
        borderRadius:30,
        alignItems:'center',
        backgroundColor:"rgba(255,255,255,0.2)",
        flexDirection:'column',
        width:351,
    } , 

  
    logoContainer: {
        flex:0.33,
        position:'relative',
        // top:0,
        // paddingTop:10,
        left:0,
        right:0,
        justifyContent:'center',
        alignItems:'center',
        // alignSelf:'flex-start',
        // backgroundColor:"pink",
        marginTop : 0,
        // zIndex:-1
        
       
    },
    socialContainer:{
        // marginTop:"1%",
        flexDirection:'column',
        flex:0.4,
        // height:"40%",
        position:"relative",
        justifyContent: 'flex-start',
        // paddingBottom:"0%",
        // backgroundColor:"red",
        width:"90%",
        zIndex:2
        
        
    },
    socialButtonContainer:{
        paddingTop:2,
        flexDirection:'row',
        justifyContent:'center',
        // alignItems:'center',
        width:"100%",
        height:100,
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
        marginTop:20,
        // flex:0.16,
        flexDirection:'row',
        justifyContent:'center',
        // backgroundColor:"red",
        width:"100%",
        // paddingBottom:20,
        marginHorizontal:1,
        marginBottom:-0
    }


})