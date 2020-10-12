import React, { useState, useCallback } from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ContainerText,
  Text,
  ContainerInput,
  Cifrao,
  Input,
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
          <Cifrao>R$</Cifrao>
          <Input 
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
            <Picker.Item label="1 x R$ 5.155,00" value="value_1" />
            <Picker.Item label="2 x R$ 2.652,50" value="value_2" />
            <Picker.Item label="3 x R$ 1.818,33" value="value_3" />
            <Picker.Item label="4 x R$ 1.401,25" value="value_4" />
            <Picker.Item label="5 x R$ 1.151,00" value="value_5" />
            <Picker.Item label="6 x R$ 984,16" value="value_6" />
            <Picker.Item label="7 x R$ 865,00" value="value_7" />
            <Picker.Item label="8 x R$ 775,62" value="value_8" />
            <Picker.Item label="9 x R$ 706,11" value="value_9" />
            <Picker.Item label="10 x R$ 650,50" value="value_10" />
            <Picker.Item label="11 x R$ 605,00" value="value_11" />
            <Picker.Item label="12 x R$ 567,08" value="value_12" />
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
