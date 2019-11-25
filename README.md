# Vaani: Voice as an interface
Coming Soon. ⌛⌛🥺

Vaani is a platform that enables users to share their voice (securely, and anonymously) across media, and channels. It leverages existing technology built for various platforms, and aims to be only the interface for recording and sharing.

Actions speak louder than words, but until we can figure out how to record actions and share them, LET'S TALK!    
So come on and talk to me baby!

The project is divided into two parts; First the React.js based `app`, which is the root of the codebase, and second the backend Node.js based `api` which is under the folder of the same name.

## Setup
Vaani is a standalone React.js application, with a Node.js backend, which uses webpack for bundling, and babel for transpilation. We look to maintain a very minimal footprint to provide the fastest experience (sometimes at the cost of some fancy, unnecessary feature). The following steps apply for both the FE, and BE setup.
- Install the dependencies
    ```bash
    > npm install
    ```
- Setup the environment variables, using the provided sample
    ```bash
    # Rename the sample to the main env file
    > mv .env.sample .env
    # Then update the variables to required values
    ```

## React.js App
The following environment variables are available:
- `PUBLIC_URL`: The expected host where the app will be deployed. This value allows the app to be built once, and deployed anywhere, without relying on the deployed host for retreiving the app, and assets
- `REACT_APP_MODE`: Which mode the app is being built in. Possible options are - 
    1. `embed` builds the app as an embeddable iframe, and generates a script which allows the iframe to be automatically injected into the target HTML
    2. `webapp` builds a pre-designed single page app with Vaani embedded within. This is the default mode.
- `REACT_APP_API_HOST`: The backend URL which hosts the Vaani ReST API

## Node.js API
The following environment variables are available:
- Database details
    ```bash
    DATABASE_USER=<USER NAME>
    DATABASE_PWD=<PASSWORD>
    DATABASE_URL=<YOUR DB URL>
    DATABASE_PORT=<YOUR DB PORT>
    DATABASE_NAME=<DB TO CONNECT>
    ```
