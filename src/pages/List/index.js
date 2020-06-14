import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Container } from './styles';
import Icon from 'react-native-vector-icons/Feather';

import {
  checkStoragePermissions,
  getStoragePermission,
} from '../../utils/Permissions';
import MusicFiles from 'react-native-get-music-files';

const List = () => {
  const [musics, setMusics] = useState([]);

  async function getMedia() {
    let granted = await checkStoragePermissions();

    if (!granted) {
      await getStoragePermission();
    }

    const traks = await MusicFiles.getAll({
      id: true,
      blured: true,
      artist: true,
      duration: true, //default : true
      cover: true, //default : true,
      title: true,
    });

    // Filter "WhatsApp Audio" folder
    const filteredList = traks.filter(
      trak => trak.path.indexOf('WhatsApp Audio') === -1,
    );

    setMusics(filteredList);
  }

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <Container>
      <Icon name="music" size={40} color="white" onPress={getMedia} />
      <ScrollView>
        {musics.map((music, key) => (
          <Text key={key}>{music.title}</Text>
        ))}
      </ScrollView>
    </Container>
  );
};

export default List;
