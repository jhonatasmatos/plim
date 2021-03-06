import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding-top: 76px;

  background-color: #E5E5E5;
`;

export const Title = styled.Text`
  font-family: 'TitilliumWeb-Bold';
  font-size: 24px;

  padding-left: 36px;
`;

export const Text = styled.Text`
  width: 340px;

  font-family: 'Poppins-Regular';
  font-size: 16px;
  margin-top: 16px;

  padding-left: 36px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;

  position: absolute;
  bottom: 36px;
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