import React, { useState } from "react";

import {
    Text,
    Image,
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";

import { styles } from "./styles";

import api from "../../service/Api/api";

export function Cadastro({ navigation }) {


    const [id, setId] = useState("")
    const [login, setLogin] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [password, setPassword] = useState("")
    const [lastLoginDate, setLastLoginDate] = useState("")

    const [users, setUsers] = useState("")

    const handleSingUp = async (e) => {
        // e.preventDefault()
        const user = {
            id,
            login,
            password,
            lastLoginDate
        }

        api
            .post("api/users", {
                login: login,
                password: password,
            })
            .then((response) => setUsers(response.data))
            .catch((err) => {
                console.error("ocorreu um erro " + err);
            })

        for (let u in users) {

            if (users[u].login == user.login) {
                alert("Usuario em uso")
                break
            }
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
                    <TextInput
                        placeholder="Confirme sua senha"
                        style={styles.inputLogin}
                        secureTextEntry={true}
                        onChangeText={setConfirmPassword}
                        value={password}
                    />

                </View>

                <TouchableOpacity
                    style={styles.botaoCadastro}
                    activeOpacity={0.7}
                    onPress={() => handleSingUp()}
                >
                    <Text style={styles.textCadastro}>Cadastrar</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    )
}
