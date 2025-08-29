'use client';

import React, { useState } from 'react';
import { ChevronRightIcon, CarIcon, SettingsIcon, PhoneIcon } from '../icons/CustomIcons';

interface ProfileScreenProps {
  onBack: () => void;
  onLogout: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onBack, onLogout }) => {
  // État pour le mode conducteur
  const [isDriverMode, setIsDriverMode] = useState(false);

  // Données utilisateur simulées
  const userProfile = {
    name: 'Adjovi Koffi',
    phoneNumber: '+229 97 123 456',
    rating: 4.6,
    totalTrips: 23,
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/15a17f4c-396b-4ac4-881b-5f0b999857e3.png'
  };

  // Options du menu profil
  const menuOptions = [
    {
      id: 'trips',
      title: 'Mes trajets',
      subtitle: 'Historique et trajets à venir',
      icon: CarIcon,
      color: '#0F766E'
    },
    {
      id: 'vehicles',
      title: 'Mes véhicules',
      subtitle: 'Gérer vos véhicules',
      icon: CarIcon,
      color: '#F97316',
      driverOnly: true
    },
    {
      id: 'wallet',
      title: 'Paiement & Portefeuille',
      subtitle: 'Moyens de paiement et solde',
      icon: PhoneIcon,
      color: '#059669'
    },
    {
      id: 'settings',
      title: 'Paramètres',
      subtitle: 'Notifications et préférences',
      icon: SettingsIcon,
      color: '#64748B'
    },
    {
      id: 'support',
      title: 'Support',
      subtitle: 'Aide et assistance',
      icon: PhoneIcon,
      color: '#DC2626'
    }
  ];

  // Gestion des actions de menu
  const handleMenuAction = (optionId: string) => {
    switch (optionId) {
      case 'logout':
        if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
          onLogout();
        }
        break;
      default:
        alert(`Fonctionnalité "${optionId}" en cours de développement`);
    }
  };

  // Gestion du changement de mode conducteur
  const handleDriverModeToggle = () => {
    setIsDriverMode(!isDriverMode);
    const mode = !isDriverMode ? 'conducteur' : 'passager';
    alert(`Mode ${mode} activé !`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* En-tête avec bouton retour */}
      <div className="bg-white shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Mon Profil</h1>
              <p className="text-sm text-slate-600">Gérer votre compte WestRide</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Section profil utilisateur */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src={userProfile.avatar} 
              alt={userProfile.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900">{userProfile.name}</h2>
              <p className="text-slate-600 mb-2">{userProfile.phoneNumber}</p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-slate-600">{userProfile.rating} ⭐</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600">{userProfile.totalTrips} trajets</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mode conducteur toggle */}
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">Mode Conducteur</h3>
                <p className="text-sm text-slate-600">
                  {isDriverMode 
                    ? 'Vous pouvez proposer des trajets' 
                    : 'Activez pour proposer des trajets'
                  }
                </p>
              </div>
              <button
                onClick={handleDriverModeToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                  isDriverMode ? 'bg-orange-500' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDriverMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Options du menu */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h3 className="font-semibold text-slate-900">Options</h3>
          </div>
          
          <div className="divide-y divide-slate-200">
            {menuOptions
              .filter(option => !option.driverOnly || (option.driverOnly && isDriverMode))
              .map((option) => {
                const IconComponent = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleMenuAction(option.id)}
                    className="w-full px-6 py-4 flex items-center space-x-4 hover:bg-slate-50 transition-colors duration-200 text-left"
                  >
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${option.color}15` }}
                    >
                      <IconComponent size={20} color={option.color} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{option.title}</p>
                      <p className="text-sm text-slate-600">{option.subtitle}</p>
                    </div>
                    <ChevronRightIcon size={20} color="#94A3B8" />
                  </button>
                );
              })}
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4">À propos</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Membre depuis</span>
              <span className="font-medium text-slate-900">Janvier 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Version de l'app</span>
              <span className="font-medium text-slate-900">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Dernière connexion</span>
              <span className="font-medium text-slate-900">Aujourd'hui</span>
            </div>
          </div>
        </div>

        {/* Bouton de déconnexion */}
        <div className="pt-4">
          <button
            onClick={() => handleMenuAction('logout')}
            className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-3 px-6 rounded-xl transition-all duration-200 border border-red-200"
          >
            Se déconnecter
          </button>
        </div>

        {/* Informations légales */}
        <div className="text-center space-y-2 pt-4">
          <p className="text-xs text-slate-500">
            En utilisant WestRide, vous acceptez nos
          </p>
          <div className="flex justify-center space-x-4">
            <button className="text-xs text-orange-600 hover:text-orange-700">
              Conditions d'utilisation
            </button>
            <span className="text-xs text-slate-400">•</span>
            <button className="text-xs text-orange-600 hover:text-orange-700">
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;