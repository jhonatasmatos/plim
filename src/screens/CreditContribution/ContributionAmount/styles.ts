import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  width: 400px;
  font-size: 22px;
  padding: 18px 66px 18px 32px;
`;

export const Text = styled.Text`
  font-size: 16px;
  padding: 14px 32px;
`;

export const Input = styled.TextInput`
  width: 340px;
  font-size: 16px;
  text-align: right;
  padding: 10px 10px;
  
  border-bottom-width: 1px;
`;

export const ContainerAmountButtons = styled.View`
  width: 250px;
  margin: 12px 26px;

  flex-direction: row;
  justify-content: space-around;
`;

export const AmountButton = styled(RectButton)`
  width: 60px;
  height: 26px;

  justify-content: center;
  align-items: center;

  background: #12C9AB;
  border-radius: 16px;
`;

export const AmountButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const CompanyInfo= styled.View`
  width: 340px;
  flex-direction: row;
  justify-content: space-between;

  padding: 16px 24px;
`;

export const Label= styled.Text`
  font-size: 16px;
`;

export const FutureAmount = styled.Text`
  font-size: 16px;

  font-weight: 700;
`;

export const FinalAmount = styled.Text`
  font-size: 16px;

  font-weight: 700;
`;

export const ContainerButton = styled.View`
  padding-top: 56px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonGoBack = styled(RectButton)`
  width: 152px;
  height: 54px;
  border-radius: 14px;

  justify-content: center;
  align-items: center;

  background-color: #FFEDF3;
`;

export const ButtonTextGoBack = styled.Text`
  font-size: 16px;
  color: #F70F5D;
`;

export const ButtonPayment = styled(RectButton)`
  width: 152px;
  height: 54px;
  border-radius: 14px;

  justify-content: center;
  align-items: center;

  background-color: #20187D;
`;

export const ButtonTextPayment = styled.Text`
  font-size: 16px;
  color: #fff;
`;