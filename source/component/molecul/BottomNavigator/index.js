import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils/colors';
import { TabItem } from '../../atom';

export default function BottomNavigator({ state, descriptors, navigation }) {
    return (
        <View style={styles.page}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
              <TabItem 
              key={index}
              title={label} 
              active={isFocused}
              onPress={onPress}
              onLongPress={onLongPress} />
          );
        })}
      </View>
    )
}

const styles = StyleSheet.create({
    page : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 12,
        paddingHorizontal : 60,
        backgroundColor : colors.primary,

    }
})
