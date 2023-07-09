# React Auto Complete Place Example

This project serves as an exemplary demonstration of integrating the Google Autocomplete API with React Redux.

## Configuration

Rename file `.env.example` to `.env` and put your `GOOGLE_API` to `REACT_APP_GOOGLE_API_KEY`

## Installation

Before install this project you need to install these dependencies to your local computer

- NodeJS v16.13.1 and up
- Yarn v.1.22.17 and up

To install the project, you can execute the following command using either the package manager yarn or npm:

```
yarn install
```

or

```
npm install
```

By running this command, all the necessary dependencies for the project will be installed.

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Project Structure

```
.
├── public # Static file, mostly html and some static image
├── src # All source of project in this folder
| ├── components # Reusable component will content on this folder
| ├── constants # All reusable constant variables
| ├── containers # Container of the page that consists of smaller components
| ├── hooks # Custom Hooks declare in this folder
| ├── layouts # Contain layout for project
| ├── pages # All pages for project
| ├── redux # Redux function, store, reducer contain here
| ├── types # Only for common typescript to guard your JS code
```