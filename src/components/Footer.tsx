import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: GOBERNACIÓN DEL CAUCA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">GOBERNACIÓN DEL CAUCA</h3>
            <img 
              src="img/Captura de pantalla 2024-10-25 175539.png" 
              alt="Gobernación del Cauca" 
              className="w-32 mb-4"
            />
          </div>

          {/* Column 2: CONTÁCTENOS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">CONTÁCTENOS</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Dirección: Carrera 7 Calle 4 Esquina Popayán - Cauca. 
                  <a href="#" className="text-blue-600 hover:text-blue-800 block">Ver mapa</a>
                </span>
              </li>
              <li>Código Postal:190001</li>
              <li>Teléfono: 310-5464668 (en horarios de atención)</li>
              <li>Impuesto de Rentas: 320-7124044 (en horarios de atención)</li>
              <li>Oficina de Pasaportes: 311-6099216 (en horarios de atención)</li>
              <li>Línea gratuita Anticorrupción: 01 8000 919748 Denuncias Fiscalía</li>
              <li>contactenos@cauca.gov.co</li>
              <li>Notificaciones judiciales: notificaciones@cauca.gov.co</li>
            </ul>
          </div>

          {/* Column 3: ENLACES DE INTERÉS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">ENLACES DE INTERÉS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Políticas de privacidad, términos de uso y protección de datos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Políticas Editoriales y de Actualización
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Políticas</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Notificaciones Judiciales</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Mapa del Sitio</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Versión anterior del sitio web</a>
              </li>
            </ul>
          </div>

          {/* Column 4: INFORMACIÓN ADICIONAL */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">INFORMACIÓN ADICIONAL</h3>
            <ul className="space-y-2">
              <li>Última Actualización: 25/10/2024 13:03:29</li>
              <li>Número de Visitas: 2745896</li>
              <li>NIT: 891580016-8</li>
              <li>
                Horario de atención: Lunes a Jueves 8:00 a.m. a 12:15 p.m. y 2:00 p.m a 6:30 p.m, 
                Viernes 8:00 a.m. a 12:30 p.m. y 2:00 p.m a 6:30 p.m
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}