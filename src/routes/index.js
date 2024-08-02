import pontosTuristicos from "./pontoTuristicoRoutes.js";
import express from "express";

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Bem vindo"));
    app.use(express.json(),pontosTuristicos);
};

export default routes;