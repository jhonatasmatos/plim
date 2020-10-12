import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: 'TitilliumWeb-Bold';
  font-size: 22px;

  padding: 32px 0px 0px 32px;
`;

export const Text = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;

  padding: 12px 0px 72px 32px;
`;

export const ContainerInput = styled.View`
  width: 340px;
  height: 54px;
  flex-direction: row;

  margin: 4px 26px;
  
  border-bottom-width: 1px;
`;

export const Input = styled.TextInput`
  width: 250px;
  height: 52px;
  
  font-family: 'Poppins-Regular';
  font-size: 16px;
  justify-content: center;

  margin-top: 10px;
`;

export const ContainerButton = styled.View`
  margin: 0px 26px;

  position: absolute;
  bottom: 36px;
`;

export const Button = styled(RectButton)`
  width: 350px;
  height: 54px;
  border-radius: 16px;

  align-items: center;
  justify-content: center;

  background-color: #20187D;
`;


export const ButtonText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;

  color: #fff;
`;