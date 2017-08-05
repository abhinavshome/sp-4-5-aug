# sp-4-5-aug

# start a backend server

`npm install -g json-server`

`json-server --watch db.json --port 4000`

# db.json looks like

{movies: [{id: 1, title: 'Drishyam'}]}

# VS Code setting for hiding extra files

"files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js.map": true,
        "**/*.js": {"when": "$(basename).ts"}
    }
