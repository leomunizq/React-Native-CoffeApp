import React from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {
  BellIcon,
  MagnifyingGlassIcon,
  MapPinIcon
} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { categories, coffeeItems } from '../constants/data'
import Carousel from 'react-native-snap-carousel'
import { CoffeCard } from '../components/CoffeCard'
// export interface HomeScreenProps {
//   item: {
//     id: number;
//     title: string;
// }
// }

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = React.useState(1)
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
        <View className="px-4 flex-row justify-between items-center">
          <Image
            source={require('../../assets/images/avatar.png')}
            className="h-9 w-9 rounded-full"
          />

          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text className="text-base font-semibold">Kathmandu, Nepal</Text>
          </View>
          <BellIcon size="25" color={themeColors.bgLight} />
        </View>

        {/* search bar  */}

        <View className="mx-5 mt-4">
          <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
            <TextInput
              placeholder="Search"
              className="flex-1 p-4 font-semibold text-gray-700"
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{ backgroundColor: themeColors.bgLight }}
            >
              <MagnifyingGlassIcon size="25" color="white" strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </View>
        {/* categories */}
        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              let isActive = item.id == activeCategory
              let activeTextColor = isActive ? 'text-white' : 'text-gray-700'
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive
                      ? themeColors.bgLight
                      : 'rgba( 0,0,0, 0.07)'
                  }}
                  className="p-4 px-6 rounded-full mr-2 shadow"
                >
                  <Text className={'font-semibold' + activeTextColor}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        {/* cards  */}
        <View className="mt-16 py-2">
          <Carousel
            containerCustomStyle={{ overflow: 'visible' }}
            data={coffeeItems}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
            renderItem={({ item }) => <CoffeCard item={item} />}
            loop
          />
        </View>
      </SafeAreaView>
    </View>
  )
}
