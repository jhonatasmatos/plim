import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerImageCompany = styled.View`
  height: 285px;
`;

export const ContainerDistance = styled.View`
  width: 60px;
  height: 28px;
  border-radius: 16px;
  margin-left: 26px;

  justify-content: center;
  align-items: center;

  top: 230px;
  position: absolute;

  background-color: #12C9AB;
`;

export const DistanceText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const ContentCompany = styled.View`
  height: 420px;
  width: 100%;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;

  padding: 0 26px;

  position: absolute;
  bottom: -25px;
  background-color: #EEEDFF;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;

  padding-top: 14px;
`;

export const Description = styled.Text`
  font-size: 16px;
  padding-top: 32px;
  padding-bottom: 46px;

  text-align: justify;
`;

export const CompanyInfo= styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 6px 24px;
`;

export const Label= styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const CompanyAmount = styled.Text`
  font-size: 16px;
`;

export const CompanyInstallment = styled.Text`
  font-size: 16px;
`;

export const ContainerButton = styled.View`
  padding-top: 36px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
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
  font-size: 16px;
  color: #F70F5D;
`;

export const ButtonContribute = styled(RectButton)`
  width: 152px;
  height: 54px;
  border-radius: 14px;

  justify-content: center;
  align-items: center;

  background-color: #20187D;
`;

export const ButtonTextContribute = styled.Text`
  font-size: 16px;
  color: #fff;
`;