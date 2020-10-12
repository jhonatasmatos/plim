import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  background-color: #E5E5E5;
`;

export const Title = styled.Text`
  font-family: 'TitilliumWeb-Bold';
  font-size: 18px;

  padding-top: 90px;
  padding-left: 36px;
`;

export const ContainerButton = styled.View`
  align-items: center;
  justify-content: center;

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