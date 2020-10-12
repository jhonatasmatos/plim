import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import { 
  Container,
  ContainerIcon,
  ContainerText,
  Title,
  Text,
  ContainerButton,
  ButtonDone,
  ButtonTextDone
} from './styles';

import check from '../../../assets/check.json';

const CongratsWithdraw: React.FC = () => {
  const navigation = useNavigation();

  const handleDone = useCallback(
    () => {
      navigation.navigate('Dashboard');
    },
    [navigation]
  );

  return(
    <Container>
      <ContainerIcon>
        <LottieView style={{ width: 250, height: 380 }} source={check} autoPlay loop={false} />
      </ContainerIcon>

      <ContainerText>
        <Title>PARABÉNS!!!</Title>
        <Text>
          Você acaba de impulsionar o seu negócio com o PLIM.
        </Text>
      </ContainerText>

      <ContainerButton>
        <ButtonDone onPress={handleDone}>
          <ButtonTextDone>
            PRONTO
          </ButtonTextDone>
        </ButtonDone>
      </ContainerButton>
    </Container>
  );
}

export default CongratsWithdraw;