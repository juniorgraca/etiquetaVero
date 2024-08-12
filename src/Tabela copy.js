import React, { useState } from 'react';
import './Tabela.css';

const Tabela = () => {
  const [dados, setDados] = useState([]);
  const [codigo, setCodigo] = useState('');
  const [name, setName] = useState('');
  const [armazem, setArmazem] = useState('');

  const handleChangeCodigo = (event) => setCodigo(event.target.value);
  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeArmazem = (event) => setArmazem(event.target.value);

  const handleAddItem = () => {
    const novoItem = {
      codigo,
      nome: name,
      armazem
    };
    setDados([...dados, novoItem]);
    setCodigo('');
    setName('');
    setArmazem('');
  };

  const splitIndex = Math.ceil(dados.length / 2);
  const dadosColuna1 = dados.slice(0, splitIndex);
  const dadosColuna2 = dados.slice(splitIndex);

  return (
    <div className="tabela-container">
      <div className="info-section">
        Bem-vindo ao gerador de etiqueta da Rede Conect VERO - Feito por Júnior Graça
        <div className="area-dados">
          <input
            type='text'
            placeholder='Digite o código do produto'
            value={codigo}
            onChange={handleChangeCodigo}
          />
          <input
            type='text'
            placeholder='Digite o nome do produto'
            value={name}
            onChange={handleChangeName}
          />
          <input
            type='text'
            placeholder='Digite o armazém do produto'
            value={armazem}
            onChange={handleChangeArmazem}
          />
          <button onClick={handleAddItem}>Adicionar</button>
        </div>
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
                    <div className="codItemBottom">Armazém: {dadosColuna1[rowIndex].armazem}</div>
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
                    <div className="codItemBottom">Armazém: {dadosColuna2[rowIndex].armazem}</div>
                  </>
                ) : (
                  <div>&nbsp;</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
