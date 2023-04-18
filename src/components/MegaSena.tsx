import trevo from "../assets/trevo-megasena.png"
import "../styles/MegaSena.css";
import { useContext } from "react";
import useJogo from "../hooks/JogoHook";
import { Jogo } from "../types";
import Header from "./Header";
import Descricao from "./Descricao";
import ValorProximoPremio from "./ValorProximoPremio";
import Table from "./Table";
import Ganhadores from "./Ganhadores";
import DescricaoJogo from "./DescricaoJogo";
import { Link } from "react-router-dom";

function MegaSena() {
    const { megaSena, loaded } = useJogo();
    return (
        <>
            <div>
                <ul >
                    <li style={{ display: "inline-block", padding: "5px" }}><Link style={{ textDecoration: "none", color: "#930989",fontWeight:"bold" }} to="/lotofacil">Lotofácil</Link></li>
                    <li style={{ display: "inline-block", padding: "5px" }}><Link to="/megasena" style={{ textDecoration: "none", color: "#ddd",fontWeight:"bold" }}>Megasena</Link></li>
                    <li style={{ display: "inline-block", padding: "5px" }}><Link to="/quina" style={{ textDecoration: "none", color: "#260085",fontWeight:"bold" }}>Quina</Link></li>
                </ul>
            </div>

            <div className="container">
                <div className="col-1">
                    <Header trevo={trevo} jogo={"MEGASENA"} color={"#209869"} />
                    <Descricao data={megaSena.dataProximoConcurso} />
                    <ValorProximoPremio value={megaSena.valorEstimadoProximoConcurso} color={"#209869"} />


                </div>


                <div className="megasena-col-2">
                    <Table dezenas={megaSena.dezenas} type={"megasena"} />
                    <Ganhadores acumulado={megaSena.acumulado} quantidadeGanhadores={megaSena.quantidadeGanhadores} />
                    <DescricaoJogo numeroDoConcurso={megaSena.numeroDoConcurso} dataPorExtenso={megaSena.dataPorExtenso} />

                </div>


            </div>
        </>


    )
}

export default MegaSena;