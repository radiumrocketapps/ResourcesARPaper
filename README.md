# Resources in CPU and RAM performance assessment for different marker types in Augmented Reality applications

This repository hosts the necessary resources to replicate the experiment described in CPU and RAM performance assessment for different marker types in Augmented Reality applications

## Requirements

This page will help you set up your computer to be able to run and build the app.

- [Android Debug Bridge](https://developer.android.com/studio/command-line/adb/?gclid=Cj0KCQjwhb36BRCfARIsAKcXh6E8s-xHCIBXkW70m0qsImUgvclUGhnuOM_O8ZF5qcba218jn7T1cUwaArzeEALw_wcB&gclsrc=aw.ds)
- [Node Js](nodejs.org) v12.18.1
- [Wikitude SDK](https://www.wikitude.com/product/wikitude-sdk-trial/)
- [Cordova](https://cordova.apache.org/#getstarted)

## Installation

In order to set up the different projects, you will need to do the following steps:

1. Create an account on [Wikitude](https://signup.wikitude.com/)
2. Request a New Trial Key
3. Open the terminal
4. Move to one of the projects. Eg. `cd Projects/fiducial-markers`
5. Install dependencies `npm install`
6. Look for `this._sdkKey` on the project
7. Update `this._sdkKey` with the New Trial Key that was requested before
8. Run `cordova build android`
9. Run `cordova run android`
