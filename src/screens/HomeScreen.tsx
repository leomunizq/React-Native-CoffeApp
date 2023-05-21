import React from 'react'
import {Image, SafeAreaView, Text, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {MapPinIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme';

export default function HomeScreen() {
  return (
    <View className='flex-1 relative bg-white'>
<StatusBar style="dark" />
<Image source={require('../../assets/images/beansBackground1.png')} style={{height: 220}} className='w-full absolute -top-5 opacity-10' />
<SafeAreaView className='flex-1'>
<View>
<Image source={require('../../assets/images/avatar.png')} className='h-9 w-9 rounded-full' />

<View className='flex-row items-center space-x-2'>
  <MapPinIcon size={25} color={themeColors.bgLight}/>
</View>

</View>
</SafeAreaView>
    </View>
    
  )
}
