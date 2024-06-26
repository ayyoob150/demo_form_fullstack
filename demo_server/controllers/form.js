const FormModel = require('../models/form.model')

const formHanlderPost = async(req, res)=>{
     try{
        const result = FormModel({
            firstName : 'abbc'
        })
        result.save()
     }catch(e){

     }
}

module.exports = {formHanlderPost}