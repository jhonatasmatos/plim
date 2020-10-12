import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { 
  Container,
  Title,
  Text,
  Link,
  LinkText,
  ContainerLicense,
  LicenseText,
  UploadButton,
  ContainerButton,
  Button,
  ButtonText
} from './styles';

const License: React.FC = () => {
  const navigation = useNavigation();

  const handleContinue = useCallback(
    () => {
      navigation.navigate('Profile');
    },
    [navigation]
  );

  return(
    <Container>
      <Title>O que eu preciso para solicitar um crédito no PLIM?</Title>

      <Text>
        Para estarmos convictos de que podemos confiar em você precisamos de 2 coisas. 
        Seu alvará de funcionamento e o certificado do curso online do SEBRAE de gestão financeira. 
        Caso não saiba que curso é esse, acesse 
        <Link>
          <LinkText>clicando aqui.</LinkText>
        </Link>.
      </Text>

      <ContainerLicense>
        <LicenseText>Alvará de funcionamento</LicenseText>
        <UploadButton>
          <Icon name='upload' size={25} />
        </UploadButton>
      </ContainerLicense>

      <ContainerButton>
        <Button onPress={handleContinue}>
          <ButtonText>CONTINUAR CADASTRO</ButtonText>
        </Button>
      </ContainerButton>
    </Container>
  );
}

export default License;