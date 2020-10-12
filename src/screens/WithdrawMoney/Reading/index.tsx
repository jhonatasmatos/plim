import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Title,
  Text,
  ContainerButton,
  ButtonGoBack,
  ButtonTextGoBack,
  ButtonConfirm,
  ButtonTextConfirm
} from './styles';

import Header from '../../../components/Header';

const Reading: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack= useCallback(
    () => {
      navigation.goBack();
    },
    [navigation]
  );

  const handleConfirm = useCallback(
    () => {
      navigation.navigate('PixId');
    },
    [navigation]
  );

  return(
    <>
      <Header title='Finalizar solicitação e sacar' />
      <Container>
        <Title>Leia atentamente</Title>
        <Text>
          Deseja fazer o saque agora mesmo? A solicitação atual será finalizada e uma nova solicitação já poderá ser feita.
        </Text>

        <ContainerButton>
          <ButtonGoBack onPress={handleGoBack}>
            <ButtonTextGoBack>
              VOLTAR
            </ButtonTextGoBack>
          </ButtonGoBack>

          <ButtonConfirm onPress={handleConfirm}>
            <ButtonTextConfirm>
              CONFIRMAR
            </ButtonTextConfirm>
          </ButtonConfirm>
        </ContainerButton>
      </Container>
    </>
  );
}

export default Reading;