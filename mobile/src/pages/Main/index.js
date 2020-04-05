import React from 'react';
import { Text, View, Touchable, FlatList,TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Main(){

    const navigate = useNavigation();

    function navigateToEasyLevel(){
        navigate.navigate('Easy');
    }

    function navigateToMediumLevel(){
        navigate.navigate('Easy');
    }

    function navigateToHardLevel(){
        navigate.navigate('Easy');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.selectLevelText}>Selecione o nivel</Text>
            <View style={styles.levels}>
                <TouchableOpacity style={styles.levelButton} onPress={navigateToEasyLevel}>
                    <Text style={styles.levelText}>Fácil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.levelButton} onPress={navigateToMediumLevel}>
                    <Text style={styles.levelText}>Médio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.levelButton} onPress={navigateToHardLevel}>
                    <Text style={styles.levelText}>Difícil</Text>
                </TouchableOpacity>                
            </View>
        </View>
    );
}