import React, { useState } from 'react';

const RegisterEntradaSaida = ({ onSuccess, nextId }) => {
  const [camaraData, setCamaraData] = useState({
    camara1: { entrada: 0, saida: 0 },
    camara2: { entrada: 0, saida: 0 },
    camara3: { entrada: 0, saida: 0 },
    camara4: { entrada: 0, saida: 0 },
    camara5: { entrada: 0, saida: 0 },
  });

  const handleChange = (camara, tipo, value) => {
    setCamaraData((prev) => ({
      ...prev,
      [camara]: {
        ...prev[camara],
        [tipo]: Number(value),
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoRegistro = {
      id: nextId,
      ...camaraData,
    };

    onSuccess(novoRegistro);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Câmara {n} - Entrada</label>
            <input
              type="number"
              min="0"
              className="w-full border rounded px-3 py-1"
              value={camaraData[`camara${n}`].entrada}
              onChange={(e) => handleChange(`camara${n}`, 'entrada', e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Câmara {n} - Saída</label>
            <input
              type="number"
              min="0"
              className="w-full border rounded px-3 py-1"
              value={camaraData[`camara${n}`].saida}
              onChange={(e) => handleChange(`camara${n}`, 'saida', e.target.value)}
              required
            />
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Registrar
      </button>
    </form>
  );
};

export default RegisterEntradaSaida;
