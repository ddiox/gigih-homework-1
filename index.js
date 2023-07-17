const express = require('express');
const bodyParser = require('body-parser');
const playlistController = require('./controller/playlistController');

const app = express();
app.use(bodyParser.json());

// Other Features
app.post('/playlist/:id/play', playlistController.playSong); // Add song to your playlist and Track song play count in the playlist
app.get('/playlist/sorted', playlistController.getSongsByMostPlayed); // // Add feature to Get list of songs to be sorted by most played

// CRUD
app.get('/playlist', playlistController.getAllSongs); // Get List of songs from your playlist
app.get('/playlist/:id', playlistController.getSongById);
app.post('/playlist', playlistController.addSong); // // Add song to your playlist
app.put('/playlist/:id', playlistController.updateSong);
app.delete('/playlist/:id', playlistController.deleteSong);

// Run at port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// // Previous Homework
// // Model
// let playlist = [
//     {
//         id: 1,
//         title: 'Song 1',
//         artists: ['Artist 1'],
//         url: 'https://spotify.com/song1'
//     },
//     {
//         id: 2,
//         title: 'Song 2',
//         artists: ['Artist 2', 'Artist 3'],
//         url: 'https://spotify.com/song2'
//     }
// ];

// // Routes and Handlers
// // POST /playlist
// app.post('/playlist', (req, res) => {
//     const { title, artists, url } = req.body;

//     if (!title || !artists || !url) {
//         return res.status(400).json({ message: 'Missing required fields' });
//     }

//     const song = {
//         id: playlist.length + 1,
//         title,
//         artists,
//         url
//     };

//     playlist.push(song);

//     res.status(201).json({ message: 'Song added to playlist', song: song });
// });

// // GET By ID /playlist/:id
// app.get('/playlist/:id', (req, res) => {
//     const songId = parseInt(req.params.id);
  
//     const song = playlist.find(item => item.id === songId);
  
//     if (!song) {
//       return res.status(404).json({ message: 'Song not found' });
//     }
  
//     res.status(200).json(song);
// })

// // GET All /playlist
// app.get('/playlist', (req, res) => {
//     res.status(200).json(playlist);
// });

// // PUT /playlist/:id
// app.put('/playlist/:id', (req, res) => {
//     const songId = parseInt(req.params.id);
//     const { title, artists, url } = req.body;
  
//     if (!title || !artists || !url) {
//         return res.status(400).json({ message: 'Missing required fields' });
//     }
  
//     const songIndex = playlist.findIndex(item => item.id === songId);
  
//     if (songIndex === -1) {
//         return res.status(404).json({ message: 'Song not found' });
//     }
  
//     const updatedSong = {
//         id: songId,
//         title,
//         artists,
//         url
//     };
  
//     playlist[songIndex] = updatedSong;
  
//     res.status(200).json({ message: 'Song updated', song: updatedSong });
// });
  
// // DELETE /playlist/:id
// app.delete('/playlist/:id', (req, res) => {
//     const songId = parseInt(req.params.id);
  
//     const songIndex = playlist.findIndex(item => item.id === songId);
  
//     if (songIndex === -1) {
//         return res.status(404).json({ message: 'Song not found' });
//     }
  
//     const deletedSong = playlist[songIndex];
  
//     playlist.splice(songIndex, 1);
  
//     res.status(200).json({ message: 'Song deleted', song: deletedSong });
// });

// // Run Server at Port 3000
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });