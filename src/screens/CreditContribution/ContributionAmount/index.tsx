import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import formattedValue from '../../../utils/formatValue';

import { 
  Container,
  Title,
  Text,
  ContainerInput,
  Cifrao,
  Input,
  ContainerAmountButtons,
  AmountButton,
  AmountButtonText,
  CompanyInfo,
  Label,
  FutureAmount,
  FinalAmount,
  ContainerButton,
  ButtonGoBack,
  ButtonTextGoBack,
  ButtonPayment,
  ButtonTextPayment
} from './styles';

import Header from '../../../components/Header';

const ContributionAmount: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [totallValue, setTotalValue] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const navigation = useNavigation();

  const handleGoBack= useCallback(
    () => {
      navigation.goBack();
    },
    [navigation]
  );

  const handleContinue = useCallback(
    () => {
      navigation.navigate('CreditCardData');
    },
    [navigation]
  );

  const addValue = (value: number) => {
    const price = Number(amount) + value;
    const total = String(price)
    const final = Number(total) * 0.03;

    setAmount(total);
    setTotalValue(final + price);
    setFinalValue(final);
  }

  const calculateFinalValue = useCallback(
    () => {
      
    },
    [amount]
  );
  
  return(
    <>
    <Header />
    <Container>
      <Title>Com quanto você pretende contribuir para impulsionar este negócio?</Title>

      <Text>Você receberá seu dinheiro em 10 parcelas iguais com correção de 2% a.m</Text>
    
      <ContainerInput>
        <Cifrao>R$</Cifrao>
        <Input 
          keyboardType='numeric'
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
      </ContainerInput>
      
      <ContainerAmountButtons>
        <AmountButton onPress={() => addValue(10)}>
          <AmountButtonText>+10</AmountButtonText>
        </AmountButton>

        <AmountButton onPress={() => addValue(100)}>
          <AmountButtonText>+100</AmountButtonText>
        </AmountButton>

        <AmountButton onPress={() => addValue(500)}>
          <AmountButtonText>+500</AmountButtonText>
        </AmountButton>
      </ContainerAmountButtons>

      <Title>E o que eu ganho com isso?</Title>

      <CompanyInfo>
        <Label>Você irá receber:</Label>
        <FutureAmount>{formattedValue(totallValue)}</FutureAmount>
      </CompanyInfo>

      <CompanyInfo>
        <Label>Ganho total final:</Label>
        <FinalAmount>{formattedValue(finalValue)}</FinalAmount>
      </CompanyInfo>
      
      <ContainerButton>
        <ButtonGoBack onPress={handleGoBack}>
          <ButtonTextGoBack>
            VOLTAR
          </ButtonTextGoBack>
        </ButtonGoBack>

        <ButtonPayment onPress={handleContinue}>
          <ButtonTextPayment>
            CONTINUAR
          </ButtonTextPayment>
        </ButtonPayment>
      </ContainerButton>

    </Container>
    </>
  );
}

export default ContributionAmount;