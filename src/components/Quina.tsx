import trevo from "../assets/trevo-quina.png"
import useJogo from "../hooks/JogoHook";
import Header from "./Header";
import Descricao from "./Descricao";
import ValorProximoPremio from "./ValorProximoPremio";
import Table from "./Table";
import Ganhadores from "./Ganhadores";
import DescricaoJogo from "./DescricaoJogo";
import { Link } from "react-router-dom";

function Quina() {
    const { quina, loaded } = useJogo();
    return (
        <>
            <div>
                <ul >
                    <li style={{ display: "inline-block", padding: "5px" }}><Link style={{ textDecoration: "none", color: "#930989",fontWeight:"bold" }} to="/lotofacil">Lotofácil</Link></li>
                    <li style={{ display: "inline-block", padding: "5px" }}><Link to="/megasena" style={{ textDecoration: "none", color: "#209869",fontWeight:"bold" }}>Megasena</Link></li>
                    <li style={{ display: "inline-block", padding: "5px" }}><Link to="/quina" style={{ textDecoration: "none", color: "#ddd",fontWeight:"bold" }}>Quina</Link></li>
                </ul>
            </div>

            <div className="container">
                <div className="col-1">
                    <Header trevo={trevo} jogo={"QUINA"} color={"#260085"} />
                    <Descricao data={quina.dataProximoConcurso} />
                    <ValorProximoPremio value={quina.valorEstimadoProximoConcurso} color={"#260085"} />


                </div>


                <div className="quina-col-2">
                    <Table dezenas={quina.dezenas} type={"quina"} />
                    <Ganhadores acumulado={quina.acumulado} quantidadeGanhadores={quina.quantidadeGanhadores} />
                    <DescricaoJogo numeroDoConcurso={quina.numeroDoConcurso} dataPorExtenso={quina.dataPorExtenso} />

                </div>


            </div>
        </>


    )
}

export default Quina;