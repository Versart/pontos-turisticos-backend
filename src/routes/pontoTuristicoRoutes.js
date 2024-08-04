import express from "express";
import PontoTuristicoController from "../controller/PontoTuristicoController.js";

const routes = express.Router();
const pontoTuristicoController = new PontoTuristicoController();

routes.get("/pontosturisticos", (req,res) => pontoTuristicoController.listarPontosTuristicos(req,res));
routes.get("/pontosturisticos/:id", (req, res) => pontoTuristicoController.pegarPontoTuristicoPorId(req,res))
routes.post("/pontosturisticos", (req,res) => pontoTuristicoController.cadastrarPontoTuristico(req,res));
export default routes;