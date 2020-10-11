import React from 'react';

import { Container, Title, ContainerPhoto, Photo } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
      <Title>Solicitação de crédito</Title>
      
      <ContainerPhoto onPress={() => {}}>
        <Photo source={{uri: 'https://avatars2.githubusercontent.com/u/16242029?v=4'}} />
      </ContainerPhoto>
    </Container>  
  );
}

export default Header;