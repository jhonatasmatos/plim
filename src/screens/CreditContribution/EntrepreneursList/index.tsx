import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

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

const mock = [
  {
    id: 1,
    image: 'https://i.pinimg.com/originals/68/a4/9c/68a49c29cf35874e07fb02d8a647bc35.jpg',
    name: 'Mercado do Bairro',
    amount: 10000.00,
    installment: 10
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/originals/68/a4/9c/68a49c29cf35874e07fb02d8a647bc35.jpg',
    name: 'Mercado do Bairro',
    amount: 10000.00,
    installment: 10
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/originals/68/a4/9c/68a49c29cf35874e07fb02d8a647bc35.jpg',
    name: 'Mercado do Bairro',
    amount: 10000.00,
    installment: 10
  }
]

const EntrepreneursList: React.FC = () => {
  const navigation = useNavigation();

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
          data={mock}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Company>
              <CompanyImageContainer>
                <Image
                  style={
                    { width: '100%', height: '100%' }
                  }
                  source={{ uri: item.image }}
                />
              </CompanyImageContainer>

              <CompanyContent>
                <CompanyTitle>{item.name}</CompanyTitle>

                <CompanyInfo>
                  <Label>Preciso em: </Label>
                  <CompanyAmount>{item.amount}</CompanyAmount>
                </CompanyInfo>

                <CompanyInfo>
                  <Label>Pagarei em: </Label>
                  <CompanyInstallment>{item.installment}</CompanyInstallment>
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
                    CONTRIBUA
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