const playlistService = require('../service/playlistService');

// Play by ID /playlist/:id/play
function playSong(req, res) {
  const songId = req.params.id;
  
  try {
    playlistService.playSong(songId);
    res.status(200).json({ message: 'Song played successfully' });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
}

// GET All /playlist/sorted
function getSongsByMostPlayed(req, res) {
  try {
    const sortedSongs = playlistService.getSongsByMostPlayed();

    res.status(200).json(sortedSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// GET All /playlist
function getAllSongs(req, res) {
  try {
    const songs = playlistService.getAllSongs();

    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// GET By ID /playlist/:id
function getSongById(req, res) {
  try {
    const songId = req.params.id;

    const song = playlistService.getSongById(songId);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// POST /playlist
function addSong(req, res) {
  try {
    const { title, artists, url } = req.body;
    if (!title || !artists || !url) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    const song = {
      title,
      artists,
      url,
      playCount: 0
    };
    const addedSong = playlistService.addSong(song);

    res.status(201).json({ message: 'Song added to playlist', song: addedSong });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// PUT /playlist/:id
function updateSong(req, res) {
  try {
    const songId = req.params.id;

    const { title, artists, url } = req.body;
    if (!title || !artists || !url) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const updatedSong = {
      title,
      artists,
      url
    };
    const result = playlistService.updateSong(songId, updatedSong);
    if (!result) {
      return res.status(404).json({ message: 'Song not found' });
    }

    res.status(200).json({ message: 'Song updated', song: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// DELETE /playlist/:id
function deleteSong(req, res) {
  try {
    const songId = req.params.id;

    const deletedSong = playlistService.deleteSong(songId);

    if (!deletedSong) {
      return res.status(404).json({ message: 'Song not found' });
    }

    res.status(200).json({ message: 'Song deleted', song: deletedSong });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  playSong,
  getSongsByMostPlayed,
  getAllSongs,
  getSongById,
  addSong,
  updateSong,
  deleteSong
}

