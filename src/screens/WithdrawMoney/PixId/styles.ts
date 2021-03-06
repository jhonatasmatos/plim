import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: #E5E5E5;
`;

export const InputText = styled.TextInput`
  width: 320px;

  font-size: 16px;
  padding: 0 10px;
  
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

export const ButtonConfirm = styled(RectButton)`
  width: 152px;
  height: 54px;
  border-radius: 14px;

  justify-content: center;
  align-items: center;

  background-color: #20187D;
`;

export const ButtonTextConfirm = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #fff;
`;