import React, { useCallback } from 'react';
import {useNavigation} from '@react-navigation/native';

import { 
  Container,
  Title,
  Link,
  LinkText,
  Chart,
  CompanyInfo,
  Label,
  CompanyAmount,
  CompanyInstallment,
  ContainerButton,
  ButtonCancel,
  ButtonTextCancel,
  ButtonFinish,
  ButtonTextFinish
} from './styles';

import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const handleCancel = useCallback(
    () => {
      navigation.goBack();
    },
    [navigation]
  );

  const handleFinish = useCallback(
    () => {
      navigation.navigate('CancelReturn');
    },
    [navigation]
  );
  return(
    <>
      <Header title='Acompanhe sua solicitação' />
      <Container>
        <Title>Dona Maria Cakes</Title>
        <Link>
          <LinkText>EDITAR DADOS DO PEDIDO</LinkText>
        </Link>

        <Chart>

        </Chart>

        <CompanyInfo>
          <Label>Voce solicitou: </Label>
          <CompanyAmount>R$ 5.000,00</CompanyAmount>
        </CompanyInfo>

        <CompanyInfo>
          <Label>Total acumulado:</Label>
          <CompanyInstallment>R$ 3.000,00</CompanyInstallment>
        </CompanyInfo>

        <ContainerButton>
          <ButtonCancel onPress={handleCancel}>
            <ButtonTextCancel>
              CANCELAR E DEVOLVER
            </ButtonTextCancel>
          </ButtonCancel>

          <ButtonFinish onPress={handleFinish}>
            <ButtonTextFinish>
              FINALIZAR SOLICITAÇÃO E SACAR
            </ButtonTextFinish>
          </ButtonFinish>
        </ContainerButton>

      </Container>
    </>
  );
}

export default Dashboard;