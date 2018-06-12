# Weather CLI with Geolocation

### Features

* Geolocation using given address, landmark or a ZIP code.
* Accurate weather status powered by DarkSky API.


### Getting Started

* Clone this project
* Install the dependencies by running `npm install` on your terminal


### Generating API Keys

* By default, I designated a file named `keys.js.~template~` under `config/` folder. Use this to fill-up your Google Geolocation and DarkSky API keys.


### Running the App

* I created two useable `.js` files (One uses callbacks, the other uses promises). You can run any of the two using the command: 

`node app.js` 

or 

`node app.promise.js`


### Additional Options

* To get the weather status of any address, landmark or a ZIP code, you can add `-a` or `-address` to the command.

Example: 

`node app.js -a "Luneta Park"`

`node app.js -a "1037 Lombard St. Philadelphia, USA"`

`node app.js -a "1632"`
