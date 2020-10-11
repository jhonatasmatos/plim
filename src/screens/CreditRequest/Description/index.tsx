import React, { useState } from 'react';
import { Platform, ScrollView } from 'react-native';

import { 
  Container, 
  ContainerText, 
  Text, 
  ContainerInput, 
  InputText,
  ContainerButton,
  Button,
  TextButton 
} from './styles';

import Header from '../../../components/Header';

const Description: React.FC = () => {
  const [description, setDescription] = useState('');

  return (
    <Container 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ContainerText>
          <Text>Conte para nos e para seus contribuidores o que voce fara com esse dinheiro</Text>
        </ContainerText>

        <ContainerInput>
          <InputText 
            keyboardType='default'
            value={description}
            onChangeText={text => setDescription(text)}
            multiline
          />
        </ContainerInput>

        <ContainerButton>
          <Button>
            <TextButton>Continuar solicitação</TextButton>
          </Button>
        </ContainerButton>
      </ScrollView>
    </Container>
  )
}

export default Description