import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import {
  Container,
  Title,
  Text,
  Content,
  Description
} from './styles';

import rocket from '../../assets/rocket.png';
import construction from '../../assets/construction.png';

const First: React.FC = () => {
  const navigation = useNavigation();

  const handleBoost= useCallback(
    () => {
      navigation.navigate('List');
    },
    [navigation]
  );

  const handleReceiveBoost= useCallback(
    () => {
      navigation.navigate('License');
    },
    [navigation]
  );
  return(
    <Container>
      <Title>Seja bem-vindo ao PLIM!</Title>

      <Text>
        Aqui trazemos uma solução simples, para um problema bem complicado. Como podemos te ajudar?
      </Text>

      <Content onPress={handleBoost}>
        <Image
          source={rocket}
          style={{ width: 100, height: 100 }}
          resizeMode='stretch'
        />
        <Description>
          QUERO IMPULSIONAR NEGÓCIOS LOCAIS SEM RISCO
        </Description>
      </Content>

      <Content onPress={handleReceiveBoost}>
        <Image
          source={construction}
          style={{ width: 140, height: 140 }}
          resizeMode='stretch'
        />
        <Description>
          QUERO RECEBER UM IMPULSO NO MEU NEGÓCIO
        </Description>
      </Content>
    </Container>
  );
}

export default First;