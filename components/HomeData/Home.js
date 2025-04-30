import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Home = () => {

    const [text, setText] = useState("")

    const handleChange = (text) => {
        setText(text)
    }

    const handleUpper = () => {
        console.log("Hellow world")
        let mydata = text.toUpperCase();
        setText(mydata)
    }

    const handleLower = () => {
        setText(text.toLowerCase())
    }
    const firstUpperLetter = () => {
        let data = text.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(data)
    }

    const handleClear = () => {
        setText("")
    }
    return (
        <View>
            <ScrollView>
                <Text style={styles.text}>Textutils - App</Text>
                <TextInput style={styles.input} placeholder='Enter Your text here' numberOfLines={5}
                    multiline={true}
                    onChangeText={handleChange}
                    value={text}
                />

                <TouchableOpacity
                    onPress={handleUpper}
                    style={[styles.btn, styles.btn1]}>
                    <Text style={styles.btnText}>Upper Case</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleLower}
                    style={[styles.btn, styles.btn2]}>
                    <Text style={styles.btnText}>Lower Case</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={firstUpperLetter}
                    style={[styles.btn, styles.btn3]}>
                    <Text >First Letter Upper</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleClear}
                    style={[styles.btn, styles.btn4]}>
                    <Text style={styles.btnText} >Clear</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "grey",
        borderWidth: 2,
        margin: 10,
        height: 150,
        textAlignVertical: "top",
        borderRadius: 20,
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        margin: 20,
        fontFamily:"italic"
    },
    btn: {
        flex:1,
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
        fontSize: 20
    },
    btnText: { color: "white" },
    btn1: { backgroundColor: 'blue' },
    btn2: { backgroundColor: "green", },
    btn3: { backgroundColor: "yellow" },
    btn4: { backgroundColor: "red" }
})

export default Home
