const express   = require('express');
const app       = express();
const cors      = require('cors');
let bodyParser  = require('body-parser');
const router    = require('./routes');
const db        = require('./models');
const { PORT }  = require('./config');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/view'));
app.use('/player', router.playerRoutes);

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => res.render('index'));

db
  .sequelize
  .sync()
  .then(res => {
    app.listen(PORT, async () => {
        console.log('Our app is running on http://localhost:' + PORT);
    });
  })
  .catch(err => {
    console.log(err.message);
  })
