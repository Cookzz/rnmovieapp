## React Native Movie App

No specific name for this app - was created for test assessment and now moved into a public repo instead.

## Pre-requisites

Get your [API key here](https://developers.themoviedb.org/4/getting-started/authorization) before getting started and put it in `AppConst` file.

## Getting Started

To get started, run the following command to start running the app in a debug environment:

```
yarn full-clean-oldarch && npx react-native run-android
```

A few of the libraries used do not have support for the new architecture, so a specific yarn script was created to disable the new architecture.

## Notes


### Creating a release apk

A release APK has been provided ahead of time (refer to the releases section). However, if you wish to assemble a release version of the app, please run the following yarn script command:

```
yarn release-apk
```

### Getting Movie List

Note that if a simulator is being used to test, the region/country that the app will detect to get a list of movies will be *US* region so a physical device is recommended if you wish to test to get a list of movies at your current region/country.