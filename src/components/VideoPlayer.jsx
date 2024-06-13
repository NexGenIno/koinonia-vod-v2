import React from 'react'

import ReactPlayer from 'react-player'

export const VideoPlayer = ({ url }) => {
    
  return (
    <>
    <div className='player-wrapper'>
    <ReactPlayer className="react-player" url={url} width={"100%"} height={"100%"} controls config={{
        file: {
          attributes: {
            preload: 'auto',
            controlsList: 'nodownload'  // Esta línea deshabilita la descarga
          }
        }
      }}/>
      </div>
    </>
  )
}

export default VideoPlayer;
