const { User } = require('../models');

const userData = [
  {
    name: 'Adrew Garfunkle',
    address: '1 Ingroom St.',
    phone_number: 9175564568,
    email: 'spoodermon@gmail.com',
    password:'notthelamespiderman1',
    isAdmin: true,
  },
  {
    name:'Tober McGoore',
    address:'2 Ingrown St.',
    phone_number:7185648659,
    email:'iamfirstspooderman@gmail.com',
    password:'ishootwebsinsideme1',
    isAdmin: false,
  },
  {
    name:'Tim Hoyander',
    address:'19 ingram st',
    phone_number:3478791236,
    email:'ididnotkillmysterio@gmail.com',
    password:'tonystarkchild3000',
    isAdmin:false,
  },
  {
    name:'Zendoyer Jones',
    address:'59 brooklyn St',
    phone_number:3478859945,
    email:'iamcollege@gmail.com',
    password:'dontmakemepressthisbutton63',
    isAdmin:false,
  },
  {
    name:'Mary Tomelli',
    address:'19 ingram st',
    phone_number:3478791237,
    email:'withhappydays@gmail.com',
    password:'withgreatpower99',
    isAdmin:false,
  },
  

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;