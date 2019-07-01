let expect = require("chai").expect;

class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if(songs.length > 0){
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if(arr.length > 0){

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}



describe('SoftUniFy class works correctly', () => {
    it('constructor initialize allSongs as an empty object', () => {
        let currentInstance = new SoftUniFy();
        let actual = currentInstance.allSongs;
        let expected = {};

        expect(actual).to.eql(expected, 'allSongs is not initialized as an empty object')
    });

    it('test downloadSong will be added to allSongs', () => {
        let currentInstance = new SoftUniFy();
        currentInstance.downloadSong('Me', 'song', 'country');
        let actual = Object.keys(currentInstance.allSongs)[0];
        let expected = 'Me';
        expect(actual).to.be.equal(expected, 'downloadSong does not add the song in allSongs');
    });

    it('playSong returns a message with unpresent song', () => {
        let currentInstance = new SoftUniFy();
        let actual = currentInstance.playSong('song');
        let expected = `You have not downloaded a song song yet. Use SoftUniFy's function downloadSong() to change that!`
        expect(actual).to.be.equal(expected, 'playSong does not return the message correctly');

    });

    it('playSong returns the correct song', () => {
        let currentInstance = new SoftUniFy();
        currentInstance.downloadSong('Az', 'song', 'folk');
        let actual = currentInstance.playSong('song');
        let expected = 'Az:' + 
        '\nsong - folk';
        expect(actual).to.be.equal(expected, 'playSong does not return the song correctly');
    });

    it('songList returns the correct songs', () => {
        let currentInstance = new SoftUniFy();
        currentInstance.downloadSong('Az', 'song', 'folk');
        let actual = currentInstance.songsList;
        let expected = 'song - folk'
        expect(actual).to.be.equal(expected, 'songList does not return the song correctly');
    });

    it('songList returns the correct message with no songs in allSongs', () => {
        let currentInstance = new SoftUniFy();
        let actual = currentInstance.songsList;
        let expected = `Your song list is empty`
        expect(actual).to.be.equal(expected, 'songList does not return the message correctly');
    });

    it('rateArtist returns the average rate of votes', () => {
        let currentInstance = new SoftUniFy();
        currentInstance.downloadSong('Az', 'song', 'folk');
        let actual = currentInstance.rateArtist('Az');
        let expected = 0;
        expect(actual).to.be.equal(expected, 'rateArtis does not return the correctly average value');
    });
})