'use client';

import React, { useState } from 'react';
import { SearchIcon, CarIcon, MotoIcon, ClockIcon, StarIcon } from '../icons/CustomIcons';
import { getDriverById, getVehicleById, getRidesByService, type Ride } from '../../lib/mockData';

interface HomeScreenProps {
  onRideSelect: (rideId: string) => void;
  onProfileClick: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onRideSelect, onProfileClick }) => {
  // États pour les fonctionnalités interactives
  const [selectedService, setSelectedService] = useState<'voiture' | 'ecomoto'>('ecomoto');
  const [searchDestination, setSearchDestination] = useState('');
  const [departureFilter, setDepartureFilter] = useState<'now' | 'later'>('now');

  // Filtrage des trajets selon le service sélectionné
  const filteredRides = getRidesByService(selectedService);

  // Rendu d'une carte de trajet
  const renderRideCard = (ride: Ride) => {
    const driver = getDriverById(ride.driverId);
    const vehicle = getVehicleById(ride.vehicleId);
    
    if (!driver || !vehicle) return null;

    return (
      <div 
        key={ride.id}
        className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-4 hover:shadow-md transition-shadow duration-200 cursor-pointer"
        onClick={() => onRideSelect(ride.id)}
      >
        {/* En-tête avec type de service */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {ride.serviceType === 'voiture' ? (
              <div className="bg-teal-700/10 p-2 rounded-lg">
                <CarIcon size={20} color="#0F766E" />
              </div>
            ) : (
              <div className="bg-orange-500/10 p-2 rounded-lg">
                <MotoIcon size={20} color="#F97316" />
              </div>
            )}
            <span className="text-sm font-medium text-slate-600 capitalize">
              {ride.serviceType}
            </span>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-slate-900">{ride.price} FCFA</p>
            <p className="text-xs text-slate-500">{ride.distance} • {ride.duration}</p>
          </div>
        </div>

        {/* Itinéraire */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900">{ride.departure.location}</p>
              <p className="text-xs text-slate-500 flex items-center">
                <ClockIcon size={12} className="mr-1" />
                Départ à {ride.departure.time}
              </p>
            </div>
          </div>
          
          <div className="ml-1.5 w-0.5 h-4 bg-slate-300"></div>
          
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900">{ride.destination.location}</p>
              <p className="text-xs text-slate-500">Arrivée vers {ride.destination.estimatedArrival}</p>
            </div>
          </div>
        </div>

        {/* Informations conducteur */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={driver.photo} 
              alt={driver.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-slate-900">{driver.name}</p>
              <div className="flex items-center space-x-1">
                <StarIcon size={12} color="#F59E0B" filled />
                <span className="text-xs text-slate-600">{driver.rating}</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-600">{driver.tripsCount} trajets</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-xs text-slate-500">{ride.availableSeats} places disponibles</p>
            <p className="text-xs text-slate-400">{vehicle.model}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* En-tête avec profil utilisateur */}
      <div className="bg-white shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">Bonjour ! 👋</h1>
              <p className="text-sm text-slate-600">Où allez-vous aujourd'hui ?</p>
            </div>
            <button 
              onClick={onProfileClick}
              className="w-10 h-10 bg-gradient-to-r from-orange-500 to-teal-700 rounded-full flex items-center justify-center"
            >
              <span className="text-white font-semibold text-sm">AC</span>
            </button>
          </div>
        </div>
      </div>

      {/* Barre de recherche */}
      <div className="px-6 py-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon size={20} color="#64748B" />
          </div>
          <input
            type="text"
            value={searchDestination}
            onChange={(e) => setSearchDestination(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-slate-900 shadow-sm"
            placeholder="Où voulez-vous aller ?"
          />
        </div>
      </div>

      {/* Sélecteur de service (SECTION CRITIQUE) */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-xl p-2 shadow-sm border border-slate-200">
          <div className="grid grid-cols-2 gap-2">
            {/* Bouton Covoiturage Voiture */}
            <button
              onClick={() => setSelectedService('voiture')}
              className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-200 ${
                selectedService === 'voiture'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <CarIcon size={20} color={selectedService === 'voiture' ? 'white' : '#0F766E'} />
              <span className="font-medium text-sm">Covoiturage</span>
            </button>

            {/* Bouton ecomoto */}
            <button
              onClick={() => setSelectedService('ecomoto')}
              className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-200 ${
                selectedService === 'ecomoto'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <MotoIcon size={20} color={selectedService === 'ecomoto' ? 'white' : '#F97316'} />
              <span className="font-medium text-sm">ecomoto</span>
            </button>
          </div>
        </div>
      </div>

      {/* Carte statique (placeholder pour prototype) */}
      <div className="px-6 mb-4">
        <div className="bg-slate-200 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
          {/* Image de carte placeholder */}
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c934824e-68e8-4efb-80e4-f1807901d279.png"
            alt="Carte interactive de Cotonou avec marqueurs de trajets"
            className="w-full h-full object-cover"
          />
          
          {/* Marqueurs de position */}
          <div className="absolute top-4 left-4">
            <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="bg-red-500 w-3 h-3 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-orange-500 w-3 h-3 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Barre de filtres */}
      <div className="px-6 mb-4">
        <div className="flex space-x-3 overflow-x-auto pb-2">
          <button
            onClick={() => setDepartureFilter('now')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              departureFilter === 'now'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            Départ maintenant
          </button>
          <button
            onClick={() => setDepartureFilter('later')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              departureFilter === 'later'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            Départ plus tard
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white text-slate-600 border border-slate-200 hover:border-slate-300 transition-all duration-200">
            2-4 places
          </button>
        </div>
      </div>

      {/* Liste des trajets */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            Trajets {selectedService} disponibles
          </h2>
          <span className="text-sm text-slate-500">
            {filteredRides.length} résultat{filteredRides.length > 1 ? 's' : ''}
          </span>
        </div>

        {/* Cartes de trajets */}
        <div>
          {filteredRides.length > 0 ? (
            filteredRides.map(renderRideCard)
          ) : (
            <div className="text-center py-12">
              <div className="bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {selectedService === 'voiture' ? (
                  <CarIcon size={24} color="#64748B" />
                ) : (
                  <MotoIcon size={24} color="#64748B" />
                )}
              </div>
              <p className="text-slate-600 font-medium">Aucun trajet {selectedService} disponible</p>
              <p className="text-sm text-slate-500 mt-1">
                Essayez de changer vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;