'use client';

import React from 'react';
import { CarIcon, MotoIcon, LocationIcon, ClockIcon, StarIcon, PhoneIcon, HelmetIcon } from '../icons/CustomIcons';
import { getDriverById, getVehicleById, mockRides } from '../../lib/mockData';

interface RideDetailScreenProps {
  rideId: string;
  onBack: () => void;
  onBooking: () => void;
}

const RideDetailScreen: React.FC<RideDetailScreenProps> = ({ rideId, onBack, onBooking }) => {
  // Récupération des données du trajet
  const ride = mockRides.find(r => r.id === rideId);
  
  if (!ride) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 mb-4">Trajet non trouvé</p>
          <button 
            onClick={onBack}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg"
          >
            Retour
          </button>
        </div>
      </div>
    );
  }

  const driver = getDriverById(ride.driverId);
  const vehicle = getVehicleById(ride.vehicleId);

  if (!driver || !vehicle) return null;

  // Gestion de la réservation
  const handleBooking = () => {
    if (window.confirm(`Confirmer la réservation de ce trajet ${ride.serviceType} pour ${ride.price} FCFA ?`)) {
      onBooking();
      alert('Réservation confirmée ! Le conducteur a été notifié.');
    }
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
              <h1 className="text-xl font-bold text-slate-900">Détails du trajet</h1>
              <p className="text-sm text-slate-600 capitalize">{ride.serviceType}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Carte du trajet (placeholder) */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="bg-slate-200 h-40 flex items-center justify-center relative">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c3b90218-78b4-433f-a194-9e6cd1ab5781.png"
              alt="Itinéraire détaillé du trajet avec tracé GPS"
              className="w-full h-full object-cover"
            />
            
            {/* Marqueurs de départ et arrivée */}
            <div className="absolute top-4 left-4">
              <div className="bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-red-500 w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>

        {/* Informations du trajet */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          {/* Type de service et prix */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              {ride.serviceType === 'voiture' ? (
                <div className="bg-teal-700/10 p-3 rounded-xl">
                  <CarIcon size={24} color="#0F766E" />
                </div>
              ) : (
                <div className="bg-orange-500/10 p-3 rounded-xl">
                  <MotoIcon size={24} color="#F97316" />
                </div>
              )}
              <div>
                <h2 className="text-lg font-bold text-slate-900 capitalize">{ride.serviceType}</h2>
                <p className="text-sm text-slate-600">{ride.distance} • {ride.duration}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-slate-900">{ride.price} FCFA</p>
              <p className="text-sm text-slate-500">{ride.availableSeats} places disponibles</p>
            </div>
          </div>

          {/* Itinéraire détaillé */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 mb-3">Itinéraire</h3>
            
            {/* Point de départ */}
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center mt-1">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-0.5 h-8 bg-slate-300 mt-1"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <LocationIcon size={16} color="#64748B" />
                  <span className="font-medium text-slate-900">{ride.departure.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <ClockIcon size={14} color="#64748B" />
                  <span>Départ à {ride.departure.time}</span>
                </div>
              </div>
            </div>

            {/* Point d'arrivée */}
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <LocationIcon size={16} color="#64748B" />
                  <span className="font-medium text-slate-900">{ride.destination.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <ClockIcon size={14} color="#64748B" />
                  <span>Arrivée vers {ride.destination.estimatedArrival}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informations conducteur */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4">Votre conducteur</h3>
          
          <div className="flex items-center space-x-4 mb-4">
            <img 
              src={driver.photo} 
              alt={driver.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900">{driver.name}</h4>
              <div className="flex items-center space-x-1 mt-1">
                <StarIcon size={16} color="#F59E0B" filled />
                <span className="text-sm text-slate-600">{driver.rating}</span>
                <span className="text-sm text-slate-400">•</span>
                <span className="text-sm text-slate-600">{driver.tripsCount} trajets</span>
              </div>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-200">
              <PhoneIcon size={20} color="white" />
            </button>
          </div>
        </div>

        {/* Informations véhicule / spécificités */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4">
            {ride.serviceType === 'voiture' ? 'Véhicule' : 'Informations moto'}
          </h3>
          
          {ride.serviceType === 'voiture' ? (
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Modèle</span>
                <span className="font-medium text-slate-900">{vehicle.model}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Couleur</span>
                <span className="font-medium text-slate-900">{vehicle.color}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Plaque</span>
                <span className="font-medium text-slate-900">{vehicle.licensePlate}</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-600">Modèle</span>
                <span className="font-medium text-slate-900">{vehicle.model}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Plaque</span>
                <span className="font-medium text-slate-900">{vehicle.licensePlate}</span>
              </div>
              
              {/* Note spéciale ecomoto */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-500/20 p-2 rounded-lg">
                    <HelmetIcon size={20} color="#F97316" />
                  </div>
                  <div>
                    <p className="font-medium text-orange-800">Casque fourni</p>
                    <p className="text-sm text-orange-600">
                      Le conducteur fournit un casque homologué pour le passager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bouton de réservation fixe en bas */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-6">
        <button
          onClick={handleBooking}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-[1.02]"
        >
          Réserver ce trajet - {ride.price} FCFA
        </button>
      </div>

      {/* Espacement pour le bouton fixe */}
      <div className="h-24"></div>
    </div>
  );
};

export default RideDetailScreen;