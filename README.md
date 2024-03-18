![image](https://github.com/Tigrathaboi/react-dropbox-api/assets/47396710/607f394c-1d19-4fbe-9c6d-211e7a6adaa4)# react-dropbox-api
React app using DropboxAPI (JS SDK) with ability to load folders and files from your dbx app account, specify path, create folders, delete files and folders and navigate through parent and children folders.

/Setup (node+npm needed)

In order to start app you need to:
1. Clone this project
2. Open project in VS Code
3. Open bash terminal and execute a command "npm install"
4. Visit https://www.dropbox.com/developers/apps to create your Dropbox app if you do not have one yet
5. Generete access token in the app settings
6. Open project in VS Code again and paste your access token in the .env file at VITE_API_TOKEN variable
7. Open bash terminal and execute a command "vite" in order to start app

/Usage

Here are some feature you can use at this app:
1. You can watch and navigate through files and folders system of created Dropbox app
2. You can navigate to specified path using first input field
3. You can create new folders with specified path using second input field
4. You can delete folders and files from your Dropbox app
