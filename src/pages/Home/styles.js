import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View`
  background-color: ${colors.background};
  flex: 1;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: white;
`;
