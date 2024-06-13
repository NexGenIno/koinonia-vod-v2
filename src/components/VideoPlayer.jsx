import React from 'react'

import ReactPlayer from 'react-player'

export const VideoPlayer = () => {
    const urls=[
        'https://cck.mx/wp-content/uploads/2024/05/WhatsApp-Video-2024-05-14-at-14.00.55.mp4',
        'https://cck.mx/wp-content/uploads/2024/04/WhatsApp-Video-2024-04-04-at-1.59.54-PM.mp4'
      ]
  return (
    <>
    <div className='player-wrapper'>
    <ReactPlayer className="react-player" url={urls} width={"100%"} height={"100%"} controls config={{
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
