import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { PieChart } from 'react-native-svg-charts'

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
    Total
} from './styles';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default function Reports() {
    const [confirmed, setConfirmed] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [total, setTotal] = useState(0);
    const [statesCases, setStatesCases] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

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
                setConfirmed(response.data.data.confirmed);
                setRecovered(response.data.data.recovered);
                setDeaths(response.data.data.deaths);
            });

        setTotal(confirmed + recovered + deaths);
    }

    async function loadStatesCases() {
        await api.get('/')
            .then((response) => {
                setStatesCases(response.data.data);
            });
    }

    const pieData = [
        {
            value: deaths,
            svg: {
                fill: '#c70202'
            },
            key: 1
        },
        {
            value: recovered,
            svg: {
                fill: '#4addf0'
            },
            key: 2
        },
        {
            value: confirmed,
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
                <Title>Covid-19 no Brasil</Title>
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
                        <IndicativeNumber>{confirmed}</IndicativeNumber>
                        <IndicativeTitle>Confirmados</IndicativeTitle>
                    </Confirmed>

                    <Recovered>
                        <IndicativeNumber>{recovered}</IndicativeNumber>
                        <IndicativeTitle>Curados</IndicativeTitle>
                    </Recovered>
                </Indicatives>
                <Indicatives>
                    <Deaths>
                        <IndicativeNumber>{deaths}</IndicativeNumber>
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
                        <State key={state.uid}>
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