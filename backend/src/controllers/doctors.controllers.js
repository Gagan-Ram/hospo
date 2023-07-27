// requiring with { } is important
const { findByID, insert, findAndUpdateWithId, searchBySpeciality } = require('../services/index.service')

// const doctorsServicesInstance = new doctorsServices();

const doctorsQuery = async (req, res) => {

    if (req.query.doctorstype === undefined) {
        res.json({ message: "At default Route" })
    }
    else {

        const query = req.query
        console.log(query)

            try {
                const results = await searchBySpeciality(query)
                console.log(results)
                res.json(results)
            }
            catch (error) {
                res.status(500).json({
                    message: "Couldn't find doctors",
                    error,
                })
            }
        }

}

const insertDoctors = async (req, res) => {
    const newDoctor = req.body
    console.log(newDoctor)

    try {

        const result = await insert(newDoctor)

        return res.json(result)
    }
    catch (error) {
        res.status(500).json({
            message: "Couldn't insert doctor",
            error,
        })
    }
}

const searchDoctorsById = async (req, res) => {
    const id = req.params.id
    console.log(typeof id + ' ' + id)
    try {
        console.log("inside search");

        const doctor = await findByID(id)
        res.json(doctor)
    }
    catch (error) {
        res.status(500).json({
            message: "Couldn't search for doctor",
            error,
        })
    }
}

const updateDoctorsWithId = async (req, res) => {
    const id = req.params.id
    console.log(id)

    const body = req.body

    try {
        const result = await findAndUpdateWithId(id, body)

        res.json(result)
    }
    catch (error) {
        res.status(500).json({
            message: `Couldn't search for doctor with id ${id} to update`,
            error,
        })
    }

}


module.exports = {
    doctorsQuery,
    insertDoctors,
    searchDoctorsById,
    updateDoctorsWithId

}