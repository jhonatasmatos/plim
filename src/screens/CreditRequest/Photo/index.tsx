import React, { useCallback } from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { 
  Container,
  Title,
  Text,
  ContainerImage,
  ContainerSubmitImage,
  TextSubmitImage,
  ContainerButton,
  ButtonGoBack,
  ButtonTextGoBack,
  ButtonContinue,
  ButtonTextContinue 
} from './styles';

import Header from '../../../components/Header';

const Photo: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack= useCallback(
    () => {
      navigation.goBack();
    },
    [navigation]
  );

  const handleContinue = useCallback(
    () => {
      navigation.navigate('ConfirmInfos');
    },
    [navigation]
  );

  return(
    <>
      <Header title='Solicitação de micro credito' />
      <Container>
        <Title>Envie aqui uma foto que remeta ao seu negócio.</Title>
        <Text>exemplo: logo, fachada, etc</Text>

        <ContainerImage>
          <Icon name='image' size={52} />
        </ContainerImage>

        <ContainerSubmitImage>
          <Icon name='camera' size={46} />
          <TextSubmitImage>Carregar imagem</TextSubmitImage>
        </ContainerSubmitImage>

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
}

export default Photo;