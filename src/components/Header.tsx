import React from 'react';
import { Menu, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <img 
              src="img/Captura de pantalla 2024-10-25 175539.png" 
              alt="Gobernación del Cauca" 
              className="h-16 w-auto"
            />
          </div>

          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold text-gray-900">SICCAUCA</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden lg:flex space-x-8 mr-4">
              <a href="#" className="text-gray-900 hover:text-gray-600">Inicio</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">Nosotros</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">Contacto</a>
            </nav>
            <button className="p-2">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}