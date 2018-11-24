const models = require('../models')
const {User} = models

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SALT = 8
const SECRET = 'SECRET'


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
            const {id, email} = user
            res.status(200).send({
              success: true,
              id,
              email
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
  User.findOne({where: {email: req.body.email}})
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