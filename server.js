import main from './app/main.js';
import birds from './app/birds.js';
import { httpLogger, auth } from './bunddle/middle.js'
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// middelwares
// app.use(cors);

app.use(express.json());
// app.set('trust proxy', true);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use(middle.JSONParser);
// app.use(auth);
app.use(httpLogger);

// routing
// app.use('/', main);
// app.use('/', envSave);
// middle.JSONParser();
app.use('/birds', birds);

app.post('/post', (req, res) => {
  const body = req.body;
  console.log("/post");
  console.log(body);
  res.send("HIHI");
})

app.listen(port, () => {
  console.log(`server is listening at localhost: ${port}`);
})
