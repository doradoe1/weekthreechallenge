function charactercount(string) {
    var length = string.length;
    characters = string
        .replace(/[.,?!;()"'-]/g, " ")
        .replace(/\s+/g, " ")
        .toLowerCase()
        .split(" ");

    characters.forEach(function (character) {
        if (!(length.hasOwnProperty(character))) {
            length[character] = 0;
        }
        length[word]++;
    });
    return length;
};

function wordcount(sentence) {
    var index = {},
        words = sentence
            .replace(/[.,?!;()"'-]/g, " ")
            .replace(/\s+/g, " ")
            .toLowerCase()
            .split(" ");

    words.forEach(function (word) {
        if (!(index.hasOwnProperty(word))) {
            index[word] = 0;
        }
        index[word]++;
    });

    return index;
};
readTextFile("file:///C:\revature\Challenges\week3\entry_txt.txt");
var http = require('http');

http.createServer(function (req, res) {
  res.write('Word Count, yeah?' + wordcount() + charactercount());
  res.end();
}).listen(8080);