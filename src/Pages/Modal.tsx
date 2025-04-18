import React, { ReactNode } from 'react';
import Cadastro from './Cadastro/cadastro';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void; 
  title: string;
  children: ReactNode; // Conteúdo dinâmico (formulário, texto, etc.)
  submitLabel?: string; // Rótulo do botão de submit (opcional)
  cancelLabel?: string; // Rótulo do botão de cancelar (opcional)
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
  submitLabel = 'Salvar',
  cancelLabel = 'Cancelar',
}) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        {/* Cabeçalho do Modal */}
        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        {/* Corpo do Modal (conteúdo dinâmico) */}
        <div className="mb-4">{children}</div>

        {/* Rodapé do Modal (botões de ação) */}
        <div className="flex justify-end space-x-4">
          {/* Botão Cancelar */}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 rounded"
          >
            {cancelLabel}
          </button>

          {/* Botão Submit (ou qualquer ação definida) */}
          {onSubmit && (
            <button
              onClick={onSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {submitLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
