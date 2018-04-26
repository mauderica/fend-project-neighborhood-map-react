# My Neighborhood Map - React Project

## Table of Contents

* [Instructions For Set-Up](#instructions-for-set-up)
* [Dependencies](#dependencies)
* [How The App Works](#how-the-app-works)
* [Contributing](#contributing)

## Instructions For Set-Up

**To get started**:
* Download all project files
* Go to a command line terminal at the project's root directory, and from there:
    * Install all project dependencies with `npm install`
    * Start the development server with `npm start`

**To enable location data fetching from the Foursquare API**:
* Setup a developer account with [Foursquare Developers](https://developer.foursquare.com/docs/api/getting-started)
* Follow the steps at the link above to obtain your own **client ID** and **secret key**
* Follow the instructions in the file [credentials_example.js](credentials_example.js)
* Save and restart the development server with `npm start`

**To test the offline-first service worker locally**:
* Build the application - using `npm run build`
* Run a simple http server from your build directory, and make sure that:
    * `index.html` is served, and
    * Requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file. (For more details see: [create-react-app deployment instructions](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment))
* **Important Note**: The service worker will _not_ work unless the application is run from the build directory.

## Dependencies

* favicon
* react
* react-dom
* google-maps-react
* react-scripts
* credentials.js

## How The App Works

This is a single page application featuring a map of Nashville with vegan dining locations presented.

The application has a sidebar which can be opened and closed via the hamburger menu button. The sidebar contains a filter which enables the user to sort the featured locations by dining categories.

To see more information about a particular location, simply click on a map marker, or select a location listed in the sidebar.

Note: Data for location details is provided by the [Foursquare API](https://developer.foursquare.com/).

## Contributing

Contributions are welcome!