import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  height: 54px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const ContainerPhoto = styled.TouchableOpacity`
`;

export const Photo = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;
