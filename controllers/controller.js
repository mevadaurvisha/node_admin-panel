
const dataBase = require('../models/signUp/signup-model');
const defaultcontroller =  async(req, res) => {
    const data = await dataBase.findOne({ _id: req.cookies.userId });
    if(req.cookies.userId){
        console.log("data",{data});
        
        res.render('index',{data})
    }else{
        res.redirect('login');
    }
    
}

module.exports = {defaultcontroller};