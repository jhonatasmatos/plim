import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Title,
  Text,
  ContainerInput,
  Input,
  ContainerButton,
  Button,
  ButtonText
} from './styles';

const Profile: React.FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');

  const navigation = useNavigation();

  const handleContinue = useCallback(
    () => {
      navigation.navigate('Historic');
    },
    [navigation]
  );

  return(
    <Container>
      <Title>Preencha seu perfil </Title>
      <Text>Para finalizarmos seu cadastro</Text>

      <ContainerInput>
        <Input
          placeholder='Nome completo' 
          keyboardType='default'
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input
          placeholder='CPF' 
          keyboardType='numeric'
          value={cpf}
          onChangeText={(text) => setCpf(text)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input
          placeholder='CNPJ' 
          keyboardType='numeric'
          value={cnpj}
          onChangeText={(text) => setCnpj(text)}
        />
      </ContainerInput>

      <ContainerButton>
        <Button onPress={handleContinue}>
          <ButtonText>CONTINUAR CADASTRO</ButtonText>
        </Button>
      </ContainerButton>

    </Container>
  );
}

export default Profile;