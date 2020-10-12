import React, { useState, useCallback } from 'react';
import {useNavigation} from '@react-navigation/native';
import { Platform, ScrollView } from 'react-native';

import { 
  Container, 
  ContainerText, 
  Text, 
  ContainerInput, 
  InputText,
  ContainerButton,
  ButtonGoBack,
  ButtonTextGoBack,
  ButtonContinue,
  ButtonTextContinue 
} from './styles';

import Header from '../../../components/Header';

const Description: React.FC = () => {
  const [description, setDescription] = useState('');

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
      <Container 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContainerText>
            <Text>Conte aos seus impulsionadores porque você precisa desse dinheiro</Text>
          </ContainerText>

          <ContainerInput>
            <InputText 
              keyboardType='default'
              value={description}
              onChangeText={text => setDescription(text)}
              multiline
            />
          </ContainerInput>
        </ScrollView>
        
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
  )
}

export default Description