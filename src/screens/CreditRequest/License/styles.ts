import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  /* justify-content: center; */
`;

export const Title = styled.Text`
  width: 340px;

  padding: 24px 0px;
  
  font-family: 'TitilliumWeb-Bold';
  font-size: 24px;
`;

export const Text = styled.Text`

  padding: 25px 26px 56px 26px;

  font-family: 'Poppins-Regular';
  font-size: 16px;
  text-align: justify;
`;

export const Link = styled.TouchableOpacity`
`;

export const LinkText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;

  color: #F70F5D;
`;

export const ContainerLicense = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px 36px 56px 26px;
`;

export const LicenseText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;

export const UploadButton = styled.TouchableOpacity`
`;

export const ContainerButton = styled.View`
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 36px;
`;

export const Button = styled(RectButton)`
  width: 350px;
  height: 54px;
  border-radius: 16px;

  align-items: center;
  justify-content: center;

  background-color: #20187D;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;

  color: #fff;
`;
