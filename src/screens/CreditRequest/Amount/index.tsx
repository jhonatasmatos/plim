import React, { useState, useCallback } from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ContainerText,
  Text,
  ContainerInput,
  InputText,
  ContainerPicker,
  Picker,
  TextPercent,
  ContainerAttention,
  TextAttention,
  ContainerButton,
  ButtonGoBack,
  ButtonTextGoBack,
  ButtonContinue,
  ButtonTextContinue
} from './styles';

import Header from '../../../components/Header';

const Amount: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [selectedValue, setSelectedValue] = useState<string>('value_1');

  const navigation = useNavigation();

  const handleGoBack= useCallback(
    () => {
      navigation.goBack();
    },
    [navigation]
  );

  const handleContinue = useCallback(
    () => {
      navigation.navigate('Description');
    },
    [navigation]
  );

  return (
    <>
      <Header title='Solicitação de micro crédito' />
      <Container>
        <ContainerText>
          <Text>De quanto você precisa?</Text>
        </ContainerText>

        <ContainerInput>
          <InputText
            keyboardType='numeric'
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
        </ContainerInput>

        <ContainerText>
          <Text>Forma de pagamento:</Text>
        </ContainerText>

        <ContainerPicker>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue as string)}
          >
            <Picker.Item label="5 vezes de R$ 1.159,27" value="value_1" />
            <Picker.Item label="1 vezes de R$ 5.000,00" value="value_2" />
          </Picker>
        </ContainerPicker>
        <TextPercent>taxa de 3% a.m</TextPercent>

        <ContainerAttention>
          <TextAttention>
            Atenção!! Em caso de inadimplência juros de 0,03% ao dia + multa de 2%.
          </TextAttention>
        </ContainerAttention>

        <ContainerButton>
          <ButtonGoBack onPress={handleGoBack}>
            <ButtonTextGoBack>
              VOLTAR
            </ButtonTextGoBack>
          </ButtonGoBack>

          <ButtonContinue onPress={handleContinue}>
            <ButtonTextContinue>
              CONTINUAR
            </ButtonTextContinue>
          </ButtonContinue>
        </ContainerButton>
      </Container>
    </>
  );
};

export default Amount;
