import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  ContainerInput,  
  Input,
  ExpirationInput,
  CvcInput,
  ContainerButton,
  ButtonGoBack,
  ButtonTextGoBack,
  ButtonFinish,
  ButtonTextFinish 
} from './styles';

import Header from '../../../components/Header';

const CreditCardData: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCvc] = useState('');

  const navigation = useNavigation();

  const handleGoBack= useCallback(
    () => {
      navigation.goBack();
    },
    [navigation]
  );

  const handleFinish = useCallback(
    () => {
      navigation.navigate('ConfirmContribution');
    },
    [navigation]
  );

  return(
    <>
    <Header />
    <Container>
      <Input
        placeholder='Número do cartão' 
        keyboardType='numeric'
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />

      <Input
        placeholder='Nome do titular' 
        keyboardType='default'
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <ContainerInput>
        <ExpirationInput 
          placeholder='Expiração'
          keyboardType='numeric'
          value={expirationDate}
          onChangeText={(text) => setExpirationDate(text)}
        />

        <CvcInput
          placeholder='cvc'
          keyboardType='numeric'
          value={cvc}
          onChangeText={(text) => setCvc(text)}
        />
      </ContainerInput>

      <ContainerButton>
        <ButtonGoBack onPress={handleGoBack}>
          <ButtonTextGoBack>
            VOLTAR
          </ButtonTextGoBack>
        </ButtonGoBack>

        <ButtonFinish onPress={handleFinish}>
          <ButtonTextFinish>
            FINALIZAR
          </ButtonTextFinish>
        </ButtonFinish>
      </ContainerButton>
    </Container>
    </>
  );
}

export default CreditCardData;