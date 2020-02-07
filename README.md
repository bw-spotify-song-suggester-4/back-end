# back-end
All endpoints: 

// Register account
POST REQ ('accounts/register')

// Login to account 
POST ('accounts/login')


//  Delete account 
DELETE ('/accounts/:id')


// Update account
PUT ('accounts/:id')

// GET all saved songs by account ID
GET ('accounts/:id/favorites')


// DELETE - favorite tracks
delete ('accounts/:id/favorites/:track_id')



// GET - search song by title 
('music/search/:track_name') 
---> where we use an axios call to external api to add to our db 
     axios.get(`https://sss-data-backend.herokuapp.com/search=${track_name}`)

// POST - save song to favs
('/music/save')

// GET - get suggested songs
('/music/suggested')
---> where we use an axios call to external api to search for genre (recommendations) add to our db 
axios.get(`https://sss-data-backend.herokuapp.com/get-suggestions=${feature}&min=${ min }&max=${ max }&limit=${totalLimit || 200})




