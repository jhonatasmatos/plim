import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface Request {
  id: number;
  nomeNegocio: string;
  motivo: string;
  valor: number;
  urlImagem: string;
  quantidadeParcelasReembolso: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: #E5E5E5;
`;

export const List = styled(FlatList as new () => FlatList<Request>)`
  flex: 1;
  padding: 0 20px;
  margin-top: 16px;
`;

export const Company = styled.View`
  align-items: center;
  border-radius: 12px;
  margin-bottom: 16px;

  width: 360px;
  height: 360px;

  background-color: #F7F4F5;
`;

export const CompanyImageContainer = styled.View`
  width: 360px;
  height: 170px;
  border-radius: 12px;
`;

export const CompanyContent = styled.View`
  flex: 1;
  width: 360px;
`;

export const CompanyInfo= styled.View`
  width: 320px;
  flex-direction: row;
  justify-content: space-between;

  padding: 6px 24px;
`;

export const Label= styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;

export const CompanyTitle = styled.Text`
  font-family: 'TitilliumWeb-Bold';
  font-size: 18px;

  padding: 10px 180px 7px 18px;
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
  width: 300px;

  padding-bottom: 12px;
  flex-direction: row;
`;

export const ButtonViewMore = styled(RectButton)`
  width: 125px;
  height: 54px;
  border-radius: 14px;

  justify-content: center;
  align-items: center;

  background-color: #FFEDF3;
`;

export const ButtonTextViewMore = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #F70F5D;
`;

export const ButtonContribute = styled(RectButton)`
  width: 125px;
  height: 54px;
  border-radius: 14px;

  justify-content: center;
  align-items: center;

  margin-left: 10px;

  background-color: #20187D;
`;

export const ButtonTextContribute = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #EEEDFF;

`;
