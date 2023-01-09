import React, { useState } from "react";

import {
    Text,
    Image,
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import Home from '../Home'

import api from "../../service/Api/api";

export function Login() {

    const [id, setId] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [lastLoginDate, setLastLoginDate] = useState("")

    const [users, setUsers] = useState("")

    const navigation = useNavigation();

    const handleLogin = async (e) => {
        // e.preventDefault()
        const user = {
            id,
            login,
            password,
            lastLoginDate
        }

        api
            .get("api/users")
            .then((response) => setUsers(response.data))

        for (let u in users) {
            const verificacao = false

            if (users[u].login == user.login) {
                console.log("O usuario existe")
                if (users[u].password == user.password) {
                    console.log("As senhas coincidem")
                    verificacao == true
                    navigation.navigate(Home) 
                    
                } 
            }
        } if (verificacao = false) {
            alert("Login ou senha incorretos")
        }
    }


    return (
        <>
            <SafeAreaView>
                <View style={styles.logo}>
                <Text style={styles.logo}>Desafio Neki</Text>
                </View>

                <View style={styles.input}>
                    <TextInput
                        placeholder="Digite seu username"
                        style={styles.inputLogin}
                        onChangeText={setLogin}
                        value={login}
                    />
                    <TextInput
                        placeholder="Digite sua senha"
                        style={styles.inputLogin}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        value={password}
                    />
                </View>

                <TouchableOpacity
                    style={styles.botaoEntrar}
                    activeOpacity={0.7}
                    onPress={() => handleLogin()}
                >
                    <Text style={styles.textEntrar}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.cadastro}>
                    <Text style={styles.cadastroText__normal}>Não tem uma conta?</Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate("Cadastro")}
                    >
                        <Text style={styles.cadastroTexto__green}>CRIAR CONTA</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>
    )
}