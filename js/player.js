document.querySelector('#player').scrollIntoView({
  behavior: 'smooth'
});

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=6e2cad46b80d9f87f664d8b2cb762b01&artist=Cher&album=Believe&format=json", false);
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);
