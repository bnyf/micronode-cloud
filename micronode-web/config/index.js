const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://8.131.73.206:3000';

export const mqtt_server = 'mqtt://127.0.0.1';