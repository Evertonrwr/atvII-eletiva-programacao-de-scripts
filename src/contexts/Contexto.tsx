import { createContext, useState } from "react";
import { Jogo, Props } from "../types";
import LoadingPage from "../components/LoadingPage";


const Contexto = createContext<Props>({} as Props);


function Provider({ children }: any) {
    
    const [megaSena, setMegaSena] = useState({} as Jogo);
    const [lotoFacil, setLotoFacil] = useState({} as Jogo);
    const [loaded, setLoaded] = useState(false)
    const [quina, setQuina] = useState({} as Jogo);
  
    return (
        <Contexto.Provider value={{ megaSena, lotoFacil, quina, loaded, setMegaSena, setLotoFacil, setLoaded, setQuina}}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider };

