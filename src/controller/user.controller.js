const userService = require('../services/usuario.service');


const saveUser = async(req, res) => {
    let{
        username,
        gmail,
        senha,
        avatar
    } = req.body;

    if(!username || !gmail || !senha){
        res.status(400).send({message: "Preencha os campos corretamente"});
    }
    if(!avatar){
        delete req.body.avatar
    }

    const user = await userService.saveService(req.body);

    if(!user){
        res.status(400).send({message:"Erro ao cadastrar usuario"});
    }

    res.status(201).send({
        message:"Usuario criado com sucesso",
        user:{
            id: user._id,
            username,
            gmail,
            senha,
            avatar
        }
    });
}

const viewUser = async(req, res) => {

    const usuario = await userService.viewUser()
    
    res.status(200).send(usuario);
}

const viewUserById = async(req, res) =>{
    const id = req.params.id;

    const usuario = await userService.viewUserById(id);

    res.status(200).send(usuario);
}

module.exports = {saveUser, viewUser, viewUserById};