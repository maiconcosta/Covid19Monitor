import styled from "styled-components";
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
        background: #fafafa;
        flex: 1;     
        padding-top: ${Constants.statusBarHeight}px;
`;

export const Indicatives = styled.View`       
        flex-direction: row;   
        align-items: center;
        justify-content: center;
`;

export const Indicative = styled.View`          
        width: 140px;
        height: 140px;        
        padding: 10px;
        align-items: center;
        justify-content: center;
        margin: 5px;
        border-radius: 8px;
        shadow-color: #000;      
        shadow-opacity: 0.22;
        shadow-radius: 2.22px;
        elevation: 1;        
`;

export const IndicativeNumber = styled.Text`       
       font-size: 20px;
       font-weight: bold;
       color: #444;
`;

export const IndicativeTitle = styled.Text`   
        color: #444;       
`;