import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView`
  flex: 1; 
  padding: 0 16px;
`

export const ContainerText = styled.View`
  margin-top: 120px;
  padding: 0 35px;
`

export const Text = styled.Text`
  font-size: 18px;
  padding-top: 16px;
`

export const ContainerInput = styled.View`
  margin-top: 76px;
  padding: 0 35px;
`

export const InputText = styled.TextInput`
  font-size: 16px;
  padding: 0 10px;
  
  border-bottom-width: 1px;
`

export const ContainerButton = styled.View`
  margin: 186px 65px;

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