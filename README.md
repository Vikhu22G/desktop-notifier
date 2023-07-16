# How to run the application

1. Make sure you have node.js installed
2. Clone the repository 
3. Open a terminal inside the directory
4. Type `node app.js`

5. The application displays weather data for Bangalore by default. By modifying the city name in the API URL, you can change this to a city of your choice.  
`const url = "https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=a8a87ad6ba72503a0e9c3c6832e40da2&units=metric";`

6. Change `q=Bangalore` with any other city name.
