import React, { useEffect, useRef, useState } from 'react';

const ControlPanel = () => {
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const wsRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket('ws://52.53.192.72:8090');
    wsRef.current = ws;

    ws.onopen = () => {
      console.log('Connected to control WebSocket');
      setConnectionStatus('Connected');
      ws.send(JSON.stringify({ client: 'browser' }));
    };

    ws.onclose = () => {
      console.log('Control WebSocket disconnected');
      setConnectionStatus('Disconnected');
    };

    ws.onerror = (err) => {
      console.error('WebSocket error:', err);
      setConnectionStatus('Error');
    };

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  const sendCommand = (cmd) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ client: 'browser', command: cmd }));
    } else {
      console.warn('WebSocket is not open.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p>Control Panel — Status: {connectionStatus}</p>
      <button onClick={() => sendCommand('up')}>Up</button>
      <button onClick={() => sendCommand('down')}>Down</button>
      <br />
      <button onClick={() => sendCommand('left')}>Left</button>
      <button onClick={() => sendCommand('right')}>Right</button>
    </div>
  );
};

export default ControlPanel;
