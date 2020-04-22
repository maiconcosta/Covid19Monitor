import styled from "styled-components";
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
        background: #fafafa;
        flex: 1;     
        padding-top: ${Constants.statusBarHeight}px;
`;

export const UpdatedData = styled.Text`
        font-size: 10px;
        color: #ccc;
        margin-bottom: 7px;
        text-align: center;
        font-weight: bold;
`;

export const ChartBox = styled.View`
        background: #fff;
        width: 290px;
        height: 290px;
        margin: 0 auto;
        margin-bottom: 7px;      
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        shadow-color: #000;      
        shadow-opacity: 0.10;
        shadow-radius: 2.22px;
        elevation: 1;
`;

export const Indicatives = styled.View`       
        flex-direction: row;   
        align-items: center;
        justify-content: center;
`;

export const Confirmed = styled.View`
        background-color: #f28d0a;        
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
        elevation: 3;        
`;

export const Recovered = styled.View`
        background-color: #4addf0;        
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
        elevation: 3;
`;

export const Deaths = styled.View`
        background-color: #c70202;        
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
        elevation: 3;
`;

export const Total = styled.View`
        background-color: #999;        
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
        elevation: 3;
`;

export const IndicativeNumber = styled.Text`       
       font-size: 20px;
       font-weight: bold;
       color: #fff;
`;

export const IndicativeTitle = styled.Text`   
        color: #fff;       
`;

export const Title = styled.Text`   
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;  
        font-size: 18px;
`;

export const States = styled.View`
        margin: 10px 5px;
`;

export const State = styled.TouchableOpacity`
        padding: 10px 20px;
        margin: 5px;
        border-radius: 5px;
        shadow-color: #000;       
        shadow-opacity: 0.10;
        shadow-radius: 2.22px;
        elevation: 1;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
       
`;

export const StateName = styled.Text`
        font-size: 18px;         
`;

export const StateCases = styled.Text`
        font-size: 18px;
        font-weight: bold;     
`;

export const NameAndCase = styled.View`       
       margin-left: 10px; 
`;

export const FlagAndCase = styled.View`
        flex-direction: row;
        align-items: center;

`;

export const Flag = styled.Image`
       width: 50px;
       height: 50px;
       border-radius: 50px;
`;

