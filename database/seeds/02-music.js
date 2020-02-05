
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('music').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('music').insert([
        {
          "track_id": 1, 
         "track_name": "hello world",
         "artist_name": "",
         "acousticness": 0.0,
         "danceability": 0.1,
         "energy": 0.2
      },
        
      {
        "track_id": 2, 
        "track_name": "",
        "artist_name": "",
        "acousticness": 0.1,
        "danceability": 0.2,
        "energy": 0.3
      },
        
      {
        "track_id": 3, 
        "track_name": "",
        "artist_name": "",
        "acousticness": 0.2,
        "danceability": 0.3,
        "energy": 0.4
      },
        

      ]);
    });
};
