const models = require('../models')
const {Device} = models

exports.register = (req, res) => {
  Device.find({where: {
    data: {
      id: req.body.id
    }
  }})
    .then(device => {
      if(!!device) {
        res.status(200).send({
          success: false,
          message: 'device already exists',
        })
      } else {
        Device.create({data: req.body})
          .then(result => {
            result.createCompany({name: 'vcount.uz'})
              .then(x => {
                res.status(200).send({
                  success: true,
                  message: 'device registered successfully',
                  result
                })
              })
          })
          .catch(err => {
            res.status(200).send({
              success: false,
              message: 'register error',
              error: err
            })
          })
      }
    })
    .catch(err => {
      res.status(404).send({
        success: false,
        error: err
      })
    })
}