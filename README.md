# kn-musique-bot
“Without music, life would be a blank to me.”― Jane Austen

## Features

- Ban
- Userinfo
- Play music
- Skip songs
- Stop music
- Purge text messages

## Requirements

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [FFMPEG](https://www.ffmpeg.org/)
- [Docker](https://www.docker.com/) (optional)

## Getting started

First make sure you have all the required tools installed on your local machine then continue with these steps.

### Installation

```bash
# Clone the repository
git clone https://github.com/huyhoang8398/kn-musique-bot

# Enter into the directory
cd discord-bot/

# Install the dependencies
npm install
```

### Starting the application

```bash
node index.js
```

### Current list of available commands

!play URL - play a youtube song with provided URL

!stop - stop all the music

!skip - next song

!purge number- delete the last message in all chats

!userinfo - get information about user

!nowplaying - Get the song that is playing

!help - list all commands

!ban - ban a player

### Starting the application using Docker

```bash
# Build the image
docker build --tag discordbot .

# Run the image
docker run -d discordbot
```


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
