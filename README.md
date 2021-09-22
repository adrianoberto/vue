# financeiro-site

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## HEROKU

- package.json
scripts: [
    "postinstall": "npm run build",
    "start": "node server.js"
]

- server.js (novo)
    var express = require('express')
    var path = require('path')
    var serveStatic = require('serve-static')

    var app = express()
    app.use(serveStatic(path.join(__dirname, 'dist')))

    var port = process.env.PORT || 5000
    app.listen(port)
    console.log('server started ' + port)

- variaveis
    heroku config:set NPM_CONFIG_PRODUCTION=false


