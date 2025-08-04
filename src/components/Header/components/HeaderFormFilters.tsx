import React from 'react';
import SelectorGroup from '../../Selector/SelectorGroup';
import { FaLocationDot } from 'react-icons/fa6';
import SelectorOption from '../../Selector/SelectorOption';

const cidades = [
    { id: 1, nome: "Fortaleza" },
    { id: 2, nome: "Natal" },
    { id: 3, nome: "João Pessoa" },
    { id: 4, nome: "Recife" },
    { id: 5, nome: "Salvador" },
];

const HeaderFormFilters = () => {
  return (
    <form >
        <SelectorGroup id='cidade' icon={<FaLocationDot />}>
            <SelectorOption value='' label='Escolha sua cidade:'/>
            {cidades.map((cidade) =>{
                return (
                    <SelectorOption 
                        key={cidade.id} 
                        value={cidade.nome} 
                        label={cidade.nome}
                    />
                )
            })}
        </SelectorGroup>
    </form>
  );
}

export default HeaderFormFilters;