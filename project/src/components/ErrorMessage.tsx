import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
      <AlertCircle className="text-red-500" size={20} />
      <div>
        <h3 className="font-medium text-red-800">Error</h3>
        <p className="text-red-700 text-sm">{message}</p>
      </div>
    </div>
  );
};