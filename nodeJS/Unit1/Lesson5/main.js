const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();
app.on("request", (req, res) => {
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"

    });
    let responseMessage = "<h1>This will show on the screen.</h1>";
    res.end(responseMessage);
    console.log(req.method); //log the http method used
    console.log(req.url); //log the request URL
    console.log(req.headers); //log request headers
    const getJSONString = obj => {
        return JSON.stringify(obj, null, 2); //converts js object to a string
    }
    app.on("request", (req, res) => { //listens for requests
        var body = []; //creates an array to hold chunk contents.
        req.on("data", (bodyData) => { //Process it in another callback function
            body.push(bodyData); //add received data to body array
        });
        req.on("end", () => { //run code when data transmission ends
            body = Buffer.concat(body).toString();//converts body array to a string of text
            console.log(`Request Body Contents: ${body}`);
        });
        console.log(`Method: ${getJSONString(req.method)}`);
        console.log(`URL: ${getJSONString(req.url)}`);
        console.log(`Headers: ${getJSONString(req.headers)}`);
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
        let responseMessage = "<h1>This will show on the screen.</h1> ";
        res.end(responseMessage);
    });
    app.listen(port);
    console.log(`The server has started and is listening on port number:${port}`);

});
app.listen(port);
    console.log(`The server has started and is listening on port number:${port}`);