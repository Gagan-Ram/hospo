// requiring with { } is important
const { doctors } = require('../models/index.models')


const save = async (insertDoctor) => {

    const result = await insertDoctor.save();
    return result;
}

const insert = async (newDoctor) => {

    const insertDoctor = new doctors(newDoctor)

    const documentInserted = await save(insertDoctor)
    /*
    or just
    const result = await newDoctor.save()

    */
    return documentInserted
}

const findByID = async (id) => {
    console.log("Inside services")
    // console.log(id)

    const foundedId = await doctors.find({ _id: id })
    console.log(foundedId)
    return foundedId

}

const findAndUpdateWithId = async (id, body) => {
    const filter = { _id: id }
    const updateObj = body

    const updatedDoctor = doctors.findOneAndUpdate(filter, updateObj, { new: true })
    return updatedDoctor

}

// const searchBySpeciality = async (query) => {

//     let { doctorstype, genderSelect, sort, fee } = query
//     // console.log(`genderSelect ---${genderSelect}\n sort---${sort}\n fee----${fee}`)

//     if (genderSelect || sort || fee) {
//         try {
//             if (sort == '' && fee == '') {
//                 console.log("hiii");
//                 return await doctors.find({ specializations: doctorstype, gender: genderSelect })
//             }
//             else if (genderSelect == '' && sort == '') {
//                 const [gte, lte] = fee.split("-")
//                 console.log(`gte-----${gte}    lte-----${lte}`)
//                 return await doctors.find({
//                     specializations: doctorstype,
//                     fee: { $gte: gte, $lte: lte }
//                 })
//             }
//             else if (genderSelect == '' && fee == '') {
//                 if (sort !== "years") {

//                     return await doctors.find({
//                         specializations: doctorstype,
//                     }).sort({
//                         fee: sort
//                     })
//                 }
//                 else {
//                     return await doctors.find({
//                         specializations: doctorstype,
//                     }).sort({
//                         experience: 1
//                     })
//                 }
//             }
//             else if (fee == '') {
//                 if (sort !== "years") {
//                     return await doctors.find({
//                         specializations: doctorstype,
//                         gender: genderSelect
//                     }).sort({
//                         fee: sort
//                     })
//                 }
//                 else {
//                     return await doctors.find({
//                         specializations: doctorstype,
//                         gender: genderSelect
//                     }).sort({
//                         experience: 1
//                     })
//                 }
//             }
//             else if (genderSelect == '') {
//                 const [gte, lte] = fee.split("-")
//                 if (sort !== "years") {
//                     return await doctors.find({
//                         specializations: doctorstype,
//                         fee: { $gte: gte, $lte: lte }
//                     }).sort({
//                         fee: sort
//                     })
//                 }
//                 else {
//                     return await doctors.find({
//                         specializations: doctorstype,
//                         fee: { $gte: gte, $lte: lte }
//                     }).sort({
//                         experience: 1
//                     })
//                 }
//             }
//             // else if (sort == '') {
//             //     const [gte, lte] = fee.split("-")
//             //         return await doctors.find({
//             //             specializations: doctorstype,
//             //             gender: genderSelect,
//             //             fee: { $gte: gte, $lte: lte }
//             //         })             
//             // }
//             else {
//                 const [gte, lte] = fee.split("-")
//                 if (sort !== "years") {
//                     return await doctors.find({
//                         specializations: doctorstype,
//                         gender: genderSelect,
//                         fee: { $gte: gte, $lte: lte }
//                     }).sort({
//                         fee: sort
//                     })
//                 }
//                 else {
//                     return await doctors.find({
//                         specializations: doctorstype,
//                         gender: genderSelect,
//                         fee: { $gte: gte, $lte: lte }
//                     }).sort({
//                         experience: 1
//                     })
//                 }
//             }
//         }
//         catch (error) {
//             res.status(500).json({
//                 message: "Couldn't find doctors",
//                 error,
//             })
//         }
//     }

//     return await doctors.find({ specializations: doctorstype })
// }


// code refactored by CHAT-GPT :))
const searchBySpeciality = async (query) => {
    console.log("Rise up baby");
    const { doctorstype, genderSelect, sort, fee } = query;
    let findQuery = { specializations: doctorstype };

    if (genderSelect) {
        findQuery.gender = genderSelect;
    }

    if (fee) {
        const [gte, lte] = fee.split("-");
        findQuery.fee = { $gte: gte, $lte: lte };
    }

    let sortQuery = {};

    if (sort === "years") {
        sortQuery.experience = 1;
    } else if (sort) {
        sortQuery.fee = sort;
    }

    try {
        const result = await doctors.find(findQuery).sort(sortQuery);
        return result;
    } catch (error) {
        throw new Error("Couldn't find doctors");
    }
};




module.exports = {
    // doctorsServices
    findByID,
    insert,
    findAndUpdateWithId,
    searchBySpeciality
}