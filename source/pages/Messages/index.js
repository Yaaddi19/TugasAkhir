import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1, DummyDoctor2 } from '../../assets/dummy'
import List from '../../component/molecul/List'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'

export default function Messages({navigation}) {
    const [doctors] = useState([
        {
            id : 1,
            profile : DummyDoctor1,
            name : 'Dicky',
            desc : 'Baik terima kasih atas wakt...'
        },
        {
            id : 2,
            profile : DummyDoctor2,
            name : 'Dicky',
            desc : 'Baik terima kasih atas wakt...'
        },
    ])
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>Messages</Text>
                {
                    doctors.map(doctor => {
                        return (
                            <List
                            key={doctor.id}
                            profile={doctor.profile}
                            name={doctor.name}
                            desc={doctor.desc}
                            onPress={() => navigation.navigate('Chatting')} />
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.primary,
        flex : 1,
    },
    container : {
        flex : 1,
        backgroundColor : 'white',
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
    },
    title : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginLeft : 16,
        marginTop : 30,
    }
})
