# PINPAD
PinPad is a React app which checks the pin entered by user and interacts according to user input.
The correct pin is hardcoded as `7777`. 

## Functionalities
If the correct pin is entered the padlock above the pin will be unlocked, and reset after 1 second. 
If a wrong pin is entered 3 times the pinpad will be disabled for 30 seconds. The remaining time of 30 seconds is rendered above the pinpad.
The remaining attempts for right passowrd are also rendered above the pinpad.

### Prerequisites

Check if `Node.js` is already installed by typing the following command on your terminal:
```
node -v
```

> If you do not already have Node.js installed please follow the instructions on [this guide](https://nodejs.org/en/download/package-manager/).

Check if `npm` is already installed by typing the following command on your terminal:
```
npm -v
```
>If you do not have npm already installed please follow the instructions on [this guide](https://www.npmjs.com/get-npm).

Check if `git` is installed on your machine enter the following command on your terminal:
```
git --version
```
>If you do not already have git installed on your machine please follow the instructions on [this guide](https://git-scm.com/).

* NOTE: the app is build with the following versions:
```
Node.js v8.9.1
npm v5.6.0
git v2.14.2
```
### Installation
Install all dependencies using the following command:
```
npm i
```
To run the server use the following command:
```
npm start
```
This will run the server and open the browser automatically. If you make any changes and save the changes process will automatically refresh and you will be able to see the results in the browser.

If you want to end the process hold `control` and press `c` in mac, if you are not using mac hold `ctrl` and press `c`. 


## Built With
ReactJS with create-react-app.
Used this project as an opportunity to learn how to use svg rather than using a standard input field or form elements.

>Please send me an email if you have any questions or suggestions. 
>semra.refkaewa@gmail.com