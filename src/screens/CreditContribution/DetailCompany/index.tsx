import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import { 
  Container,
  ContainerImageCompany,
  ContainerDistance,
  DistanceText,
  ContentCompany,
  Title,
  Description,
  CompanyInfo,
  Label,
  CompanyAmount,
  CompanyInstallment,
  ContainerButton,
  ButtonGoBack,
  ButtonTextGoBack,
  ButtonContribute,
  ButtonTextContribute  
} from './styles';

import Header from '../../../components/Header';

const DetailCompany: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack= useCallback(
    () => {
      navigation.goBack();
    },
    [navigation]
  );

  const handleContribute = useCallback(
    () => {
      navigation.navigate('ContributionAmount');
    },
    [navigation]
  );

  return(
    <Container>
      <Header />

      <ContainerImageCompany>
        <Image
          style={
            { width: '100%', height: '100%' }
          }
          source={{ uri: 'https://i.pinimg.com/originals/68/a4/9c/68a49c29cf35874e07fb02d8a647bc35.jpg' }}
        />
      </ContainerImageCompany>

      <ContainerDistance>
        <DistanceText>1.4 km</DistanceText>
      </ContainerDistance>

      <ContentCompany>
        <Title>Mercado do bairro</Title>

        <Description>
          Olá, me chamo Cláudio e sou proprietário do Mercado do Bairro.  Com os aumentos dos custos e a redução de clientes durante a pandemia do Covid 19, o Mercado de Bairro precisa do seu impulsionamento.
        </Description>

        <CompanyInfo>
          <Label>Preciso em: </Label>
          <CompanyAmount>R$ 10.000,00</CompanyAmount>
        </CompanyInfo>

        <CompanyInfo>
          <Label>Pagarei em: </Label>
          <CompanyInstallment>10 vezes</CompanyInstallment>
        </CompanyInfo>

        <ContainerButton>
          <ButtonGoBack onPress={handleGoBack}>
            <ButtonTextGoBack>
              VOLTAR
            </ButtonTextGoBack>
          </ButtonGoBack>

          <ButtonContribute onPress={handleContribute}>
            <ButtonTextContribute>
              CONTRIBUA
            </ButtonTextContribute>
          </ButtonContribute>
        </ContainerButton>

      </ContentCompany>
    </Container>
  );
}

export default DetailCompany;