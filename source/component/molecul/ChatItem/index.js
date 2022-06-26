import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'
import IsMe from './IsMe'
import Other from './Other'
import OtherBot from './OtherBot'

export default function ChatItem({isMe, deskripsi, bot, data, onPressData}) {
    if (isMe) {
        return <IsMe deskripsi={deskripsi}  data={data} onPressData={onPressData} />
    } else if(bot) {
        return <OtherBot deskripsi={deskripsi} data={data} onPressData={onPressData} />
    } else {
        return <Other deskripsi={deskripsi}  data={data} onPressData={onPressData} />
    }

    
}

const styles = StyleSheet.create({
   
})
