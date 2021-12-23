const path = require('path');
const express = require('express');
const routes =  require('./controllers')
const session = require('express-session');//importing the npm express-sessions
const exprhbs = require("express-handlebars")
const helpers = require("./utils/helpers")

const SequelizeStore = require('connect-session-sequelize')(session.Store)

const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

const sess = { //creating sessions
  secret: "super secret secret", //how do you make this dependent on the user? Meaning, how cna I make a session unique for each user?
  cookie: {
    maxAge: null, //session allows user to stay logged in until user cancels the session by logging out
    httpOnly: true,
    secure: false,
    sameSite: 'strict' //sameSite attribute limits the scope of the cookie; putting it as strict makes it so session is active within the the same domain name
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const hbs = exprhbs.create({helpers})

// app.set();
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening, connected to port ${PORT}`));
});
