import React, { useState } from 'react';
import styles from './Tabela.module.css';

const Tabela = () => {
  const [imagemModal, setImagemModal] = useState(null);

  const servicos = [
    { nome: 'Box Braids', preco: '300,00', imagem: '/imagens/box-braids.jpg' },
    { nome: 'Gypsi Braids', preco: '400,00', imagem: '/imagens/gypsi-braids.jpg' },
    { nome: 'Knotless Braids', preco: '350,00', imagem: '/imagens/knotless-braids.jpg' },
    { nome: 'Nagô/Ghana', preco: '200,00', imagem: '/imagens/nago-ghana.jpg' },
    { nome: 'Nagô Masculina', preco: '100,00', imagem: '/imagens/nago-ghana.jpg' },

];

  const abrirModal = (imagem) => {
    setImagemModal(imagem);
  };

  const fecharModal = () => {
    setImagemModal(null);
  };

  return (
    <div className={styles.tabelaContainer}>
      <h2 className={styles.titulo}>RICH HAIR - Tabela de Preços</h2>
      <table className={styles.tabelaPrecos}>
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map((servico, index) => (
            <tr key={index}>
              <td>
                <span
                  onClick={() => abrirModal(servico.imagem)}
                  className={styles.servicoLink}
                >
                  {servico.nome}
                </span>
              </td>
              <td>{`R$ ${servico.preco}`}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {imagemModal && (
        <div className={styles.modal} onClick={fecharModal}>
          <div className={styles.modalContent}>
            <img src={imagemModal} alt="Serviço" className={styles.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabela;
