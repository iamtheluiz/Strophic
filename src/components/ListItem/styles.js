import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import colors from '../../config/colors';

const ScreenWidth = Dimensions.get('window').width;

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const ThumbnailContainer = styled.View`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const Thumbnail = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 4px;
`;

export const MusicDetails = styled.View`
  width: ${ScreenWidth - 80 - 30}px;
  padding: 0px 8px;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: white;
`;

export const Author = styled.Text`
  width: 100%;
  font-size: 20px;
  color: white;
`;

export const Options = styled.View`
  width: 20px;
  height: 80px;
  justify-content: center;
  align-items: center;
`;
