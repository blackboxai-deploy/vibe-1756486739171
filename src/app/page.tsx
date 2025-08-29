'use client';

import React, { useState } from 'react';
import AuthScreen from '../components/screens/AuthScreen';
import HomeScreen from '../components/screens/HomeScreen';
import RideDetailScreen from '../components/screens/RideDetailScreen';
import ProfileScreen from '../components/screens/ProfileScreen';

// Types pour la navigation
type Screen = 'auth' | 'home' | 'rideDetail' | 'profile';

interface NavigationState {
  currentScreen: Screen;
  selectedRideId?: string;
}

export default function WestRideApp() {
  // État de navigation de l'application
  const [navigation, setNavigation] = useState<NavigationState>({
    currentScreen: 'auth'
  });

  // Gestion de la connexion
  const handleLogin = () => {
    setNavigation({ currentScreen: 'home' });
  };

  // Gestion de la déconnexion
  const handleLogout = () => {
    setNavigation({ currentScreen: 'auth' });
  };

  // Navigation vers la page d'accueil
  const navigateToHome = () => {
    setNavigation({ currentScreen: 'home' });
  };

  // Navigation vers les détails d'un trajet
  const navigateToRideDetail = (rideId: string) => {
    setNavigation({ 
      currentScreen: 'rideDetail', 
      selectedRideId: rideId 
    });
  };

  // Navigation vers le profil
  const navigateToProfile = () => {
    setNavigation({ currentScreen: 'profile' });
  };

  // Gestion de la réservation
  const handleBooking = () => {
    // Retour à l'accueil après réservation
    navigateToHome();
  };

  // Rendu conditionnel des écrans
  const renderCurrentScreen = () => {
    switch (navigation.currentScreen) {
      case 'auth':
        return <AuthScreen onLogin={handleLogin} />;
      
      case 'home':
        return (
          <HomeScreen 
            onRideSelect={navigateToRideDetail}
            onProfileClick={navigateToProfile}
          />
        );
      
      case 'rideDetail':
        if (!navigation.selectedRideId) {
          navigateToHome();
          return null;
        }
        return (
          <RideDetailScreen 
            rideId={navigation.selectedRideId}
            onBack={navigateToHome}
            onBooking={handleBooking}
          />
        );
      
      case 'profile':
        return (
          <ProfileScreen 
            onBack={navigateToHome}
            onLogout={handleLogout}
          />
        );
      
      default:
        return <AuthScreen onLogin={handleLogin} />;
    }
  };

  return (
    <div className="font-sans antialiased">
      {/* Simulation d'un environnement mobile */}
      <div className="max-w-md mx-auto bg-white shadow-2xl min-h-screen">
        {renderCurrentScreen()}
      </div>

      {/* Indicateur de debug en bas */}
      <div className="fixed bottom-4 right-4 bg-slate-900 text-white px-3 py-2 rounded-lg text-xs font-mono z-50">
        {navigation.currentScreen}
        {navigation.selectedRideId && ` | Ride: ${navigation.selectedRideId}`}
      </div>
    </div>
  );
}