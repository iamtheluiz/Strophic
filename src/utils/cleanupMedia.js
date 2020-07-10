export default function cleanupMedia(media) {
  if (!Array.isArray(media) || media.length === 0) {
    return [];
  }

  let newMedia = [];
  let folderName = '';
  let mediaFiles = media;
  for (let i = 0; i < mediaFiles.length; i++) {
    if (mediaFiles[i].title) {
      folderName = getFolder(mediaFiles[i].path);
      newMedia.push({
        id: mediaFiles[i].duration + i,
        duration: mediaFiles[i].duration,
        url: mediaFiles[i].path,
        title:
          mediaFiles[i].title ||
          mediaFiles[i].fileName.replace(/.mp3|.aac|.wav|.amr|.flac/, ''),
        artwork: mediaFiles[i].cover || null,
        artist:
          mediaFiles[i].author === '<unknown>'
            ? 'unknown'
            : mediaFiles[i].author,
        album:
          mediaFiles[i].album === '<unknown>' ? 'unknown' : mediaFiles[i].album,
        index: i,
        folder: folderName,
      });
    }
  }
  return newMedia;
}

function getFolder(path) {
  let dirArr = path.split('/');
  return dirArr[dirArr.length - 2];
}
