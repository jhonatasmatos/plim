import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { 
  Container,
  ContainerImage,
  Title,
  Text,
  CompanyInfo,
  Label,
  CompanyAmount,
  CompanyInstallment,
  ContainerTextConfirm,
  TextConfirm,
  ContainerButton,
  ButtonGoBack,
  ButtonTextGoBack,
  ButtonContinue,
  ButtonTextContinue
} from './styles';

import Header from '../../../components/Header';

const ConfirmInfos: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack= useCallback(
    () => {
      navigation.goBack();
    },
    [navigation]
  );

  const handleContinue = useCallback(
    () => {
      navigation.navigate('CongratsRequest');
    },
    [navigation]
  );

  return(
    <>
      <Header title='Confira se está tudo certo' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <ContainerImage>
            <Icon name='image' size={52} />
          </ContainerImage>

          <Title>Dona Maria Cakes</Title>

          <Text>
            Olá, sou a Dona Maria. Faço bolos e tortas à pelo menos 30 anos, e sempre tive o sonho de abrir a minha confeitaria. Com R$ 5.000,00 isto será possível.  Conto com o seu impulsionamento, para estruturar a confeitaria Dona Maria Cakes.
          </Text>

          <CompanyInfo>
            <Label>Preciso de: </Label>
            <CompanyAmount>R$ 10.000,00</CompanyAmount>
          </CompanyInfo>

          <CompanyInfo>
            <Label>Forma de pagamento: </Label>
            <CompanyInstallment>10 vezes</CompanyInstallment>
          </CompanyInfo>

          <ContainerTextConfirm>
            <TextConfirm>
              Deseja confirmar a solicitação? 
            </TextConfirm>
          </ContainerTextConfirm>

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
      </ScrollView>
    </>
  );
}

export default ConfirmInfos;