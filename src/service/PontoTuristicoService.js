import {prisma} from "../lib/prisma.js";

class PontoTuristicoService {

    
    async listarPontosTuristicos() {
        const listaPontosTuristicos = await prisma.pontoTuristico.findMany();
        return listaPontosTuristicos;
    }

    async pegarPontoTuristicoPorId(req) {
        const {id} = req.params;
        console.log(id);
        const pontoTuristico = await prisma.pontoTuristico.findUnique({
            where: {
                id: id
            }
        });
        return pontoTuristico;
    }

    async cadastrarPontoTuristico(req) {
        const {nome,latitude,longitude,foto} = req.body;
        const ponto = await prisma.pontoTuristico.create({
            data: {
                nome,
                latitude,
                longitude,
                foto
            }
        });
        return ponto;
    }

    

    
}

export default PontoTuristicoService;