const path = require('path');


module.exports = {
    "rootDir": path.resolve(__dirname),
    "moduleNameMapper": {
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    "setupFilesAfterEnv": [
        "@testing-library/jest-dom/extend-expect"
    ]
};