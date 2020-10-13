const http = require('http');
const fs = require('fs');
// console.log(server)

const server = http.createServer((request, response) => {

    console.log(`Looking for ${request.url}`)
    if (request.url === '/') {
        response.writeHead(200, {
            'content-type': 'text/html'
        });
        const readStream2 = fs.createReadStream(__dirname + '/index.html');
        readStream2.pipe(response);

    } else if (request.url === '/users') {
        response.writeHead(200, {
            'content-type': 'application/json'
        })
        const obj = [{
                name: 'Flo',
                email: 'flo@me.com',
            },
            {
                name: 'Josh',
                email: 'josh@me.com',
            },
        ];
        response.end(JSON.stringify(obj))
    } else if (request.url === '/text') {
        response.writeHead(200, {
            'content-type': 'text/plain'
        })
        const readStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8')

        readStream.pipe(response)
    }else if(request.url === '/about'){
// if(err){throw err}
response.writeHead(200,{
    'content-type':'text/html'
});
const readStream2 = fs.createReadStream(__dirname + '/about.html')
readStream2.pipe(res);
    }
    //writes a header, takes in a status code
    //header
    //end response /send message to browser
    // response.end('This is my first Node Server');
    // const readStream2 = fs.createReadStream(__dirname + '/new.html').pipe(response);
    // readStream2.pipe(response);



});


//control+c is how you stop the server

//last piece, for it to listen
//first argument is the port that you want ot create
//second argument, notes
server.listen(3000, () => {
    console.log('Server listening on port 3000')
});

//request and response data , creates headers
//metadata for the response