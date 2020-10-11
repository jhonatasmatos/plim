import React, { useState } from 'react';

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
  Button,
  TextButton 
} from './styles';

import Header from '../../components/Header';

const Home: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <Container>
      <Header />

      <ContainerText>
        <Text>De quanto você precisa?</Text>
      </ContainerText>

      <ContainerInput>
        <InputText 
          keyboardType='numeric'
          value={amount}
         onChangeText={text => setAmount(text)}
        />
      </ContainerInput>

      <ContainerText>
        <Text>Prentende pagar em quantas vezes?</Text>
      </ContainerText>

      <ContainerPicker>
        <Picker 
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="5 vezes de R$ 1.159,27" value="value_1" />
          <Picker.Item label="1 vezes de R$ 5.000,00" value="value_2" />
        </Picker>
      </ContainerPicker>
      <TextPercent>taxa de 3% a.m</TextPercent>

      <ContainerAttention>
        <TextAttention>Atençao!! Toda e qualquer inadimplencia sera cobrada juros a parte.</TextAttention>
      </ContainerAttention>

      <ContainerButton>
        <Button>
          <TextButton>Continuar solicitação</TextButton>
        </Button>
      </ContainerButton>
    </Container>
  )
}

export default Home