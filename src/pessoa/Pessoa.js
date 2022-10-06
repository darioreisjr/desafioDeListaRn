import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

function Pessoa(props) {
    return (
        <View style={styles.areaPessoa}>

            <Image
                source={{ uri:props.data.imagem }}
                style={{ width: 150, height: 150 }}
            />
            <Text style={styles.textoPessoa}>{props.data.nome}</Text>
            <Text style={styles.textCargo}>{props.data.cargo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    areaPessoa: {
        backgroundColor: '#95A5A6',
        height: 250,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoPessoa: {
        color: '#070707',
        fontSize: 20,
    },
    textCargo: {
        color: '#8E44AD',
        fontSize: 15,
    }
})

export default Pessoa