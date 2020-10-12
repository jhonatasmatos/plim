import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import { Container, Text } from './styles';

import plimLogo from '../../assets/plim-logo.png';

const Splash: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('First');
    }, 2000);
    return () => clearTimeout(timer);
  },[])

  return(
    <Container>
      <Image
        source={plimLogo}
        style={{ width: 150, height: 250 }}
        resizeMode='stretch'
      />

      <Text>Impulsionando grandes ideias</Text>
    </Container>
  );
}

export default Splash;