import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  height: 54px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 32px;

  background-color: #E5E5E5;
`;

export const Title = styled.Text`
  font-family: 'TitilliumWeb-Bold';
  font-size: 22px;
`;

export const ContainerPhoto = styled.TouchableOpacity`
`;

export const Photo = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;
