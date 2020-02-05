
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('music').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('music').insert([
        {
          "track_id": 1, 
         "track_name": "",
         "artist_name": ""
         
      },
        
      {
        "track_id": 2, 
        "track_name": "",
        "artist_name": ""
       
      },
        
      {
        "track_id": 3, 
        "track_name": "",
        "artist_name": ""
      },
        

      ]);
    });
};
