import React, { useState } from 'react';
import './Tabela.css';

const Tabela = () => {
  const [dados, setDados] = useState([]);
  const [codigo, setCodigo] = useState('');
  const [name, setName] = useState('');
  const [armazem, setArmazem] = useState('');
  const [map, setMap] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  // Função para atualizar o estado quando a checkbox é clicada
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleChangeCodigo = (event) => setCodigo(event.target.value);
  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeArmazem = (event) => setArmazem(event.target.value);
  const handleChangeMap = (event) => setMap(event.target.value);

  const handleAddItem = () => {
    const novoItem = {
      codigo,
      nome: name,
      armazem, map
    };
    setDados([...dados, novoItem]);
    setCodigo('');
    setName('');
    setArmazem('');
    setMap('')
  };

  const splitIndex = Math.ceil(dados.length / 2);
  const dadosColuna1 = dados.slice(0, splitIndex);
  const dadosColuna2 = dados.slice(splitIndex);

  return (
    
    <>
    
    <section className='no-print'>
    <div className="info-section" >
    
      <h1>
        Bem-vindo ao gerador de etiqueta da VERO - Feito por Júnior Graça
      </h1>
        <div className="area-dados">
        <p>Codigo do item</p>
          <input
            type='text'
            placeholder='Digite o código do produto'
            value={codigo} maxLength={20}
            onChange={handleChangeCodigo}
          />
          <p> Nome do item</p>
          <input
            type='text'
            placeholder='Digite o nome do produto'
            value={name} maxLength={20}
            onChange={handleChangeName}
          />
          <p> Armazém do item</p>
          <input
            type='text'
            placeholder='Digite o armazém do produto'
            value={armazem} maxLength={20}
            onChange={handleChangeArmazem}
          />
          <div className='areaInput'>
         
          <p> Mapa de almox    <p className='infotext'>(se não houver deixe em branco)</p> <input type="checkbox" className='inputChk'
          checked={isChecked}
          onChange={handleCheckboxChange}></input></p>
          
        
          <input
            type='text'
            placeholder='Digite o mapa onde encontra o produto'
            value={map} maxLength={20}
            onChange={handleChangeMap}
          />
          </div>
          <button onClick={handleAddItem}>Adicionar</button>
          </div>
          </div>
        
          </section>
        <div className="tabela-container">
      </div>
      <table>
        <tbody>
          {Array.from({ length: Math.max(dadosColuna1.length, dadosColuna2.length) }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                {dadosColuna1[rowIndex] ? (
                  <>
                    <div className="codItem">Código: {dadosColuna1[rowIndex].codigo}</div>
                    <div className="codItem">Nome: {dadosColuna1[rowIndex].nome}</div>
                    {isChecked ? (<>
                      <div className="codItem">Armazém: {dadosColuna1[rowIndex].armazem}</div>
                      <div className="codItemBottom">Map: {dadosColuna1[rowIndex].map}</div></>):
                      
                      (<>
                        <div className="codItemBottom">Armazém: {dadosColuna1[rowIndex].armazem}</div>
                        </>)}
                    
                  </>

                  
                ) : (
                  <div>&nbsp;</div>
                )}
              </td>
              <td>
                {dadosColuna2[rowIndex] ? (
                  <>
                    <div className="codItem">Código: {dadosColuna2[rowIndex].codigo}</div>
                    <div className="codItem">Nome: {dadosColuna2[rowIndex].nome}</div>
                    {isChecked ? (
                  <>
                  <div className="codItem"> Armazém: {dadosColuna2[rowIndex].armazem}</div>
                  <div className="codItemBottom">Map: {dadosColuna2[rowIndex].map}</div>
                  </>
        ) : (
          <>
                 <div className="codItemBottom"> Armazém: {dadosColuna2[rowIndex].armazem}</div>
                  </>
        )}
                
    </>
 ) : (
                  <div>&nbsp;</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
   
    </>
  );
};

export default Tabela;
