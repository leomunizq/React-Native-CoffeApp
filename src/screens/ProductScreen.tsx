import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { ArrowLeftCircleIcon, ShoppingBagIcon } from 'react-native-heroicons/outline'
import { HeartIcon, MinusIcon, PlusIcon, StarIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'

export default function ProductScreen(props) {
  const navigation = useNavigation()
  const item = props.route.params
  const [size, setSize] = React.useState('small')
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image
        source={require('../../assets/images/beansBackground2.png')}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50
        }}
        className="w-full absolute "
      />
      <SafeAreaView className="space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full border-2 border-white p-2">
            <HeartIcon size="24" strokeWidth={1.2} color="white" />
          </TouchableOpacity>
        </View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 40,
            shadowOffset: {
              width: 0,
              height: 30
            },
            shadowOpacity: 0.7
          }}
        >
          <Image source={item.image} className="h-60 w-60" />
        </View>
        <View
          style={{ backgroundColor: themeColors.bgLight }}
          className="flex-row mx-4 items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90"
        >
          <StarIcon size="15" color="white" />
          <Text className="text-white font-semibold text-base">
            {item.stars}
          </Text>
        </View>
        <View className="mx-4 flex-row justify-between items-center">
          <Text
            className="text-3xl font-semibold"
            style={{ color: themeColors.text }}
          >
            {item.name}
          </Text>
          <Text
            className="text-lg font-semibold opacity-60"
            style={{ color: themeColors.text }}
          >
            $ {item.price}
          </Text>
        </View>
        <View className="mx-4 space-y-2">
          <Text
            className="text-lg font-bold"
            style={{ color: themeColors.text }}
          >
            Coffe Size
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity
            onPress={() => setSize('small')}
              className="py-3 px-8 rounded-full"
              style={{ backgroundColor: size === 'small' ? themeColors.bgLight : 'rgba(0,0,0,0.1)' }}
            >
              <Text className={size === 'small' ? 'text-white' : 'text-gray-700'}>Small</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => setSize('Medium')}
              className="py-3 px-8 rounded-full"
              style={{ backgroundColor: size === 'Medium' ? themeColors.bgLight : 'rgba(0,0,0,0.1)' }}
            >
              <Text className={size === 'Medium' ? 'text-white' : 'text-gray-700'}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => setSize('Large')}
              className="py-3 px-8 rounded-full"
              style={{ backgroundColor: size === 'Large' ? themeColors.bgLight : 'rgba(0,0,0,0.1)' }}
            >
              <Text className={size === 'Large' ? 'text-white' : 'text-gray-700'}>Large</Text>
            </TouchableOpacity>
          </View>
         
        </View>
        <View className='mx-4 space-y-2 h-28'>
          <Text
            className="text-lg font-bold"
            style={{ color: themeColors.text }}
          >
           About
          </Text>
          <Text className='text-gray-600'>
            {item.desc}
          </Text>
          </View>

          <View className='mx-4 flex-row justify-between items-center mb-2'>
            <View className='flex-row items-center space-x-1'>
              <Text className='text-base text-gray-700 font-semibold opacity-60'>
                Volume
              </Text>
              <Text className='text-base text-black font-semibold'>
                {item.volume}
              </Text>
            </View>
            <View className='flex-row items-center space-x-4 border-gray-400 border rounded-full py-1 px-4'>
              <TouchableOpacity>
                <MinusIcon size="20" strokeWidth={3} color={themeColors.text} />
              </TouchableOpacity>
              <Text className='text-base font-semibold' style={{color: themeColors.text}}>
                1
              </Text>
              <TouchableOpacity>
                <PlusIcon size="20" strokeWidth={3} color={themeColors.text} />
              </TouchableOpacity>
            </View>
          </View>
          <View className='flex-row justify-between mx-4 items-center'>
            <TouchableOpacity className='p-4 rounded-full border border-gray-400'>
              <ShoppingBagIcon size={30} color="gray"/>
            </TouchableOpacity>
            <TouchableOpacity className='p-5 rounded-full flex-1 ml-3' style={{backgroundColor: themeColors.bgLight}}>
              <Text className='text-base text-center font-semibold text-white' >
                buy now
              </Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    </View>
  )
}
