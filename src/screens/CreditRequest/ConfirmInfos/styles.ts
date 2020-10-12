import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  /* align-items: center; */

  background-color: #E5E5E5;
`;

export const ContainerImage = styled.View`
  width: 360px;
  height: 180px;
  border-radius: 16px;

  justify-content: center;
  align-items: center;

  margin-top: 32px;
  margin: 0px 26px;

  background-color: #d3d3d3;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 18px;

  padding: 10px 210px 10px 24px;
`;

export const Text = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;

  padding: 0px 26px;
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

export const ContainerTextConfirm = styled.View`
  margin: 32px 42px;

  padding-left: 10px;

  align-items: center;
  justify-content: center;

  width: 280px;

  border-left-width: 2px;
  border-color:  #F70F5D;
`;

export const TextConfirm = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;

  margin: 26px 0px;
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
