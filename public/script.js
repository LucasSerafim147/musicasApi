document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/api/musics')
      .then(response => response.json())
      .then(data => {
          const musicList = document.getElementById('musicList');
          data.forEach(music => {
              const musicItem = document.createElement('div');
              musicItem.className = 'music-item';
              
              
              musicItem.innerHTML = `
                  <img src="${music.cover}" class="music-cover" alt="Capa ${music.title}">
                  <div class="music-info">
                      <h3>${music.title}</h3>
                      <p>Artista: ${music.artist}</p>
                      <p>Duração: ${music.duration}</p>
                  </div>
              `;
              
              musicList.appendChild(musicItem);
          });

         
          const searchInput = document.getElementById('searchInput');
          
          searchInput.addEventListener('input', (e) => {
              const searchTerm = e.target.value.toLowerCase();
              const musicItems = document.querySelectorAll('.music-item');
              
              musicItems.forEach(item => {
                  const title = item.querySelector('h3').textContent.toLowerCase();
                  const artist = item.querySelector('.music-info p:first-child').textContent.toLowerCase().replace('artista: ', '');
                  
                  item.style.display = title.includes(searchTerm) || artist.includes(searchTerm) 
                      ? 'flex' 
                      : 'none'
              });
          });
      })
      .catch(error => console.error('Erro:', error));
});