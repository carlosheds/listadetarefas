import { React, useState  } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./styles";

export default function Detalhes({navigation,route}, props) {
    const[descricaoEditavel, setDescricaoEditavel] = useState(route.params.descricao)
    const idTarefa = route.params.id;

    function editTarefa(descricao, id) {
        database.collection("TarefaBD").doc(id).update({
            descricao: descricaoEditavel,
        });
        navigation.navigate("Tarefas")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Atualizar Tarefa</Text>
            <TextInput
                style={styles.textoInput} 
                onChangeText={setDescricaoEditavel}
                value={descricaoEditavel}
            />
            <TouchableOpacity
                style={styles.botaoSalvar}
                onPress={() => {editTarefa(descricaoEditavel,idTarefa)}}
            >
                <Text style={styles.iconeSalvar}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}