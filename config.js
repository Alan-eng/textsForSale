
export default {
  port: 8000,
  host: '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
};
