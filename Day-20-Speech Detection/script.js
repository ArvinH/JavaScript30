(function() {
  function fetchWeatherByYQL(location, callback) {
    fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${location}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
      .then((res) => res.json())
      .then((data) => {
        const location = data.query.results.channel.location;
        const condition = data.query.results.channel.item.condition;
        const temp = Math.floor((condition.temp - 32) * (5 / 9));
        const result = `current weather in ${location.city}, ${location.region} is ${temp} degrees.`;
        console.log(result);  
        callback(result);
      })
  };

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      p.textContent = transcript;

      if (e.results[0].isFinal) {
        if (transcript.includes('Weather of')) {
          const regex = /Weather of /i;
          const location = regex.exec(transcript);
          fetchWeatherByYQL(location, (result) => {
            p = document.createElement('p');
            p.textContent = result;
            words.appendChild(p);
          });
        }
      }
  });

  recognition.addEventListener('end', recognition.start);

  recognition.start();

})();