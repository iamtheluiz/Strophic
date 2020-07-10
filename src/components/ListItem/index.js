import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  ThumbnailContainer,
  Thumbnail,
  MusicDetails,
  Title,
  Author,
  Options,
} from './styles';

const ListItem = props => {
  useEffect(() => {
    console.log(props);
  });

  return (
    <Container>
      <ThumbnailContainer>
        <Thumbnail
          source={{
            // uri: props.artwork,
            uri:
              'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f101ee52097223.590463d3471b4.jpg',
          }}
        />
      </ThumbnailContainer>
      <MusicDetails>
        <Title>{props.title}</Title>
        <Author>{props.artist}</Author>
      </MusicDetails>
      <Options>
        <Icon name="more-vertical" size={20} color="white" />
      </Options>
    </Container>
  );
};

export default ListItem;
