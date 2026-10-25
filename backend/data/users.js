import bcrypt from 'bcryptjs'

const users = [
   {
      "name": "Clark Kent",
      "email": "clark.kent@dailyplanet.com",
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true,
   },
   {
      "name": "Bruce Wayne",
      "email": "bruce@wayneenterprises.com",
      password: bcrypt.hashSync('123456', 10),
      isAdmin: false,
   },
   {
      "name": "Diana Prince",
      "email": "diana@themyscira.org",
      password: bcrypt.hashSync('123456', 10),
      isAdmin: false,
   },
   {
      "name": "Barry Allen",
      "email": "barry.allen@ccpd.gov",
      password: bcrypt.hashSync('123456', 10),
      isAdmin: false,
   },
   {
      "name": "Hal Jordan",
      "email": "h.jordan@greenlanterncorps.net",
      password: bcrypt.hashSync('123456', 10),
      isAdmin: false,
   }
]

export default users;