const atributosService = require('../services/chacal/atributos.service');
const itensService = require('../services/chacal/itens.service');
const notasService = require('../services/chacal/notas.service');
const magiaService = require('../services/chacal/magia.service');
const protecaoService = require('../services/chacal/protecao.service');
const classeService = require('../services/chacal/classe.service');
const habilidadesService = require('../services/chacal/habilidades.service');
const personagemService = require('../services/chacal/personagem.service');

const saveAtributos = async(req, res) =>{
    let {
        //PODER
        totalPoder,
        sorte,
        vontade,
        magia,
        manaAtual,
        manaMax,
        //MERTE
        totalMente,
        percepcao,
        persuasao,
        sapiciencia,
        sanidadeAtual,
        sanidadeMax ,
        //CORPO
        totalCorpo,
        forca,
        destreza,
        vigor,
        vidaAtual,
        vidaMax,
    } = req.body;

    //Salva no banco de dados.
    const atributos = await atributosService.saveService(req.body);

    res.status(201).send({
        message:"Atributos criado com sucesso",
        atributos:{
            id: atributos._id,
            //PODER
            totalPoder,
            sorte,
            vontade,
            magia,
            manaAtual,
            manaMax,
            //MERTE
            totalMente,
            percepcao,
            persuasao,
            sapiciencia, 
            sanidadeAtual,
            sanidadeMax,
            //CORPO
            totalCorpo,
            forca,
            destreza,
            vigor,
            vidaAtual,
            vidaMax
        }
    })
}

const saveItens = async(req, res) =>{
    let{
        inventario,
        dinheiro,
        banco
    } = req.body

    const itens = await itensService.saveService(req.body);
    
    res.status(201).send({
        message:"itens criado com sucesso",
        atributos:{
            id: itens._id,
            inventario,
            dinheiro,
            banco
        }
    });
}

const saveNotas = async(req, res) =>{
    let{
        nome,
        idade,
        nivel,
        anotacoes
    } = req.body;

    const notas = await notasService.saveNotas(req.body);

    res.status(201).send({
        message:"Notas criado com sucesso",
        atributos:{
            id: notas._id,
            nome,
            idade,
            nivel,
            anotacoes
        }
    });
}

const saveMagia = async(req, res) =>{
    let{
        alcance,
        duracao,
        tempo,
        efeito,
        descricao,
        custoTotal
    } = req.body;

    const magia = await magiaService.saveService(req.body);

    // Arruma dps
    custoTotal = alcance + duracao + tempo + efeito;

    res.status(201).send({
        message:"Magia criado com sucesso",
        atributos:{
            id: magia._id,
            alcance,
            duracao,
            tempo,
            efeito,
            descricao,
            custoTotal
        }
    })
}

const saveProtecao = async(req, res) =>{
    let{
        cabeca,
        costas,
        torco,
        maos,
        pernas,
        pes
    } = req.body;

    const protecao = await protecaoService.saveService(req.body);

    res.status(201).send({
        message:"Proteção criado com sucesso",
        atributos:{
            id: protecao._id,
            cabeca,
            costas,
            torco,
            maos,
            pernas,
            pes
        }
    })
}

const saveClasse = async(req, res) =>{
    let{
        nome,
        ativa,
        passiva
    } = req.body;

    const classe = await classeService(req.body);

    res.status(201).send({
        message:"Classe criado com sucesso",
        atributos:{
            id: classe._id,
            nome,
            ativa,
            passiva
        }
    })
}

const saveHabilidades = async(req, res) =>{
    let {
        antropologia,
        arqueologia,
        biologia,
        idiomas,
        historia,
        medicina,
        ocultismo,
        teologia,
        avaliarHonestidade,
        convencimento,
        intimidacao,
        empatia,
        bajulacao,
        credito,
        manha,
        tratoPolicial,
        arrombamento,
        cienciaForense,
        farmacia,
        fotografia,
        oficio,
        sobrevivencia,
        arte,
        astronomia,
        armasBrancas,
        armasFogo,
        atletismo,
        briga,
        fuga,
        furtividade,
        reparosMecanicos,
        sentirPerigo
    } = req.body;
    
    const habilidades = await habilidadesService.saveService(req.body);

    res.status(201).send({
        message:"Habilidades criado com sucesso",
        habilidades:{
            id: habilidades._id,
            antropologia,
            arqueologia,
            biologia,
            idiomas,
            historia,
            medicina,
            ocultismo,
            teologia,
            avaliarHonestidade,
            convencimento,
            intimidacao,
            empatia,
            bajulacao,
            credito,
            manha,
            tratoPolicial,
            arrombamento,
            cienciaForense,
            farmacia,
            fotografia,
            oficio,
            sobrevivencia,
            arte,
            astronomia,
            armasBrancas,
            armasFogo,
            atletismo,
            briga,
            fuga,
            furtividade,
            reparosMecanicos,
            sentirPerigo
        }
    });
}

const savePersonagem = async(req, res) =>{
    let {
        atributos,
        classe,
        habilidades,
        itensEquip,
        notas,
        protecao,
        avatar,
        username
    } = req.body;

    if(!atributos || !classe || !habilidades || !itensEquip || !notas || !protecao){
        res.status(401).send({message:"Erro ao preencher o formulario, preencha todos os campos"});
    }
    if(!avatar){
        delete req.body.avatar;
    }


    const personagem = await personagemService.saveService(req.body);

    res.status(201).send({
        message:"Personagem criado com sucesso",
        personagem:{
            id: personagem._id,
            atributos,
            classe,
            habilidades,
            itensEquip,
            notas,
            protecao,
            avatar,
            username
        } 
    }); 
}

const viewPersonagem = async(req, res) =>{
    const id = req.params.id;

    const personagem = await personagemService.viewPersonagem(id)
    .populate('atributos')
    .populate('classe')
    .populate('habilidades')
    .populate('itensEquip')
    .populate('notas')
    .populate('protecao')
    .populate('avatar')
    .populate('username', 'username');
    
    res.status(200).send(personagem);
}

const listaPersonagens = async(req, res) =>{
    const personagem = await personagemService.listaPersonagens()
    .populate('atributos')
    .populate('classe')
    .populate('habilidades')
    .populate('itensEquip')
    .populate('notas')
    .populate('protecao')
    .populate('username', 'username');

    res.status(200).send(personagem);
}

const listaSeusPersonagens = async(req, res) =>{
    const userId = req.params.userId

    const personagem = await personagemService.viewPersonagemPorUsuario(userId)
    .populate('atributos')
    .populate('classe')
    .populate('habilidades')
    .populate('itensEquip')
    .populate('notas')
    .populate('protecao')
    .populate('username', 'username');

    res.status(200).send(personagem);
}

const updateFicha = async(req, res) =>{
    const personagemId = req.params.id;
    const {
        atributos,
        habilidades,
        itensEquip,
        notas,
        protecao
    } = req.body;
   
    //Busca os ids que são registrados no personagem
    const ids = await personagemService.viewPersonagem(personagemId);
    

    try{
        //Atualiza no banco de dados cada campo do personagem separadamente.
        // Atualização de dados dos Atributos.
        const atributosAtualizados = await atributosService.updateAtributos(ids, atributos);
        if(!atributosAtualizados){
            return res.status(404).send({message: "Atributos não encontrados"});
        }
    
        // Atualização de dados das Habilidades.
        const habilidadesAtualizadas = await habilidadesService.updateHabilidades(ids, habilidades);
        if(!habilidadesAtualizadas){
            return res.status(404).send({message: "Habilidades não encontrados"});
        }

        // Atualização de dados dos Itens.
        const itensAtualizados = await itensService.updateItens(ids, itensEquip);
        if(!itensAtualizados){
            return res.status(404).send({message: "Itens não encontrados"});
        }

        // Atualização de dados das Notas.
        const notasAtualizadas = await notasService.updateNotas(ids, notas);
        if(!notasAtualizadas){
            return res.status(404).send({message: "Notas não encontradas"});
        }

        // Atualização de dados das Proteções.
        const protecaoAtualizada = await protecaoService.updateProtecao(ids, protecao);
        if(!protecaoAtualizada){
            return res.status(404).send({message: "Protecao não encontrada"});
        }

        res.status(200).send({message:`Personagem atualizado com sucesso`});
    }catch(error){
        console.error(error);
        
        res.status(500).send({message: "Erro ao atualizar personagem", error: error.message}); 
    }
}

module.exports = {
    saveAtributos, 
    saveItens, 
    saveNotas, 
    saveMagia, 
    saveProtecao, 
    saveClasse, 
    saveHabilidades,
    savePersonagem,
    viewPersonagem,
    listaPersonagens,
    listaSeusPersonagens,
    updateFicha
};   