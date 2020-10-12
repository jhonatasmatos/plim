import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView`
  flex: 1; 

  background-color: #E5E5E5;
`;

export const ContainerText = styled.View`
  margin-top: 120px;
  padding: 0 35px;
`;

export const Text = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  padding-top: 16px;
`;

export const ContainerInput = styled.View`
  margin-top: 76px;
  padding: 0 35px;
`;

export const InputText = styled.TextInput`
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

export const ButtonContinue = styled(RectButton)`
  width: 152px;
  height: 54px;
  border-radius: 14px;

  justify-content: center;
  align-items: center;

  background-color: #20187D;
`;

export const ButtonTextContinue = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #fff;
`;