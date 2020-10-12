import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import formattedValue from '../../../utils/formatValue';

import { 
  Container,
  List,
  Company,
  CompanyImageContainer,
  CompanyContent,
  CompanyInfo,
  Label,
  CompanyTitle,
  CompanyAmount,
  CompanyInstallment,
  ContainerButton,
  ButtonViewMore,
  ButtonTextViewMore,
  ButtonContribute,
  ButtonTextContribute
} from './styles';

import Header from '../../../components/Header';

import api from '../../../services/api';

interface Request {
  id: number;
  nomeNegocio: string;
  motivo: string;
  valor: number;
  urlImagem: string;
  quantidadeParcelasReembolso: number;
}

const EntrepreneursList: React.FC = () => {
  const navigation = useNavigation();

  const [requests, setRequests] = useState<Request[]>([])

  useEffect(() => {
    const getRequests = async () => {

      try {
        const response = await api.get('SolicitacaoCredito');

        setRequests(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getRequests();
  },[]);

  const handleViewMore = useCallback(
    (id: number) => {
      navigation.navigate('DetailCompany', { id });
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
    <>
      <Header title='Seu bairro precisa de você!' />
      <Container>
        <List
          showsVerticalScrollIndicator={false}
          data={requests}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Company>
              <CompanyImageContainer>
                <Image
                  style={
                    { width: '100%', height: '100%' }
                  }
                  source={{ uri: item.urlImagem }}
                />
              </CompanyImageContainer>

              <CompanyContent>
                <CompanyTitle>{item.nomeNegocio}</CompanyTitle>

                <CompanyInfo>
                  <Label>Preciso de: </Label>
                  <CompanyAmount>{formattedValue(item.valor)}</CompanyAmount>
                </CompanyInfo>

                <CompanyInfo>
                  <Label>Forma de pagamento: </Label>
                  <CompanyInstallment>{item.quantidadeParcelasReembolso}x</CompanyInstallment>
                </CompanyInfo>
              </CompanyContent>

              <ContainerButton>
                <ButtonViewMore onPress={() => handleViewMore(item.id)}>
                  <ButtonTextViewMore>
                    VER MAIS
                  </ButtonTextViewMore>
                </ButtonViewMore>

                <ButtonContribute onPress={handleContribute}>
                  <ButtonTextContribute>
                    IMPULSIONAR
                  </ButtonTextContribute>
                </ButtonContribute>
              </ContainerButton>
            </Company>
          )}
        />
      </Container>
    </>
  );
}

export default EntrepreneursList;