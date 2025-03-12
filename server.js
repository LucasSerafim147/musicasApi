const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());
app.use(express.static('public'));


const musics = [
  { 
    id: 1, 
    title: 'Bohemian Rhapsody', 
    artist: 'Queen', 
    duration: '5:55',
    cover: '/imgs/BohemiaRhaspody.jpg'  
  },
  { 
    id: 2, 
    title: 'Imagine', 
    artist: 'John Lennon', 
    duration: '3:03',
    cover: '/imgs/Imagine.jpg'
  },
  { 
    id: 3, 
    title: 'Hey Jude', 
    artist: 'The Beatles', 
    duration: '7:11',
    cover: '/imgs/HeyJude.jpg'
  }
];


app.get('/api/musics', (req, res) => {
  res.json(musics);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});