import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        textAlign: "center",
        marginTop: 60,
        fontSize: 30,
        color: "#00A181"
    },
    imgLogo: {
        width: 400,
        height: 150,
    },
    entrar: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        margin: 25,
        marginTop: 80,
    },
    inputLogin: {
        backgroundColor: "#ffff",
        padding: "4%",
        borderRadius: 15,
        paddingLeft: "10%",
        margin: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    cadastroText: {
        marginLeft: 5,
        fontSize: 15,
    },
    botaoEntrar: {
        backgroundColor: "#00A181",
        padding: "4%",
        borderRadius: 15,
        marginHorizontal: 32,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    textEntrar: {
        textAlign: 'center',
        color: '#fff'
    },
    cadastro: {
        flexDirection: 'row',
        margin: 25,
        justifyContent: 'center',
    },
    cadastroText__normal: {
        marginLeft: 5,
        fontSize: 15,
    },
    cadastroTexto__green: {
        color: "#00A181",
        marginLeft: 5,
        fontSize: 15,
    }
})