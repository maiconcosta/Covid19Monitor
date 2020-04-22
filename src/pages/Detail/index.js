import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import {      
    Container,     
    Indicatives,
    Indicative,
    IndicativeNumber,
    IndicativeTitle   
} from './styles';

export default function Detail({ navigation }) {
    const route = useRoute();
    const { cases, deaths, suspects, state } = route.params.state;
    const total = cases + deaths + suspects;

    useEffect(() => {
        navigation.setOptions({ title: state })
    }, []);

    return (
        <Container>
            <Indicatives>
                <Indicative>
                    <IndicativeNumber>{cases}</IndicativeNumber>
                    <IndicativeTitle>Confirmados</IndicativeTitle>
                </Indicative>

                <Indicative>
                    <IndicativeNumber>{suspects}</IndicativeNumber>
                    <IndicativeTitle>Suspeitos</IndicativeTitle>
                </Indicative>
            </Indicatives>
            <Indicatives>
                <Indicative>
                    <IndicativeNumber>{deaths}</IndicativeNumber>
                    <IndicativeTitle>Óbitos</IndicativeTitle>
                </Indicative>
                <Indicative>
                    <IndicativeNumber>{total}</IndicativeNumber>
                    <IndicativeTitle>Total</IndicativeTitle>
                </Indicative>
            </Indicatives>
        </Container>
    );
}