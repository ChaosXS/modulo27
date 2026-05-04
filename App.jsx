import React, { useState } from 'react';

const CalculadoraIMC = () => {
  // Estados para gerenciar as entradas de altura e peso [1]
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();
    if (altura && peso) {
      // Cálculo do IMC: peso / (altura * altura) [1]
      const alturaMetros = altura / 100;
      const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);
      
      // Determinação da classificação baseada no valor calculado [1]
      let classificacao = '';
      if (imc < 18.5) classificacao = 'Abaixo do peso';
      else if (imc < 25) classificacao = 'Peso normal';
      else if (imc < 30) classificacao = 'Sobrepeso';
      else if (imc < 35) classificacao = 'Obesidade Grau I';
      else if (imc < 40) classificacao = 'Obesidade Grau II';
      else classificacao = 'Obesidade Grau III';

      setResultado({ imc, classificacao });
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Calculadora de IMC</h2>
      {/* Formulário contendo os campos de altura e peso [1] */}
      <form onSubmit={calcularIMC}>
        <div style={{ marginBottom: '10px' }}>
          <label>Altura (cm): </label>
          <input 
            type="number" 
            value={altura} 
            onChange={(e) => setAltura(e.target.value)} 
            placeholder="Ex: 175"
            required 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Peso (kg): </label>
          <input 
            type="number" 
            value={peso} 
            onChange={(e) => setPeso(e.target.value)} 
            placeholder="Ex: 70"
            required 
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>

      {/* Retorno do IMC e a classificação na tela [1] */}
      {resultado && (
        <div style={{ marginTop: '20px', borderTop: '1px solid #ccc' }}>
          <h3>Resultado:</h3>
          <p><strong>Seu IMC:</strong> {resultado.imc}</p>
          <p><strong>Classificação:</strong> {resultado.classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default CalculadoraIMC;