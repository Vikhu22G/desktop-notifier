const notifier = require('node-notifier');
const https = require('https');
const path = require('path');

weather();

setInterval(weather, 10000);

function weather()
{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=a8a87ad6ba72503a0e9c3c6832e40da2&units=metric";
    https.get(url, function (response)
    {
        response.on('data', function (data)
        {
            let theData = JSON.parse(data);
            let summary = "Temperature: " + theData.main.temp + "\u00B0C\nHumidity: " + theData.main.humidity + "%\nDescription: " + theData.weather[0].description;
            notifier.notify(
                {
                    title: 'Weather Summary',
                    message: summary,
                    icon: path.join(__dirname, "weather-icon.png")
                }
            );
        });
    });
}

