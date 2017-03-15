<p align="center" style="margin: 30px 0;">
  <img src="https://github.com/heldrida/punkbit-website-2017/blob/master/src/images/punkbit-cropped.png?201703151637" width="320">
</p>
<p align="center">
	The Punkbit Website!
</p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Clone the repository to your local environment, install any dependencies and install the packages. Run the development command to start a local server, run the test command to run unit tests and the build command to create a new version for release.
Use the `config.js` in the root to set any parameters, such as the `repository remote list`, it's recommended to use a PaaS like Heroku or alike to easy deployment.

### Pre-requisities

```
Nodejs & NPM
```

### Installing

```
npm install
```

## Quick look

<p align="center" style="margin: 30px 0;">
  <img align="center" src="https://raw.githubusercontent.com/heldrida/reactatouille-boilerplate/master/media/cli-gif-animation.gif?201702281714" width="500">
</p>

### Build for distribution

You must run the build commands to generate a bundle js, css, images, fonts, etc, to distribute it into your test, staging or production environments. To so, you can run the commands below, that will generate the files under the `/dist` directory.

```
gulp build --env staging
```

Or,

```
gulp build --env production
```

### Development

```
gulp
```

### Test runner

```
gulp test
```

### Tests

The tests are split in two different categories, Unit and End-to-end (integration) tests. These are run separately, there are two different tasks for that matter: `gulp unit_test` & `gulp end2end_test`.

### Preview the app for distribution

Run the command below to create a small web server to serve the app that exists for distribution ( remember to run the build command to create the `dist` directory for the desired `environment`).

```
gulp preview --env staging
```

Or

```
gulp preview --env production
```

### Build architecture

Find the source code under the `src` directory for javascript and `sass` for the stylesheets. Before modifying ensure that the development watcher is running by running the development watch command (see development notes). The `dist` directory holds the files ready for distribution.

## Built With

* ReactJS
* Webpack 2
* SASS
* ES2015
* GULP
* MOCHA
* CHAI
* ENZYME
* GSAP
* STANDARDJS
* UNIVERSAL / ISOMORPHIC

### Logo

<div>Icon Transformed from the original made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
