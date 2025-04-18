import React, { useState } from 'react';
import Modal from '../Pages/Modal.js';
import RegisterEntradaSaida from '../Pages/Cadastro/RegisterEntradaSaida.jsx.jsx';
import { RegistroEstoque } from '../types/RegisterStoque.js';

const RegisterEstoqueTable = () => {
  const [registros, setRegistros] = useState<RegistroEstoque[]>([]);
  const [idCounter, setIdCounter] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRegisterSuccess = (novoRegistroParcial: Omit<RegistroEstoque, 'data'>) => {
    const dataAtual = new Date().toLocaleString();
    const novoRegistro: RegistroEstoque = {
      ...novoRegistroParcial,
      data: dataAtual,
    };
    setRegistros((prev) => [...prev, novoRegistro]);
    setIdCounter((prev) => prev + 1);
    setModalOpen(false);
  };

  const calcularTotalEstoque = (registro: RegistroEstoque) => {
    const entradas =
      registro.camara1.entrada +
      registro.camara2.entrada +
      registro.camara3.entrada +
      registro.camara4.entrada +
      registro.camara5.entrada;

    const saidas =
      registro.camara1.saida +
      registro.camara2.saida +
      registro.camara3.saida +
      registro.camara4.saida +
      registro.camara5.saida;

    return entradas - saidas;
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Controle de Estoque por Câmara</h2>

      <button
        onClick={() => setModalOpen(true)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Novo Registro
      </button>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={() => {}}
        title="Registrar Entrada/Saída"
      >
        <RegisterEntradaSaida onSuccess={handleRegisterSuccess} nextId={idCounter} />
      </Modal>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-center">
            <tr>
              <th rowSpan={2} className="p-2 border border-gray-300">ID</th>
              <th rowSpan={2} className="p-2 border border-gray-300">Data</th>
              {[1, 2, 3, 4, 5].map((n) => (
                <th key={`camara-${n}`} colSpan={2} className="p-2 border border-gray-300">
                  Câmara {n}
                </th>
              ))}
              <th rowSpan={2} className="p-2 border border-gray-300">Total em Estoque</th>
            </tr>
            <tr>
              {[1, 2, 3, 4, 5].map((n) => (
                <React.Fragment key={`sub-${n}`}>
                  <th className="p-2 border border-gray-300">Entrada</th>
                  <th className="p-2 border border-gray-300">Saída</th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {registros.length > 0 ? (
              registros.map((registro) => (
                <tr key={registro.id} className="text-center">
                  <td className="p-2 border border-gray-300">{registro.id}</td>
                  <td className="p-2 border border-gray-300">{registro.data}</td>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <React.Fragment key={`camara-${registro.id}-${n}`}>
                      <td className="p-2 border border-gray-300">{registro[`camara${n}`].entrada}</td>
                      <td className="p-2 border border-gray-300">{registro[`camara${n}`].saida}</td>
                    </React.Fragment>
                  ))}
                  <td className="p-2 border border-gray-300 font-semibold text-blue-600">
                    {calcularTotalEstoque(registro)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={12} className="p-4 text-center text-gray-500 border border-gray-300">
                  Nenhum registro ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisterEstoqueTable;
