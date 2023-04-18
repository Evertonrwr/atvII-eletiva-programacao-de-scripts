import trevo from "../assets/trevo-lotofacil.png"
import "../styles/LotoFacil.css";
import { Contexto } from "../contexts";
import { useContext } from "react";
import Header from "./Header";
import descricao from "./Descricao";
import Descricao from "./Descricao";
import ValorProximoPremio from "./ValorProximoPremio";
import Table from "./Table";
import Ganhadores from "./Ganhadores";
import DescricaoJogo from "./DescricaoJogo";
import { Link } from "react-router-dom";
function LotoFacil() {
    const { lotoFacil, loaded } = useContext(Contexto)

    return (
        <>
            <div>
                <ul >
                    <li style={{ display: "inline-block", padding: "5px"}}><Link style={{textDecoration:"none", color: "#ddd" , fontWeight:"bold"}} to="/lotofacil">Lotofácil</Link></li>
                    <li style={{ display: "inline-block", padding: "5px" }}><Link to="/megasena" style={{textDecoration:"none", color: "#209869", fontWeight:"bold" }}>Megasena</Link></li>
                    <li style={{ display: "inline-block", padding: "5px"}}><Link to="/quina" style={{textDecoration:"none", color: "#260085",fontWeight:"bold"  }}>Quina</Link></li>
                </ul>
            </div>
            <div className="container" >
                <div className="col-1">
                    <Header trevo={trevo} jogo={"LOTOFÁCIL"} color={"#930989"} />
                    <Descricao data={lotoFacil.dataProximoConcurso} />
                    <ValorProximoPremio value={lotoFacil.valorEstimadoProximoConcurso} color={"#930989"} />

                </div>


                <div className="col-2">
                    <Table dezenas={lotoFacil.dezenas} type={"lotofacil"} />
                    <Ganhadores acumulado={lotoFacil.acumulado} quantidadeGanhadores={lotoFacil.quantidadeGanhadores} />
                    <DescricaoJogo numeroDoConcurso={lotoFacil.numeroDoConcurso} dataPorExtenso={lotoFacil.dataPorExtenso} />
                </div>

            </div>

        </>




    )
}
export default LotoFacil;