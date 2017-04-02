# react-cardster

a simple project for demonstrating some basic React and Webpack structure

![Cardster taking charge](/screenshot.png)

## directory structure

* `public` - contains (mostly) static assets for the app as well as our `index.html` entry point
* `src` - contains our React based modules which are transpiled with the help of webpack and babel
* `test` - contains the chai and enzyme unit tests

## developer installation

* `git clone https://github.com/erikyuzwa/react-cardster.git`
* `cd react-cardster`
* `npm install` or `yarn install`
* `num run webpack:dev` or `yarn run webpack:dev` to launch the development server
* open your browser to `http://localhost:3000/`

## running tests

The unit test suite is put together using chai and enzyme.

* `npm run test`

## production build

The production / deployable build of the app can be put together with:

* `npm run webpack`

At which point the entire `./public` folder should be deployable to a web server.

# License

MIT License

Copyright (c) 2017 Erik Yuzwa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.