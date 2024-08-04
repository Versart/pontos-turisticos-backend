import {prisma} from "../lib/prisma.js"
import PontoTuristicoService from "../service/PontoTuristicoService.js";

const pontoTuristicoService = new PontoTuristicoService();

class PontoTuristicoController {

    
    async listarPontosTuristicos(req, res) {
        const pontosTuristicos = await pontoTuristicoService.listarPontosTuristicos();
        res.status(200).json(pontosTuristicos);
    }

    async pegarPontoTuristicoPorId(req, res) {
        const pontoTuristico = await pontoTuristicoService.pegarPontoTuristicoPorId(req);
        return res.status(200).json(pontoTuristico);
    }

    async cadastrarPontoTuristico(req, res) {
        const pontoTuristicoCadastrado = await pontoTuristicoService.cadastrarPontoTuristico(req);
        res.status(201).json(pontoTuristicoCadastrado.id);
    }
}

export default PontoTuristicoController;