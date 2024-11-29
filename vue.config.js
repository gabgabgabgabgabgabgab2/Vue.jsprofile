module.exports = {
  devServer: {
    // Ensure the WebSocket connection uses wss://
    client: {
      webSocketURL: 'wss://192.168.56.1:8080/ws',  // Use wss:// instead of ws://
    },
    https: true,  // Enable HTTPS for development server if needed
  },
};
