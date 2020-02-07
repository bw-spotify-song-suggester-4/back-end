
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('music').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('music').insert([
        {
          "track_id": "06w9JimcZu16KyO3WXR459",
          "track_name": "Perfect Service For Dreamers] - Agnelli & Nelson Remix",
          "artist_name": "Markus Schulz",
          "acousticness":  0.00117,
          "danceability": 0.421,
          "duration_ms": 198230,
          "energy": 0.691,
          "instrumentalness": 0.24,
          "key": 7,
          "liveness": 0.652,
          "loudness": -12.105,
          "mode": true,
          "speechiness": 0.0348,
          "tempo": 135.019,
          "time_signature": 4,
          "valence": 0.321,
          "popularity": 15
        },
        {
          "track_id": "6XzyAQs2jU4PMWmnFlEQLW",
          "track_name": "Human",
          "artist_name": "Kimbra",
          "acousticness": 0.0131,
          "danceability": 0.577,
          "duration_ms": 238387,
          "energy": 0.66,
          "instrumentalness": 0.205,
          "key": 7,
          "liveness": 0.612,
          "loudness": 7.191,
          "mode": true,
          "speechiness": 0.0413,
          "tempo": 155.979,
          "time_signature": 4,
          "valence": 0.156,
          "popularity": 45
        },
        {
          "track_id": "3Q2lFmagQPR1U6bgHSHrp8",
          "track_name": "Flowers By The Bed",
          "artist_name": "Casey",
          "acousticness": 8.17e-05,
          "danceability": 0.503,
          "duration_ms": 223173,
          "energy": 0.687,
          "instrumentalness": 0.321,
          "key": 7,
          "liveness": 0.593,
          "loudness": -6.99,
          "mode": true,
          "speechiness": 0.0361,
          "tempo": 122.195,
          "time_signature": 4,
          "valence": 0.261,
          "popularity": 26
        },
        {
          "track_id": "0wEPPaKHH4HgNNL4swGSoe",
          "track_name": "Drift (Push The Button) [ABGT273]",
          "artist_name": "Dylhen",
          "acousticness": 4.31e-05,
          "danceability": 0.475,
          "duration_ms": 293115,
          "energy": 0.914,
          "instrumentalness": 0.262,
          "key": 7,
          "liveness": 0.578,
          "loudness": 9.632,
          "mode": true,
          "speechiness": 0.0507,
          "tempo": 122.023,
          "time_signature": 4,
          "valence": 0.327,
          "popularity": 7
        },
        {
          "track_id": "1EGMvBF9fk9qsvpUnOen4d",
          "track_name": "Liar",
          "artist_name": "awfultune",
          "acousticness": 0.0607,
          "danceability": 0.375,
          "duration_ms": 102534,
          "energy": 0.717,
          "instrumentalness": 0.275,
          "key": 7,
          "liveness": 0.502,
          "loudness": -11.199,
          "mode": true,
          "speechiness": 0.0469,
          "tempo": 99.929,
          "time_signature": 4,
          "valence": 0.429,
          "popularity": 23
        },
        {
          "track_id": "03ZzMSzg8DlBSl0cD7Hpxl",
          "track_name": "Randy (WWW)",
          "artist_name": "Justice",
          "acousticness": 0.0124,
          "danceability": 0.327,
          "duration_ms": 453706,
          "energy": 0.687,
          "instrumentalness": 0.0557,
          "key": 7,
          "liveness": 0.645,
          "loudness": 7.012,
          "mode": true,
          "speechiness": 0.051,
          "tempo": 113.742,
          "time_signature": 4,
          "valence": 0.419,
          "popularity": 34
        },
        {
          "track_id": "0rUyA7P4nPKCRVvKhFo7XL",
          "track_name": "Got To Get You Into My Life - Recorded At Abbey Road Studios, London",
          "artist_name": "Paul McCartney",
          "acousticness": 0.00132,
          "danceability": 0.454,
          "duration_ms": 169963,
          "energy": 0.653,
          "instrumentalness": 1.98e-05,
          "key": 7,
          "liveness": 0.687,
          "loudness": -10.705,
          "mode": true,
          "speechiness": 0.0424,
          "tempo": 131.354,
          "time_signature": 4,
          "valence": 0.304,
          "popularity": 38
        },
        {
          "track_id": "1mcQVGBY4R2S3evJm8J8GM",
          "track_name": "Pieces (ASOT 893)",
          "artist_name": "DT8 Project",
          "acousticness": 0.00275,
          "danceability": 0.441,
          "duration_ms": 330130,
          "energy": 0.681,
          "instrumentalness": 0.323,
          "key": 6,
          "liveness": 0.605,
          "loudness": -12.127,
          "mode": true,
          "speechiness": 0.0515,
          "tempo": 136.038,
          "time_signature": 4,
          "valence": 0.219,
          "popularity": 19
        }










      ]);
    });
};
