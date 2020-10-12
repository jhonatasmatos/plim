import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  background-color: #E5E5E5;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;

  padding: 36px 210px 26px 42px;
`;

export const Link= styled.TouchableOpacity`
`;

export const LinkText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;

  padding: 16px 36px 26px 170px;

  color: #20187D;
`;

export const Chart = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 70px;

  margin-bottom: 36px;

  background-color: #aa00aa;
`;

export const CompanyInfo= styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 6px 28px;
`;

export const Label= styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
`;

export const CompanyAmount = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;

export const CompanyInstallment = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;

export const ContainerButton = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 26px;
`;

export const ButtonCancel = styled(RectButton)`
  width: 330px;
  height: 54px;
  border-radius: 14px;

  margin-bottom: 12px;

  justify-content: center;
  align-items: center;

  background-color: #FFEDF3;
`;

export const ButtonTextCancel = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #F70F5D;
`;

export const ButtonFinish = styled(RectButton)`
  width: 330px;
  height: 54px;
  border-radius: 14px;

  justify-content: center;
  align-items: center;

  background-color: #20187D;
`;

export const ButtonTextFinish = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #fff;
`;