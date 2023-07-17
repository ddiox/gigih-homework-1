// Model
let playlist = [
    {
      id: 1,
      title: 'Song 1',
      artists: ['Artist 1'],
      url: 'https://spotify.com/song1',
      playCount: 0
    },
    {
      id: 2,
      title: 'Song 2',
      artists: ['Artist 2', 'Artist 3'],
      url: 'https://spotify.com/song2',
      playCount: 0
    }
  ];

// Methods
// GET All /playlist/sorted
// Get list of songs to be sorted by most played
function sortSongsByPlayCount() {
    return playlist.sort((a, b) => b.playCount - a.playCount);
}

// GET All /playlist
// Get List of songs from your playlist
function getAllSongs() {
    return playlist;
}

// GET By ID /playlist/:id
// Get a song from your playlist
function getSongById(id) {
    const songId = parseInt(id);

    return playlist.find(item => item.id === songId);
}

// POST /playlist
// Add song to your playlist
// Attributes: Title, Artists (can have multiple artist), URL (from spotify URL)
function addSong(song) {
    song.id = playlist.length + 1;
    song.playCount = 0; 
    playlist.push(song);

    return song;
}

// PUT /playlist/:id
// Edit song from your playlist
function updateSong(id, updatedSong) {
    const songId = parseInt(id);

    const songIndex = playlist.findIndex(item => item.id === songId);
    if (songIndex === -1) {
        return null;
    }

    const songToUpdate = playlist[songIndex];
    updatedSong.playCount = songToUpdate.playCount;
    updatedSong.id = songId;
    playlist[songIndex] = updatedSong;


    return updatedSong;
}

// DELETE /playlist/:id
// Delete song from your playlist
function deleteSong(id) {
    const songId = parseInt(id);

    const songIndex = playlist.findIndex(item => item.id === songId);
    if (songIndex === -1) {
        return null;
    }

    const deletedSong = playlist[songIndex];
    playlist.splice(songIndex, 1);
    
    return deletedSong;
}

module.exports = {
    sortSongsByPlayCount,
    getAllSongs,
    getSongById,
    addSong,
    updateSong,
    deleteSong
};