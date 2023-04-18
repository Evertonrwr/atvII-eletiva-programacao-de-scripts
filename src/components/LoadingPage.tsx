import trevo from "../assets/trevo-lotofacil.png"
import "../styles/LotoFacil.css";
import { Contexto } from "../contexts";
import { useContext, useEffect } from "react";
import "../styles/LoadingPage.css"
import { GetJogo} from "../services/JogosService";
import { useNavigate } from 'react-router-dom';
function LoadingPage() {
    const { setLotoFacil, setMegaSena, setQuina} = useContext(Contexto)
    var history = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            GetJogo().then((r)=>{
                console.log(r)
                setLotoFacil(r.lotofacil)
                setMegaSena(r.megaSena)
                setQuina(r.quina)
                
            }).then(()=>{
                history("/lotofacil")
            })

        }, 3000)

    },[])
    return (
        <>

            <div className="loadingPage" >
                <div className="loading">
                    <h1>
                        Carregando..
                    </h1>
                </div>
                <div className="spinner">
                </div>

            </div>

        </>




    )
}
export default LoadingPage;