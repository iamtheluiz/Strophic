import React, { useEffect, useState } from 'react';
import { Container, MusicList } from './styles';
import ListItem from '../../components/ListItem';
import RNFetchBlob from 'rn-fetch-blob';

import {
  checkStoragePermissions,
  getStoragePermission,
} from '../../utils/Permissions';
import MusicFiles from 'react-native-get-music-files';
import cleanupMedia from '../../utils/cleanupMedia';

const List = () => {
  const [musics, setMusics] = useState([]);

  async function getMedia() {
    let granted = await checkStoragePermissions();

    if (!granted) {
      await getStoragePermission();
    }

    console.log(RNFetchBlob.fs.dirs.DocumentDir);
    const coverFolder = RNFetchBlob.fs.dirs.DocumentDir + '/.strophic';

    const tracks = await MusicFiles.getAll({
      blured: true,
      artist: true,
      album: true,
      duration: true,
      cover: true,
      title: true,
      coverFolder,
    });

    // Filter "WhatsApp Audio" folder
    const filteredList = tracks.filter(
      track => track.path.indexOf('WhatsApp Audio') === -1,
    );

    let media = cleanupMedia(filteredList);

    setMusics(media);
  }

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <Container>
      <MusicList>
        {musics.map((music, key) => (
          <ListItem
            key={key}
            title={music.title}
            artist={music.artist}
            artwork={music.artwork}
            url={music.url}
          />
        ))}
      </MusicList>
    </Container>
  );
};

export default List;
