const urlAPI = 'https://gateway.marvel.com:443/v1/public/events/329?ts=1&apikey=983050fe87a4a396970b1296060da08a&hash=1c1488691435552b8d8f6a060481c963';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-4">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" id="imagen_fm">                             
              </div>`;
          }
        container.innerHTML = contentHTML;
})


const charac= document.getElementById('character');
const character = () => {
  const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=983050fe87a4a396970b1296060da08a&hash=1c1488691435552b8d8f6a060481c963';
  const container = document.querySelector('#marvel-row');
  let contentHTML = '';

  fetch(urlAPI)
    .then(res => res.json())
    .then((json) => {
      for (const hero of json.data.results) {
        let urlHero = hero.urls[0].url;
        contentHTML += `
          <div class="col-md-4">
              <a href="${urlHero}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
              </a>
              <h3 class="title">${hero.name}</h3>
          </div>`;
      }
      container.innerHTML = contentHTML;
    })
}
charac.addEventListener('click', character);


const com= document.getElementById('comics');
const comics = () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/creators/1168/comics?ts=1&apikey=983050fe87a4a396970b1296060da08a&hash=1c1488691435552b8d8f6a060481c963';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.title}" class="img-thumbnail">
                  </a> 
                  <h2 class="title">${hero.title}</h2>        
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
com.addEventListener('click', comics);

const even= document.getElementById('events');
const events = () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=983050fe87a4a396970b1296060da08a&hash=1c1488691435552b8d8f6a060481c963';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.title}" class="img-thumbnail">
                  </a> 
                  <h2 class="title">${hero.title}</h2>        
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
even.addEventListener('click', events);


const seri= document.getElementById('series');
const series = () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=983050fe87a4a396970b1296060da08a&hash=1c1488691435552b8d8f6a060481c963';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.title}" class="img-thumbnail">
                  </a> 
                  <h2 class="title">${hero.title}</h2>        
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
seri.addEventListener('click', series);


const stori= document.getElementById('stories');
const stories = () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/stories?ts=1&apikey=983050fe87a4a396970b1296060da08a&hash=1c1488691435552b8d8f6a060481c963';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const hero of json.data.results) {
            let urlHero = hero;
            contentHTML += `
              <div class="col-md-4">
                <h2>${hero.modified}</h2>
                <p class="title"><b>${hero.title}</b></p>                                    
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
stori.addEventListener('click', stories);