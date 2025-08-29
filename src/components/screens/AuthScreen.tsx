'use client';

import React, { useState } from 'react';
import { PhoneIcon, LockIcon } from '../icons/CustomIcons';

interface AuthScreenProps {
  onLogin: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin }) => {
  // États pour les champs du formulaire
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Gestion de la connexion
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!phoneNumber || !password) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    setIsLoading(true);
    
    // Simulation d'une connexion (délai de 2 secondes)
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center px-6 py-12">
      {/* Logo et titre */}
      <div className="text-center mb-12">
        <div className="bg-gradient-to-r from-orange-500 to-teal-700 bg-clip-text text-transparent mb-4">
          <h1 className="text-4xl font-bold">WestRide</h1>
        </div>
        <p className="text-slate-600 text-lg">Votre solution de covoiturage au Bénin</p>
        <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-orange-500 to-teal-700 rounded-full"></div>
      </div>

      {/* Formulaire de connexion */}
      <div className="max-w-md mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Se connecter
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Champ numéro de téléphone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                Numéro de téléphone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PhoneIcon size={20} color="#64748B" />
                </div>
                <input
                  id="phone"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-slate-900"
                  placeholder="+229 XX XXX XXX"
                />
              </div>
            </div>

            {/* Champ mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon size={20} color="#64748B" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-slate-900"
                  placeholder="Votre mot de passe"
                />
              </div>
            </div>

            {/* Bouton de connexion */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-lg hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Connexion en cours...
                </div>
              ) : (
                'Se connecter'
              )}
            </button>
          </form>

          {/* Liens utiles */}
          <div className="mt-8 space-y-4">
            <button 
              className="w-full text-teal-700 hover:text-teal-800 font-medium transition-colors duration-200"
              onClick={() => alert('Fonctionnalité en cours de développement')}
            >
              Mot de passe oublié ?
            </button>
            
            <div className="border-t border-slate-200 pt-4">
              <button 
                className="w-full text-slate-600 hover:text-slate-800 font-medium transition-colors duration-200"
                onClick={() => alert('Fonctionnalité en cours de développement')}
              >
                Créer un compte
              </button>
            </div>
          </div>
        </div>

        {/* Message informatif */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            Première fois sur WestRide ? Créez votre compte pour découvrir nos services de covoiturage voiture et ecomoto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;