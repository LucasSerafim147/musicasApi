document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/musics')
        .then(response => response.json())
        .then(data => {
            const musicList = document.getElementById('musicList');
            data.forEach(music => {
                const musicItem = document.createElement('div');
                musicItem.className = 'music-item';
                musicItem.innerHTML = `
                    <h3>${music.title}</h3>
                    <p>Artista: ${music.artist}</p>
                    <p>Duração: ${music.duration}</p>
                `;
                musicList.appendChild(musicItem);
            });
        })
        .catch(error => console.error('Erro:', error));
});