import React, { useState } from 'react';

const RegisterProduto = ({ machambas, onSuccess, nextId }) => {
  const [form, setForm] = useState({
    factura: '',
    machamba: '',
    produto: '',
    quantidade: '',
    precoUnit: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const precoTotal = parseFloat(form.quantidade) * parseFloat(form.precoUnit);

    const novoProduto = {
      id: nextId,
      factura: form.factura,
      machamba: form.machamba,
      produto: form.produto,
      quantidade: form.quantidade,
      precoUnit: parseFloat(form.precoUnit).toFixed(2),
      precoTotal: precoTotal.toFixed(2),
    };

    onSuccess(novoProduto);
    setForm({ factura: '', machamba: '', produto: '', quantidade: '', precoUnit: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">

      <div>
        <label className="block text-sm font-medium text-gray-700">Factura Nr:</label>
        <input
          type="number"
          step="000.00"
          name="factura"
          value={form.factura}
          onChange={handleChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Nome da Machamba:</label>
        <input
          type="text"
          name="machamba"
          value={form.machamba}
          onChange={handleChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Produto:</label>
        <input
          type="text"
          name="produto"
          value={form.produto}
          onChange={handleChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Quantidade:</label>
        <input
          type="number"
          name="quantidade"
          value={form.quantidade}
          onChange={handleChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Preço Unitário:</label>
        <input
          type="number"
          step="0.01"
          name="precoUnit"
          value={form.precoUnit}
          onChange={handleChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Registrar
      </button>
    </form>
  );
};

export default RegisterProduto;