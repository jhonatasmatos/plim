import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  padding-top: 72px;

  background-color: #E5E5E5;
`;

export const ContainerInput = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 26px 18px;
`;


export const Input = styled.TextInput`
  width: 360px;
  height: 52px;
  font-size: 16px;
  margin-top: 14px;
  padding-top: 22px;
  
  border-bottom-width: 1px;
`;

export const ExpirationInput = styled.TextInput`
  width: 150px;
  font-size: 16px;
  margin-top: 14px;
  padding-top: 22px;
  
  border-bottom-width: 1px;
`;

export const CvcInput = styled.TextInput`
  width: 150px;
  font-size: 16px;
  margin-top: 14px;
  padding-top: 22px;
  
  border-bottom-width: 1px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;


  position: absolute;
  bottom: 26px;
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

export const ButtonFinish = styled(RectButton)`
  width: 152px;
  height: 54px;
  border-radius: 14px;

  justify-content: center;
  align-items: center;

  background-color: #20187D;
`;

export const ButtonTextFinish = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #fff;
`;