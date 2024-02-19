// FormularioAdicaoPersonagem.js
import React, { useState } from 'react';

const FormularioAdicaoPersonagem = ({ onAdicionarPersonagem }) => {
  const [formData, setFormData] = useState({
    nome: '',
    altura: '',
    idade: '',
    origem: '',
    raca: '',
    tipo: '',
    descricao: '',
    imagemUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, origem, tipo, descricao, imagemUrl } = formData;
    if (nome.trim() === '' || origem.trim() === '' || tipo.trim() === '' || descricao.trim() === '' || imagemUrl.trim() === '') {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    onAdicionarPersonagem(formData);
    setFormData({
      nome: '',
      altura: '',
      idade: '',
      origem: '',
      raca: '',
      tipo: '',
      descricao: '',
      imagemUrl: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
      </label>
      <label>
        Altura:
        <input type="text" name="altura" value={formData.altura} onChange={handleChange} />
      </label>
      <label>
        Idade:
        <input type="text" name="idade" value={formData.idade} onChange={handleChange} />
      </label>
      <label>
        Origem:
        <input type="text" name="origem" value={formData.origem} onChange={handleChange} />
      </label>
      <label>
        Raça:
        <input type="text" name="raca" value={formData.raca} onChange={handleChange} />
      </label>
      <label>
        Tipo:
        <select name="tipo" value={formData.tipo} onChange={handleChange}>
          <option value="">Selecione...</option>
          <option value="Herói">Herói</option>
          <option value="Vilão">Vilão</option>
        </select>
      </label>
      <label>
        Descrição:
        <textarea name="descricao" value={formData.descricao} onChange={handleChange} />
      </label>
      <label>
        URL da Imagem:
        <input type="text" name="imagemUrl" value={formData.imagemUrl} onChange={handleChange} />
      </label>
      <button type="submit">Adicionar Personagem</button>
    </form>
  );
};

export default FormularioAdicaoPersonagem;
