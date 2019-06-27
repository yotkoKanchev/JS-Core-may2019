function listProcessor(commandsArray) {
    let obj = {
        'word' : '',
        'add' : function (text) {
            obj.word += text;
        },
        'remove' : function (text) {
            obj.word
        }
    };

    for (const [command, text] of commandsArray) {
        
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);