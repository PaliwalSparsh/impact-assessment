# Docstat-native-web

## Introduction

This is cross platform app for impact assessment using react-native and react-native-web.

It is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) so you can run `yarn web` in order to start up the development web server with all the hot reloading goodness you've come to expect.

It has then been integrated with [Create React Native App](https://github.com/react-community/create-react-native-app) and running `yarn ios` or `yarn android` will start the Expo packager. You can also run the project from the Expo XDE program.


## Get Started

1. `yarn install` to install all the packages.

A full list of the scripts defined in `package.json` is shown below.

| Script              | Action                                                  |
|---------------------|---------------------------------------------------------|
| `yarn web`          | Start CRA Development Build                             |
| `yarn build-web`    | Create production build for web                         |
| `yarn eject-web`    | Eject from CRA                                          |
| `yarn start-native` | Start the Expo packager                                 |
| `yarn eject-native` | Eject from Expo                                         |
| `yarn android`      | Start expo packager and install app to Android Emulator |
| `yarn ios`          | Start expo packager and install app to iOS Simulator    |
| `yarn test-native`  | Run testing script for mobile app                       |
| `yarn test-web`     | Run testing script for web app                          |
| `yarn test`         | Run both testing scripts                                |

Note: If you get `version mismatch error` while using `yarn ios`. Just perform `killall node`, this will kill all other node servers running that might be using other versions
of react-native. After this you can normally perform `yarn ios`. It will work like a charm.
Note: `yarn eject` will surface all the dependencies files like Webpack, babel, ESlint etc. This is present in the CRA, as CRA creators wanted developers to have full control over configurations. Eject should be used only if needed. **This is one way operation. Once you `eject`, you can't go back.**

## Naming Conventions
1. Use PascalCase for component names.
2. All folders will be in camelCase.

### References

- [React Native Web by Nicolas Gallagher](https://github.com/necolas)
- [Using react-native and react-native-web together](https://medium.com/@yannickdot/write-once-run-anywhere-with-create-react-native-app-and-react-native-web-ad40db63eed0) =
