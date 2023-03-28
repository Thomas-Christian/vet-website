import express = require('express');

const organization = express.Router();

const organizationModel = require('../models/organization');

// CREATE
organization.post('/', async (req, res) => {
  try {
    let { ...recievedData } = req.body;

    const newOrganization = await new organizationModel({
      ...recievedData,
    }).save();

    res.status(200).send(newOrganization);
  } catch (error) {
    res.status(500).json({ message: `Unable to add: ${error}` });
    console.log(error);
  }
});

// UPDATE 
organization.put('/:id', async (req, res) => {

  

  //console.log(selectedOrg)

  organizationModel.findByIdAndUpdate( req.params.id, { $inc: { totalRatings: 1, rating: parseInt(req.body.userRating) } },  { new: true } ).then(
    (updated: any) => {
      console.log(updated)
    }
  )



  res.json(req.params.id)
  
})

// GET BY CATEGORY
organization.get('/:category', async (req, res) => {
  try {
    
    const selectedCategory = await organizationModel.find({
      'tags': new RegExp(`${req.params.category}`, 'i')
    })
    
    // CHECK IF COMPANY WITH TAG IS FOUND
    if (selectedCategory.length > 0) {
      res.send(selectedCategory)
    }

    else {
      res.json( {message: `Can not find companies tagged ${req.params.category}`})
    }

    //console.log(selectedCategory.length)
  }

  catch (error) { 
    res.status(500).json({ message: `Unable to get: ${error}` })
  }
  
})


module.exports = organization;
