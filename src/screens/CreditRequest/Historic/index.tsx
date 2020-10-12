import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  Title, 
  ContainerButton,
  Button,
  ButtonText 
} from './styles';

import Header from '../../../components/Header';

const Historic: React.FC = () => {
  const navigation = useNavigation();

  const handleRequestBoost = useCallback(
    () => {
      navigation.navigate('Amount');
    },
    [navigation]
  );

  return(
    <>
      <Header title='Faça uma solicitação' />
      <Container>
        <Title>Histórico de solicitações</Title>
      </Container>

      <ContainerButton>
        <Button onPress={handleRequestBoost}>
          <ButtonText>SOLICITAR IMPULSIONAMENTO</ButtonText>
        </Button>
      </ContainerButton>
    </>
  );
}

export default Historic;