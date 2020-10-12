import React from 'react';

import { Container, Title, ContainerPhoto, Photo } from './styles';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return(
    <Container>
      <Title>{title}</Title>
      
      <ContainerPhoto onPress={() => {}}>
        <Photo source={{uri: 'https://avatars2.githubusercontent.com/u/16242029?v=4'}} />
      </ContainerPhoto>
    </Container>  
  );
}

export default Header;