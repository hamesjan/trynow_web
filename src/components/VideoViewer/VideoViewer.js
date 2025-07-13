import React, { useEffect, useRef, useState } from 'react';
import mpegts from 'mpegts.js';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if the browser supports MSE
    if (!mpegts.getFeatureList().mseLivePlayback) {
      setError('Your browser does not support MSE live playback.');
      return;
    }

    // Create the player
    const player = mpegts.createPlayer(
      {
        type: 'mpegts',
        isLive: true,
        url: 'ws://54.241.79.228:8082/',
      },
      {
        enableWorker: true, // Use Web Worker for better performance
        liveBufferLatencyChasing: true, // Handle live stream latency
        lazyLoad: false, // Load immediately for live streams
      }
    );

    playerRef.current = player;

    // Attach error and reconnect event listeners
    player.on(mpegts.Events.ERROR, (errorType, errorDetail, errorInfo) => {
      console.error('mpegts.js error:', errorType, errorDetail, errorInfo);
      setError(`Player error: ${errorType} - ${errorDetail}`);
    });

    // Attach the player to the video element
    player.attachMediaElement(videoRef.current);
    player.load();

    // Attempt to play the stream
    player.play().catch((err) => {
      console.error('Playback error:', err);
      setError('Failed to start playback. Ensure the stream is active.');
    });

    // Cleanup on unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.detachMediaElement();
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <h2>Live Stream</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <video
        ref={videoRef}
        controls
        autoPlay
        muted
        style={{ width: '100%', maxWidth: '800px' }}
      />
    </div>
  );
};

export default VideoPlayer;
