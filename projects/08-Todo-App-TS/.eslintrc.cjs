module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "love",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "files": ['*.js', '*.jsx', '*.ts', '*.tsx'],
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project":'./tsconfig.json'
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
