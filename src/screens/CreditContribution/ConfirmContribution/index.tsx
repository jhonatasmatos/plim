import React, { useCallback } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';

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

const ConfirmContribution: React.FC = () => {

  const navigation = useNavigation();

  const handleGoBack= useCallback(
    () => {
      navigation.goBack();
    },
    [navigation]
  );

  const handleConfirm = useCallback(
    () => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: 'Congrats' },
          ],
        })
      );
    },
    [navigation]
  );

  return(
    <>
      <Header />
      <Container>
        <Title>Leia atentamente</Title>

        <Text>Lembre-se! Aqui você não perde o seu dinheiro. </Text>
        <Text>* O PLIM garante o pagamento de suas parcelas.</Text>
        <Text>* Em caso de cancelamento da solicitação de impulsionamento, o seu dinheiro será devolvido (sem correções).</Text>
      
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

export default ConfirmContribution;