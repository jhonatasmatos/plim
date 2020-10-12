import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'TitilliumWeb-Bold';
  font-size: 24px;

  padding-top: 30px;
  padding-right: 90px;
`;

export const Text = styled.Text`
  width: 340px;

  font-family: 'Poppins-Regular';
  font-size: 16px;

  padding-top: 24px;
`;

export const Content = styled.TouchableOpacity`
  width: 350px;
  height: 210px;
  border-radius: 24px;

  margin-top: 26px;

  justify-content: center;
  align-items: center;

  background-color: #FFEDF3;
`;

export const Description = styled.Text`
  width: 260px;
  
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
`;

