import React from 'react';
import { 
  Utensils, 
  Building2, 
  Calendar, 
  GraduationCap, 
  FolderKanban, 
  Megaphone, 
  Image 
} from 'lucide-react';

const categories = [
  { id: 1, name: 'Gastronomía', icon: Utensils },
  { id: 2, name: 'Casas de la cultura', icon: Building2 },
  { id: 3, name: 'Calendario cultural', icon: Calendar },
  { id: 4, name: 'Talleres de formación', icon: GraduationCap },
  { id: 5, name: 'Proyectos', icon: FolderKanban },
  { id: 6, name: 'Convocatorias', icon: Megaphone },
  { id: 7, name: 'Galería', icon: Image },
];

export default function CategoryButtons() {
  return (
    <div className="bg-white py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200 group"
              >
                <IconComponent className="w-8 h-8 mb-2 text-blue-600 group-hover:text-blue-700" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 text-center">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}