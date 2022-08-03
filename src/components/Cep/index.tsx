import {  useState } from "react"

import { FiSearch } from "react-icons/fi"
import { api } from "../../services/api"

import './style.css'

interface Props {
    cep?: string
    logradouro?: string
    complemento?: string
    bairro?: string
    localidade?: string
    uf?: string
}

export const Cep = () => {
    const [ input, setInput] = useState('')
    const [ valueCep, setValueCep] = useState<Props>({})

   

    async function HandleValueClick() {

        if(input === '') {
            alert("Preencha algum CEP")
            return
        }

        try {
           const response = await api.get(`${input}/json`) 
           setValueCep(response.data)
           setInput('')

            
        } catch (error) {
            alert("Erros Digite novamente")
            setInput('')
        }
        
    }

    return (
        <div className="container">
        <h1>Buscar CEP</h1>
       
       <div className="container-input">

        <input className="input-cep" type="text" placeholder="Digite o seu CEP..." value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="button-buscar" onClick={HandleValueClick}>
            <FiSearch size={25}/>
        </button>
       </div>

        {Object.keys(valueCep).length > 0 && (
            <div className="main-container">
        
            <h2>CEP {valueCep.cep}</h2>

            <span>{valueCep.logradouro}</span>

            <span>{valueCep.complemento}</span>

            <span>{valueCep.bairro}</span>

            <span>{valueCep.localidade} - {valueCep.uf}</span>
        </div>
        ) }
     
        </div>

    )
}