import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';

import { 
  Container,
  Text,
  ContentText,
  ContainerButton,
  ButtonGoBack,
  ButtonTextGoBack,
  ButtonConfirm,
  ButtonTextConfirm 
} from './styles';

const CancelReturn: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack= useCallback(
    () => {
      navigation.goBack();
    },
    [navigation]
  );

  const handleConfirm = useCallback(
    () => {
      navigation.navigate('CongratsCancel');
    },
    [navigation]
  );

  return(
    <>
      <Header title='Cancelar e devolver' />
      <Container>
        <Text>
          Voce deseja realmente cancelar sua solicitação e devolver o dinheiro aos seus impulsionadores?
        </Text>

        <ContentText>
          Deseja realmente fazer o cancelamento de sua solicitação?
        </ContentText>

        <ContentText>
          * O PLIM irá devolver o dinheiro devidamente aos seus impulsionadores
        </ContentText>

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

export default CancelReturn;