import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../component/molecul';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {BaseUrl} from '../../Data/Config';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default function Chatting({navigation, onPress}) {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [message, setMessage] = useState([
    {
      id: 1,
      message: 'Ada yang bisa saya bantu?',
      sender: 'dokter',
      senderId: 1,
    },
  ]);

  useEffect(() => {}, []);

  const sendChat = () => {
    fetch(BaseUrl + '/list_chat', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(json => {
        if (json == 'gagal') {
          alert('gagal');
        } else {
          //alert("success")
          console.log('test', json);
          setList(json);
        }

        console.log('ini', json);
      })
      .catch(error => {
        console.log('error', error);
      });

    var newData = [
      ...message,
      {
        id: 2,
        message: text,
        sender: 'yadi',
        senderId: 2,
      },
      {
        id: 3,
        message: text,
        sender: 'ttttytytytuty',
        senderId: 3,
      }
    ];

    setMessage(newData);

    setText('');
  };

  const onPressData = (item) => {


    var deskripsi = list.filter((itemdata, index) => itemdata.id == item.id)

    var newData = [
      ...message,
      {
        id: 1,
        message: deskripsi[0].deskripsi,
        sender: 'yadi',
        senderId: 1,
      },
     
    ];

    setMessage(newData);
  }

  return (
    <View style={styles.page}>
      <Header
        title="Dicky"
        type="primary-homeapp"
        onPress={() => navigation.goBack('Messages')}
      />
      <View style={styles.content}>
        <Text style={styles.chatdate}>Minggu, 3 Oktober 2021</Text>

        <ScrollView>
        {message.map((item, index) => {
          if (item.senderId == 2) {
            return <ChatItem isMe deskripsi={item.message} data={[]} onPressData={onPressData} />;
          } else if (item.senderId == 3) {
            return <ChatItem bot deskripsi={item.message} data={list} onPressData={onPressData} />;
          } else {
            return <ChatItem deskripsi={item.message} data={[]} onPressData={onPressData} />;
          }
        })}
        </ScrollView>
        


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
