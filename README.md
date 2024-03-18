# react-dropbox-api
React app using DropboxAPI (JS SDK) with ability to load folders and files from your dbx app account, specify path, create folders, delete files and folders and navigate through parent and children folders.

![image_2024-03-18_17-39-13](https://github.com/Tigrathaboi/react-dropbox-api/assets/47396710/45807559-8b0a-4c65-b038-189ac635c3a8)

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
1. You can watch and navigate through sorted files and folders system of created Dropbox app
2. You can navigate to specified path using first input field
3. You can create new folders with specified path using second input field
4. You can delete folders and files from your Dropbox app
