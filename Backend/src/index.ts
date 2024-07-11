import express, { Express, Request, Response } from 'express';

const app = express();
const port = 80;

app.get('/', (req: Request, res: Response) => {
    res.send("Monke Deez")
})

app.listen(port, () => {
    console.log(`Server Running on Port: ${port}`)
})