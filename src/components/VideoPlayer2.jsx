import React from 'react';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

const VideoPlayer2 = ({ titulo, url }) => {
  return (
    <MediaPlayer title={ titulo } src={url} preload="auto" buffering="true">
    <MediaProvider />
    <DefaultVideoLayout  icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
};

export default VideoPlayer2;
