require('./add-events-controller');
require('./list-events-controller');
require('./calendar');
require('./comment-controller');
require('./detail-events-controller');
require('./crop-image-controller');
require('./add-video-event-controller');

module.exports = 'controllers';


// self.login = function () {
//     Spotify.login().then(function(data) {
//
//         // console.log('data', Spotify);
//
//         // Spotify.setAuthToken(data);
//         Spotify.getTracksAudioFeatures('5wZUvwWGKaZ6NG8yckZcTM').then(function (data) {
//             console.log(data);
//         });
//     });
//
//     //Spotify
//     //    .getFeaturedPlaylists({ locale: "nl_NL", country: "NL" })
//     //    .then(function (data) {
//     //        console.log(data);
//     //    });
//
//     //Spotify.getAlbum('2xtRHrXduvq6S7rrzmS0dK').then(function (data) {
//     //    console.log(data);
//     //});
// };
