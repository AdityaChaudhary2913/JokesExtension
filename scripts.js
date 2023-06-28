fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(JokeData => {
  const JokeText = JokeData.attachments[0].text;
  const JokeElement=document.getElementById("container");
  JokeElement.innerHTML = JokeText;
})