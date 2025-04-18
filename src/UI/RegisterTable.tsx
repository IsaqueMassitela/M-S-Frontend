import React, { useState } from 'react';
import Modal from '../Pages/Modal';
import RegisterProduto from '../Pages/Cadastro/RegisterProduto.jsx';

type Registro = {
  id: number;
  factura: string;
  machamba: string;
  produto: string;
  quantidade: string;
  precoUnit: string;
  precoTotal: string;
  data: string;
};

const RegisterTable = () => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [idCounter, setIdCounter] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const machambas = ['Machamba 1', 'Machamba 2', 'Machamba 3'];

  const handleRegisterSuccess = (novoRegistroParcial: Omit<Registro, 'data'>) => {
    const dataAtual = new Date().toLocaleString();
    const novoRegistroComData: Registro = {
      ...novoRegistroParcial,
      data: dataAtual,
    };

    setRegistros((prev) => [...prev, novoRegistroComData]);
    setIdCounter((prev) => prev + 1);
    setModalOpen(false);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Registro de Produção</h2>

      <button
        onClick={() => setModalOpen(true)}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Novo Registro
      </button>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={() => {}}
        title="Registrar Produto"
      >
        <RegisterProduto
          machambas={machambas}
          onSuccess={handleRegisterSuccess}
          nextId={idCounter}
        />
      </Modal>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 border-collapse text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 border border-gray-300">ID</th>
              <th className="p-2 border border-gray-300">Data</th>
              <th className="p-2 border border-gray-300">Factura Nr</th>
              <th className="p-2 border border-gray-300">Machamba</th>
              <th className="p-2 border border-gray-300">Produto</th>
              <th className="p-2 border border-gray-300">Quantidade</th>
              <th className="p-2 border border-gray-300">Preço Unitário</th>
              <th className="p-2 border border-gray-300">Preço Total</th>
            </tr>
          </thead>
          <tbody>
            {registros.length > 0 ? (
              registros.map((registro) => (
                <tr key={registro.id}>
                  <td className="p-2 border border-gray-300">{registro.id}</td>
                  <td className="p-2 border border-gray-300">{registro.data}</td>
                  <td className="p-2 border border-gray-300">{registro.factura}</td>
                  <td className="p-2 border border-gray-300">{registro.machamba}</td>
                  <td className="p-2 border border-gray-300">{registro.produto}</td>
                  <td className="p-2 border border-gray-300">{registro.quantidade}</td>
                  <td className="p-2 border border-gray-300">MZN {registro.precoUnit}</td>
                  <td className="p-2 border border-gray-300 font-semibold text-green-600">
                    MZN {registro.precoTotal}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-4 text-center text-gray-500 border border-gray-300">
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

export default RegisterTable;
