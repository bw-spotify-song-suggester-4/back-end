
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('account_to_music').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('account_to_music').insert([
        {account_id: 1, song_id: 1, favorites_id: "1mcQVGBY4R2S3evJm8J8GM"},
        {account_id: 2, song_id: 2, favorites_id: "0rUyA7P4nPKCRVvKhFo7XL"},
        {account_id: 3, song_id: 3, favorites_id: "0rUyA7P4nPKCRVvKhFo7XL"},
        {account_id: 4, song_id: 4, favorites_id: "03ZzMSzg8DlBSl0cD7Hpxl"},
        {account_id: 1, song_id: 5, favorites_id: "0rUyA7P4nPKCRVvKhFo7XL"},
        {account_id: 2, song_id: 6, favorites_id: "03ZzMSzg8DlBSl0cD7Hpxl"},
        {account_id: 2, song_id: 7, favorites_id: "3Q2lFmagQPR1U6bgHSHrp8"},
        {account_id: 3, song_id: 8, favorites_id: "03ZzMSzg8DlBSl0cD7Hpxl"},
        {account_id: 3, song_id: 1, favorites_id: "3Q2lFmagQPR1U6bgHSHrp8"},
        {account_id: 4, song_id: 2, favorites_id: "1mcQVGBY4R2S3evJm8J8GM"},
        {account_id: 4, song_id: 2, favorites_id: "06w9JimcZu16KyO3WXR459"},
        {account_id: 3, song_id: 7, favorites_id: "1mcQVGBY4R2S3evJm8J8GM"},
        {account_id: 4, song_id: 8, favorites_id: "0rUyA7P4nPKCRVvKhFo7XL"},



      ]);
    });
};
