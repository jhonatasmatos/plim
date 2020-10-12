import React, { useCallback } from 'react';
import {useNavigation} from '@react-navigation/native';
import { PieChart } from 'react-native-svg-charts';

import { 
  Container,
  Title,
  Link,
  LinkText,
  ChartContainer,
  CompanyInfo,
  Label,
  RequestedAmount,
  TotalAmount,
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
      navigation.navigate('CancelReturn');
    },
    [navigation]
  );

  const handleFinish = useCallback(
    () => {
      navigation.navigate('Reading');
    },
    [navigation]
  );

  const data = [50, 20]

  const randomColor = () => ('#' + ((Math.random() * 333) << 0).toString() + '86ddd4').slice(0, 7)

  const pieData = data
      .filter((value) => value > 0)
      .map((value, index) => ({
          value,
          svg: {
              fill: randomColor(),
              onPress: () => console.log('press', index),
          },
          key: `pie-${index}`,
      }))

  return(
    <>
      <Header title='Acompanhe sua solicitação' />
      <Container>
        <Title>Dona Maria Cakes</Title>
        <Link>
          <LinkText>EDITAR DADOS DO PEDIDO</LinkText>
        </Link>

        <ChartContainer>
          <PieChart style={{ height: 170 }} data={pieData} />
        </ChartContainer>

        <CompanyInfo>
          <Label>Voce solicitou: </Label>
          <RequestedAmount>R$ 5.000,00</RequestedAmount>
        </CompanyInfo>

        <CompanyInfo>
          <Label>Total acumulado:</Label>
          <TotalAmount>R$ 3.000,00</TotalAmount>
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