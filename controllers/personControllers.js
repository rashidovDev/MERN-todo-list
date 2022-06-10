//GetAllTravels
const Person = require("../models/Person.model")

//Method: GET
//Description : get all travels books

const getAllStaff = async (req, res) => {
    try{
        const team = await Person.find()

        res.status(200).json({
            message: 'success',
            team: team.reverse()
        })
    }
    catch (err){
        res.send(err)
    }
}


//Method: GET
//Description : get one  travel book by id 


const getStaffById = async (req, res) => {
    try {
      const staff = await Person.findById(req.params.id)
  
      if(!staff){
        return res.status(404).json({
          message: 'Not found'
        })
      }
  
      return res.status(200).json({
        message: 'success',
        travel
      })
    } catch (err) {
      res.send(err)
    }
  }
//Method: GET
//Description : add new post about somewhere

//Method:     POST
//Descr:      Add new travel book

const addStaffBook = async (req, res) => {

    try {
      const { firstName, lastName, phoneNumber, email } = req.body
  
      const newPerson = await Person.create({
        firstName,
        lastName,
        phoneNumber,
        email
      })
  
      res.status(201).json({
        message: 'success',
        newTravel
      })

    } catch (err) {
      res.send(err)
    }
  }

  //Method:     PUT
//Descr:      edit travel book by id

const updateStaffBook = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email } = req.body

    const updatedStaff = await Person.findByIdAndUpdate(req.params.id, {
      firstName,
      lastName,
      phoneNumber,
      email
    })
 
    res.status(200).json({
      message: 'success',
      updatedTravel
    })
  } catch (err) {
    res.send(err)
  }
}

//Method:     DELETE
//Descr:      Removing travel book by ID
const removePersonBook = async (req, res) => {
  try {
    await Person.findByIdAndRemove(req.params.id)

    res.status(200).json({
      message: 'Deleted',
    })
  } catch (err) {
    res.send(err)
  }
}

module.exports = {
    getAllStaff ,
    getStaffById,
    addStaffBook,
    updateStaffBook,
    removePersonBook
}



