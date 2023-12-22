# How to run the application

## 1. Make sure you have node.js installed

## 2. Clone the repository 

## 3. The application displays weather data for Bangalore by default. By modifying the city name in the API URL, you can change this to a city of your choice.  
`const url = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";`

## 4. Change `${city}` with any other city name and `${apiKey}` with your own API Key.
You can create your own API Key using https://openweathermap.org/, which is free to use.

## 5. To run this project
Open a terminal inside the directory. Type `node app.js`
