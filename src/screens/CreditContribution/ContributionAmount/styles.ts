import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #E5E5E5;
`;

export const Title = styled.Text`
  width: 400px;

  font-family: 'TitilliumWeb-Bold';
  font-size: 22px;

  padding: 0px 66px 18px 32px;
`;

export const Text = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  padding: 14px 32px;
`;

export const ContainerInput = styled.View`
  width: 340px;
  height: 52px;
  flex-direction: row;
  justify-content: space-between;
  
  border-bottom-width: 1px;
`;

export const Cifrao = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;

  padding: 20px 0px 0px 26px;
`;

export const Input = styled.TextInput`
  width: 250px;
  height: 52px;
  
  font-family: 'Poppins-Regular';
  font-size: 16px;
  text-align: right;
  justify-content: center;

  margin-top: 10px;
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
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #fff;
`;

export const CompanyInfo= styled.View`
  width: 340px;
  flex-direction: row;
  justify-content: space-between;

  padding: 12px 24px;
`;

export const Label= styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;

export const FutureAmount = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
`;

export const FinalAmount = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
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
  font-family: 'Poppins-SemiBold';
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
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #fff;
`;