import { React, useState, useEffect  } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import database from "../../config/firebaseconfig";
import styles from "./styles"
export default function Tarefa({navigation}) {
    const[tarefa, setTarefa] = useState([]);
    
    function deletarTarefa(id) {
        database.collection("TarefaBD").doc(id).delete();
    }

    useEffect(() => {
        database.collection("TarefaBD").onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({...doc.data(),id:doc.id})
            })
            setTarefa(list);
        })
    },[]);


    return(
        <View style={styles.container}> 
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={tarefa}

                renderItem={({item}) => {
                    return(
                        <View style={styles.styleTarefa}>
                            <TouchableOpacity
                                style={styles.deleteTarefa}
                                onPress={() => {deletarTarefa(item.id)}}
                            >
                                <FontAwesome
                                    name="trash"
                                    size={23}
                                    color="#f92e6a"
                                ></FontAwesome>
                            </TouchableOpacity>
                            <Text
                                style={styles.descricaoTarefa}
                                onPress={() => {
                                    navigation.navigate("Detalhes",{id:item.id, descricao:item.descricao})
                                }}
                            >
                                {item.descricao}
                            </Text>
                        </View>
                    )
                }}
            />
            <TouchableOpacity 
            onPress={() => navigation.navigate("Novas Tarefas")}
            style={styles.botaoNovaTarefa}>
                <Text style={styles.iconeBotao}>+</Text>
            </TouchableOpacity>
        </View>
    )
}