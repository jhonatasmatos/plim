import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Picker as Selected } from '@react-native-community/picker';

export const Container = styled.View`
  flex: 1;
  background-color: #E5E5E5;
`

export const ContainerText = styled.View`
  margin-top: 32px;
  padding: 0 35px;
`

export const Text = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  padding-top: 16px;
`

export const ContainerInput = styled.View`
  margin-top: 16px;
  padding: 0 35px;
`

export const InputText = styled.TextInput`
  font-size: 16px;
  text-align: right;
  padding: 0 10px;
  
  border-bottom-width: 1px;
`

export const ContainerPicker = styled.View`
  margin: 5px 35px 0px;

  border-bottom-width: 1px;
`

export const Picker = styled(Selected)`
  border: 1px solid;
`

export const TextPercent = styled.Text`
  font-size: 14px;
  text-align: right;

  padding: 4px 35px;
`

export const ContainerAttention = styled.View`
  margin: 32px 42px;

  padding-left: 10px;

  align-items: center;
  justify-content: center;

  width: 280px;

  border-left-width: 2px;
  border-color:  #F70F5D;
`

export const TextAttention = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
`

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