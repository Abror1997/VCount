const models = require('../models')
const {User} = models

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SALT = 8
const SECRET = 'VCountUZ:SECRET'


// exports.addNotice = (req, res) => {
//   User.findById(req.query.id)
//     .then(user => {
//       Notice.create(req.body)
//         .then(notice => {
//           notice.createUser(user)
//           res.status(200).send({
//             success: true,
//             user,
//             notice
//           })
//         })
//     })
// }

exports.register = (req, res) => {
  User.findOne({where: {email: req.body.email}})
    .then(user => {
      if(user) {
        res.status(200).send({
          success:false,
          message: 'Email already exists',
        }).end()
      } else {
        const password = bcrypt.hashSync(req.body.password, SALT)
        User.create({...req.body, password})
          .then(user => {
            const {id, username} = user
            res.status(200).send({
              success: true,
              id,
              username
            })
          })
        .catch(error => {
          res.status(404).send({
            success: false,
            error
          })
        })
      }
    })
    .catch(error => {
      res.status(404).send({
        success: false,
        error
      })
    }) 
}

exports.login = (req, res) => {
  User.findOne({where: {username: req.body.username}})
    .then(user => {
      if(!user) {
        res.status(200).send({
          success: false,
          message: 'User not found'
        }).end()
      }
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
      if(!passwordIsValid){
        res.status(200).send({
          isAuth: false,
          message: 'Password is incorrect'
        }).end()
      }
      const token = jwt.sign(user.id, SECRET)
      res.status(200).send({
        isAuth: true,
        token
      })
    })
    .catch(error => {
      res.status(404).send({
        success: false,
        error
      })
    })
}

exports.auth = (req, res) => {
  const token = req.headers.auth
  console.log('auth token', token)
  if(token) {
    jwt.verify(token, SECRET, (err,decode) => {
      console.log('token verification', err, decode)
      User.findOne( {where: {id: decode}} )
        .then(user => {
          if(user) {
            const {id, email, username} = user
            res.status(200).send({
              success: true,
              id,
              email,
              username
            })
          } else {
            res.status(401).send({
              success: false,
              message: 'uset not found'
            })
          }
        })
        .catch(error => {
          res.status(401).send({
            success: false,
            message: 'auth failed',
            error
          })
        })
    })
  } else {
    res.status(401).send({
      success: false,
      message: 'token not found'
    })
  }
}

// exports.get = (req, res) => {
//   if(req.query.id) {
//     User.findById(req.query.id)
//       .then(result => {
//         res.status(200).send({
//           success: true,
//           result
//         })
//       })
//       .catch(error => {
//         res.status(200).send({
//           success: false,
//           error
//         })
//       })
//   } else {
//     User.findAll()
//     .then(result => {
//       res.status(200).send({
//         success: true,
//         result
//       })
//     })
//     .catch(error => {
//       res.status(404).send({
//         success: false,
//         error
//       })
//     })
//   }
// }