import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  align-items: center;

  background-color: #E5E5E5;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 18px;

  margin-top: 24px;

  padding: 10px 26px 0px 26px;
`;

export const Text = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;

  padding: 0px 160px 0px 26px;
`;

export const ContainerImage = styled.View`
  width: 360px;
  height: 180px;
  border-radius: 16px;

  justify-content: center;
  align-items: center;

  margin-top: 32px;

  background-color: #d3d3d3;
`;

export const ContainerSubmitImage = styled.TouchableOpacity`
  width: 120px;
  height: 120px;
  border-radius: 16px;

  justify-content: center;
  align-items: center;

  margin-top: 24px;

  background-color: #FFEDF3;
`;

export const TextSubmitImage = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  text-align: center;
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