# back-end
All endpoints: 

// Register account
POST REQ ('/register')

// Login to account 
POST ('/login')


//  Delete account 
DELETE ('/:id')


// Update account
PUT ('/:id')

// GET all saved songs by account ID
GET ('/:id/favorites')


// DELETE - favorite tracks
delete ('/:id/favorites/:track_id')



// GET - search song by title 
('/search/:songname') 
---> where we use an axios call to external api to add to our db 
     axios.get(`http://musicovery.com/api/V6/track.php?fct=search&title=${songname}&resultsnumber=100&minmatch=90`)

// POST - save song to favs
('/save')

// GET - get suggested songs
('/suggested')
---> where we use an axios call to external api to search for genre (recommendations) add to our db 
axios.get(`http://musicovery.com/api/V6/tag.php?&fct=search&type=${genre}`)




