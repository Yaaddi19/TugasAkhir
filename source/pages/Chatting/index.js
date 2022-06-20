import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../component/molecul';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

export default function Chatting({navigation}) {
  const [text, setText] = useState('');
  const [message, setMessage] = useState([
    {
      id: 1,
      message: 'test',
      sender: 'yadi',
      senderId: 1,
    },
  ]);

  useEffect(() => {}, []);

  const sendChat = () => {
    var newData = [
      ...message,
      {
        id: 1,
        message: text,
        sender: 'yadi',
        senderId: 1,
      },
    ];

    setMessage(newData)

    setText("")
  };

  return (
    <View style={styles.page}>
      <Header
        title="Dicky"
        type="primary-homeapp"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatdate}>Minggu, 3 Oktober 2021</Text>
        {message.map((item, index) => {
          return <ChatItem isMe />;
        })}
        {/* <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe /> */}
      </View>
      <InputChat onChange={text => setText(text)} onPressButton={sendChat} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatdate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    marginVertical: 30,
    textAlign: 'center',
    color: colors.text.secondary,
  },
});
