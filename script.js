const xhr = new XMLHttpRequest();

function getJoke() {
  xhr.open(
    'GET',
    'https://cors-anywhere.herokuapp.com/https://api.chucknorris.io/jokes/random'
  );

  xhr.onreadystatechange = function () {
    const div = document.getElementById('joke');

    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      div.innerText = response.value;
    }
  };

  xhr.send();
}

document.getElementById('joke-btn').addEventListener('click', getJoke);
