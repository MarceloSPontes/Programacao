import React, {useState} from 'react'

function Hooks() {

        const [ valor, setValor ] = useState(0);

        function funcAumentar (){
            setValor(valor +1);
        }

        function funcDiminuir(){
            setValor(valor -1);
        }

        return (
            <div>Quantidade de produtos adicionados: <b>{valor}</b>
            <button onClick={funcAumentar}>Adicionar +1</button>
            <button onClick={funcDiminuir}>Remover -1</button>
            </div>
        )    
}
export default Hooks
