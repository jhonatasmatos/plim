import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  InputText,
  ContainerButton,
  ButtonGoBack,
  ButtonTextGoBack,
  ButtonConfirm,
  ButtonTextConfirm
} from './styles';

import Header from '../../../components/Header';

const PixId: React.FC = () => {
  const [pixId, setPixId] = useState('');
  const navigation = useNavigation();

  const handleGoBack= useCallback(
    () => {
      navigation.goBack();
    },
    [navigation]
  );

  const handleConfirm = useCallback(
    () => {
      navigation.navigate('CongratsWithdraw');
    },
    [navigation]
  );

  return(
    <>
      <Header title='Finalizar solicitação e sacar' />
      <Container>
        <InputText
          placeholder='Seu pix ID aqui'
          keyboardType='numeric'
          value={pixId}
          onChangeText={(text) => setPixId(text)}
        />

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

export default PixId;