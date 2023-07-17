const playlistModel = require('../model/playlistModel');

// Service
// Play song from your playlist
function playSong(songId) {
    const song = playlistModel.getSongById(songId);
  
    if (!song) {
        throw new Error("Song not found");
    }
  
    song.playCount++;
}

// Get list of songs to be sorted by most played
function getSongsByMostPlayed() {
    const sortedSongs = playlistModel.sortSongsByPlayCount();
  
    return sortedSongs;
}
  

// Get List of songs from your playlist
function getAllSongs() {
    return playlistModel.getAllSongs();
}

// Get a song from your playlist
function getSongById(id) {
    return playlistModel.getSongById(id);
}

// Add song to your playlist
function addSong(song) {
    return playlistModel.addSong(song);
}

// Edit song from your playlist
function updateSong(id, updatedSong) {
    return playlistModel.updateSong(id, updatedSong);
}

// Delete song from your playlist
function deleteSong(id) {
    return playlistModel.deleteSong(id);
}

module.exports = {
    playSong,
    getSongsByMostPlayed,
    getAllSongs,
    getSongById,
    addSong,
    updateSong,
    deleteSong
};