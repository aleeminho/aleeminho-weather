$(() => {
  const jsonData = {};
  const fetchData = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=rahasia&units=metric`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  function appendToHtml() {
    $('.data p').remove();
    $('.data').append(`<p><span>Name</span> : ${jsonData.Name}</>`);
    $('.data').append(`<p><span>Coordinate</span> : ${jsonData.Coordinate}</>`);
    $('.data').append(`<p><span>Weather</span> : ${jsonData.Weather}</>`);
    $('.data').append(`<p><span>Temperature</span> : ${jsonData.Temperature}</>`);
    $('.data').append(`<p><span>Humidity</span> : ${jsonData.Humidity}</>`);
    $('.data').append(`<p><span>Sunrise</span> : ${jsonData.Sunrise}</>`);
    $('.data').append(`<p><span>Sunset</span> : ${jsonData.Sunset}</>`);
    $('.data').append(`<p><span>Visibility</span> : ${jsonData.Visibility}</>`);
  }

  function inputTheData(data) {
    jsonData.Coordinate = `Longitude: ${data.coord.lon}, Latitude ${data.coord.lat}`;
    jsonData.Weather = `${data.weather[0].main}, ${data.weather[0].description}`;
    jsonData.Temperature = `${data.main.temp}° C, ${data.main.temp_min}° C (Min temp), ${data.main.temp_max}° C (Max temp)`;
    jsonData.Humidity = `${data.main.humidity} %`;
    jsonData.Sunrise = `${new Date(data.sys.sunrise * 1000).toLocaleString()}`;
    jsonData.Sunset = `${new Date(data.sys.sunset * 1000).toLocaleString()}`;
    jsonData.Visibility = `${data.visibility} Meters`;
    jsonData.Name = `${data.name}`;
    appendToHtml();
  }

  $('#searchButton').click((e) => {
    e.preventDefault();
    fetchData($('#cityInput').val())
      .then((data) => inputTheData(data));
  });
});
