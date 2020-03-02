let request = require("request-promise-native");
let cheerio = require("cheerio");
module.exports = {
  config: {
    name: "cat",
    usage: "cat",
    description: "Show random cat image",
    ownerOnly: false,
    enabled: true
  },
  async run(client, message, args) {
    let options = {
      method: "HEAD",
      url: "https://thecatapi.com/api/images/get",
      followAllRedirects: true,
      resolveWithFullResponse: true
    };
    // request(options).then(function (body) {
    //     //console.log(body.request.headers.referer);
    //     message.channel.send({
    //         embed: {
    //             color: 3447003,
    //             image: {
    //                 url: body.request.headers.referer
    //             }
    //         }
    //     })
    // });
    var r = request(options.url, function(e, response) {
      //console.log(response.request.uri.Url.href);
    });
    request(options).then(function(body) {
      message.channel.send({
        embed: {
          color: 3447003,
          image: {
            url: r.uri.href
          },
          author: {
            name: message.client.user.username,
            icon_url: message.client.user.avatarURL({
              format: "png",
              dynamic: true,
              size: 1024
            })
          }
        }
      });
    });
  }
};
