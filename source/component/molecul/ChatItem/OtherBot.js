import React from 'react';
import {Image, StyleSheet, Text, Touchable, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DummyDoctor1} from '../../../assets';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

export default function OtherBot({data, onPressData}) {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={{width: 200, backgroundColor: colors.cardText, elevation: 4, borderRadius: 10}}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
            onPress={() => onPressData(item)}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                paddingVertical: 10,
                paddingHorizontal: 10
              }}>
              <Text style={styles.contentText}>{item.header_list}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  contentChat: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.cardText,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  contentText: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: 'white',
  },
  contentDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
