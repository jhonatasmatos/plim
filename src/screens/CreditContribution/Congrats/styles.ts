import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
`;

export const ContainerIcon = styled.View`
  width: 350px;
  height: 250px;

  align-items: center;
  justify-content: center;
`;

export const ContainerText = styled.View`
  flex: 1;

  width: 320px;
`;

export const Title = styled.Text`
  font-family: 'TitilliumWeb-Bold';
  font-size: 24px;
`;

export const Text = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  padding-top: 14px;
`;

export const ContainerButton = styled.View`
  flex: 1;

  position: absolute;
  bottom: 36px;
`;

export const ButtonDone = styled(RectButton)`
  width: 330px;
  height: 54px;
  border-radius: 14px;

  align-items: center;
  justify-content: center;

  margin-top: 54px;

  background-color: #20187D;
`;

export const ButtonTextDone = styled.Text`
  color: #fff;

  font-family: 'Poppins-SemiBold';
  font-size: 16px;
`;
