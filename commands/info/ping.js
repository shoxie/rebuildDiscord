module.exports = {
  config: {
    name: "ping",
    usage: "playlist --arguement [playlist name] [url]",
    description: "Show top songs played by me",
    ownerOnly: false,
    enabled: false
  },
  run: async (message, args) => {
    message.channel.send("pong");
  }
};
