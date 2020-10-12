import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';

import formattedValue from '../../../utils/formatValue';

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

import api from '../../../services/api';

interface Detail {
  id: number;
  nomeNegocio: string;
  motivo: string;
  valor: number;
  urlImagem: string;
  quantidadeParcelasReembolso: number;
}

interface Params {
  id: number;
}

const DetailCompany: React.FC = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Params;

  const [details, setDetails] = useState<Detail>({} as Detail);

  useEffect(() => {
    const getRequests = async () => {

      try {
        const response = await api.get(`SolicitacaoCredito/${routeParams.id}`);

        setDetails(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getRequests();
  },[])

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
      <ContainerImageCompany>
        <Image
          style={
            { width: '100%', height: '100%' }
          }
          source={{ uri: details.urlImagem }}
        />
      </ContainerImageCompany>

      <ContainerDistance>
        <DistanceText>1.4 km</DistanceText>
      </ContainerDistance>

      <ContentCompany>
        <Title>{details.nomeNegocio}</Title>

        <Description>{details.motivo}</Description>

        <CompanyInfo>
          <Label>Preciso em: </Label>
          <CompanyAmount>{formattedValue(details.valor)}</CompanyAmount>
        </CompanyInfo>

        <CompanyInfo>
          <Label>Pagarei em: </Label>
          <CompanyInstallment>{details.quantidadeParcelasReembolso} vezes</CompanyInstallment>
        </CompanyInfo>

        <ContainerButton>
          <ButtonGoBack onPress={handleGoBack}>
            <ButtonTextGoBack>
              VOLTAR
            </ButtonTextGoBack>
          </ButtonGoBack>

          <ButtonContribute onPress={handleContribute}>
            <ButtonTextContribute>
              IMPULSIONAR
            </ButtonTextContribute>
          </ButtonContribute>
        </ContainerButton>

      </ContentCompany>
    </Container>
  );
}

export default DetailCompany;