import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { PieChart } from 'react-native-svg-charts'
import { format, parseISO } from 'date-fns';

import api from '../../services/api';


import {
    ChartBox,
    Confirmed,
    Container,
    Deaths,
    Flag,
    FlagAndCase,
    Indicatives,
    IndicativeNumber,
    IndicativeTitle,
    NameAndCase,
    Recovered,
    States,
    State,
    StateCases,
    StateName,
    Title,
    Total,
    UpdatedData
} from './styles';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default function Reports({ navigation }) {
    const [confirmedCases, setConfirmedCases] = useState(0);
    const [recoveredCases, setRecoveredCases] = useState(0);
    const [deathsCases, setDeathsCases] = useState(0);
    const [total, setTotal] = useState(0);
    const [updatedAt, setUpdatedAt] = useState('');
    const [statesCases, setStatesCases] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    function navigateToDetail(state) {
        navigation.navigate('Detail', { state });
    }

    useEffect(() => {
        loadApiData();
    }, [])

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        loadApiData();
        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);

    async function loadApiData() {
        loadCases();
        loadStatesCases();
    }

    async function loadCases() {
        await api.get('brazil')
            .then((response) => {
                const { confirmed, recovered, deaths, updated_at } = response.data.data;
                const totalCases = confirmed + recovered + deaths;

                setConfirmedCases(confirmed);
                setRecoveredCases(recovered);
                setDeathsCases(deaths);
                setUpdatedAt(format(parseISO(updated_at), 'dd/MM/yyyy - hh:mm'));              

                setTotal(totalCases);
 
            });
    }

    async function loadStatesCases() {
        await api.get('/')
            .then((response) => {
                setStatesCases(response.data.data);
            });
    }

    const pieData = [
        {
            value: deathsCases,
            svg: {
                fill: '#c70202'
            },
            key: 1
        },
        {
            value: recoveredCases,
            svg: {
                fill: '#4addf0'
            },
            key: 2
        },
        {
            value: confirmedCases,
            svg: {
                fill: '#f28d0a'
            },
            key: 3
        },
    ];

    return (
        <Container>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh} />
                }>
                <UpdatedData>
                    Última atualização: {updatedAt}
                </UpdatedData>
                <ChartBox>
                    <PieChart
                        style={{
                            width: 200,
                            height: 200,
                            marginBottom: 10
                        }}
                        data={pieData}
                    />
                </ChartBox>

                <Indicatives>

                    <Confirmed>
                        <IndicativeNumber>{confirmedCases}</IndicativeNumber>
                        <IndicativeTitle>Confirmados</IndicativeTitle>
                    </Confirmed>

                    <Recovered>
                        <IndicativeNumber>{recoveredCases}</IndicativeNumber>
                        <IndicativeTitle>Curados</IndicativeTitle>
                    </Recovered>
                </Indicatives>
                <Indicatives>
                    <Deaths>
                        <IndicativeNumber>{deathsCases}</IndicativeNumber>
                        <IndicativeTitle>Óbitos</IndicativeTitle>
                    </Deaths>
                    <Total>
                        <IndicativeNumber>{total}</IndicativeNumber>
                        <IndicativeTitle>Total</IndicativeTitle>
                    </Total>
                </Indicatives>

                <States>
                    <Title>Casos por estado brasileiro</Title>
                    {statesCases.map(state => (
                        <State
                            key={state.uid}
                            onPress={() => navigateToDetail(state)}>
                            <FlagAndCase>
                                <Flag source={{
                                    uri: `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`,
                                }} />
                                <NameAndCase>
                                    <StateName>{state.state}</StateName>
                                    <StateCases>{state.cases}</StateCases>
                                </NameAndCase>
                            </FlagAndCase>

                            <MaterialIcons name="keyboard-arrow-right" size={32} color="#ccc" />
                        </State>
                    ))}
                </States>

            </ScrollView>
        </Container>
    );
}