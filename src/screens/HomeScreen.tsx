import React from 'react'
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { BellIcon, MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'

export default function HomeScreen() {
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar style="dark" />
      <Image
        source={require('../../assets/images/beansBackground1.png')}
        style={{ height: 220 }}
        className="w-full absolute -top-5 opacity-10"
      />
      <SafeAreaView className="flex-1">
        {/* avatar and bell Icon  */}
        <View className='px-4 flex-row justify-between items-center'>
          <Image
            source={require('../../assets/images/avatar.png')}
            className="h-9 w-9 rounded-full"
          />

          <View className="flex-row items-center space-x-2">
            <MapPinIcon size='25' color={themeColors.bgLight} />
            <Text className="text-base font-semibold">Kathmandu, Nepal</Text>
          </View>
          <BellIcon size="25" color={themeColors.bgLight} />
        </View>

        {/* search bar  */}

        <View className="mx-5 mt-4">
      
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
<TextInput placeholder="Search" className="flex-1 p-4 font-semibold text-gray-700" />
<TouchableOpacity className='rounded-full p-2' style={{backgroundColor: themeColors.bgLight}}>
  <MagnifyingGlassIcon size="25" color='white' strokeWidth={2} />
</TouchableOpacity>

</View>
        </View>
      </SafeAreaView>
    </View>
  )
}
