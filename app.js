import express from 'express';

const app = express();

const hostname = `127.0.0.1`;
const port = 8080;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})

app.get('/', (req, res) => {
    res.sendFile(`index.html`, { root: "./" }, (err) => {
        if (err) {
            return res.status(500).send("Internal Server Error");
        }
        console.log('home page')
    });
});

app.get('/about', (req, res) => {
    res.sendFile(`about.html`, { root: "./" }, (err) => {
        if (err) {
            return res.status(500).send("Internal Server Error");
        }
        console.log('about me page')
    });
});

app.get('/contact-me', (req, res) => {
    res.sendFile(`contact-me.html`, { root: "./" }, (err) => {
        if (err) {
            return res.status(500).send("Internal Server Error");
        }
        console.log('contact me page')
    });
});

app.use((req, res) => {
    res.status(404);
    res.sendFile(`404.html`, { root: "./" }, (err) => {
        if (err) {
            return res.status(500).send("Internal Server Error");
        }
        console.log('404 not found')
    });
});

export default app;