import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Picker as Selected } from '@react-native-community/picker';

export const Container = styled.View`
  flex: 1;
`

export const ContainerText = styled.View`
  margin-top: 32px;
  padding: 0 35px;
`

export const Text = styled.Text`
  font-size: 18px;
  padding-top: 16px;
`

export const ContainerInput = styled.View`
  margin-top: 32px;
  padding: 0 35px;
`

export const InputText = styled.TextInput`
  font-size: 16px;
  text-align: right;
  padding: 0 10px;
  
  border-bottom-width: 1px;
`

export const ContainerPicker = styled.View`
  margin: 32px 35px 0px;

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
  margin: 32px 65px;

  align-items: center;
  justify-content: center;

  width: 280px; 
`

export const TextAttention = styled.Text`
  font-size: 16px;
`

export const ContainerButton = styled.View`
  margin: 32px 65px;

  align-items: center;
  justify-content: center;
`

export const Button = styled(RectButton)`
  width: 325px;
  height: 54px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;

  background-color: #F70F5D;
`

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: 700;

  color: #fff;
`