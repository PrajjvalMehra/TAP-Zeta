import React from 'react';
import { View, Text, Button , StyleSheet,Image,Animated} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Emoji from 'react-native-emoji';


const Dots = ({selected}) =>{
  let backgroundColor;
  backgroundColor = selected ? 'rgba(112,228,239,1)' : 'rgba(112,228,239,0.3)';

  return(
    <View
        style={{
            width:7,
            borderRadius:50,
            height:7,
            marginHorizontal:3,
            marginBottom:125,
            backgroundColor
        }}
    />

    
  );
}

const SkipButton = ({...props})=>(

  <View style={{marginHorizontal:20}}>
  <Button title = 'SKIP' color ="#70E4EF" {...props}/>
  </View>
    
  

)
const NextButton = ({...props})=>(
<View style={{marginHorizontal:20}}>
  <Button title = 'NEXT' color ="#70E4EF" {...props}/>
  </View>
    
  

)
const DoneButton = ()=>(

  
  
  <View style={{marginHorizontal:20}}>
    
      <Button title = 'Get Started' color ="#70E4EF"/>
    
  </View>
      
    
  
  )
  

const OnboardingScreen = ({})=>{


    return(
      <View style={styles.container}>
        <Onboarding
        SkipButtonComponent={SkipButton}
        NextButtonComponent = {NextButton}
        DoneButtonComponent = {DoneButton}
        showPagination
        DotComponent={Dots}
        
        pages={[
          {
            backgroundColor: '#010014',
            image: <Image source={require('./images/onboarding1.png')} style={{width:350,height:350}}/>,
            title: 'Smart.',
            subtitle: 'TAP app is smart and learns about your individual financial preferences.',
          },
          {
            backgroundColor: '#010014',
            image: <Image source={require('./images/onboarding2.png')}style={{width:350,height:350}} />,
            title: 'Simple.',
            subtitle: 'See actionable insights you can automate in your personalized financial plan.',
            
          },
          {
            backgroundColor: '#010014',
            image: <Image source={require('./images/onboarding3.png')} style={{width:350,height:350}} />,
            title: 'Social.',
            subtitle: 'Connect and compete with friends based on similar financial goals',
          },
          
        ]}
      />
      </View>
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({

  container :{
    flex: 1,
    width: "100%",
    height: "100%"
  }



})