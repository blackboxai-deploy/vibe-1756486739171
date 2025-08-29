// Données de démonstration pour WestRide Bénin
export interface Driver {
  id: string;
  name: string;
  rating: number;
  tripsCount: number;
  photo: string;
  phoneNumber: string;
}

export interface Vehicle {
  id: string;
  model: string;
  color: string;
  licensePlate: string;
  type: 'car' | 'moto';
}

export interface Ride {
  id: string;
  driverId: string;
  vehicleId: string;
  serviceType: 'voiture' | 'ecomoto';
  departure: {
    location: string;
    time: string;
  };
  destination: {
    location: string;
    estimatedArrival: string;
  };
  price: number;
  availableSeats: number;
  distance: string;
  duration: string;
}

// Données des conducteurs
export const mockDrivers: Driver[] = [
  {
    id: '1',
    name: 'Kouame Adjovi',
    rating: 4.8,
    tripsCount: 124,
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0fdaf76b-01b6-42c3-b76c-30fe4d29eaa0.png',
    phoneNumber: '+229 97 123 456'
  },
  {
    id: '2', 
    name: 'Fatima Kone',
    rating: 4.9,
    tripsCount: 89,
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/073bef8e-48f0-4286-9f5f-f8d7e742ae25.png',
    phoneNumber: '+229 96 789 012'
  },
  {
    id: '3',
    name: 'Ibrahim Traore', 
    rating: 4.7,
    tripsCount: 156,
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2781fec1-0309-40da-ace0-5961dcab37a9.png',
    phoneNumber: '+229 95 345 678'
  },
  {
    id: '4',
    name: 'Aissatou Diallo',
    rating: 4.6,
    tripsCount: 78,
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/723667e7-e326-445b-88ae-b43100c380a2.png',
    phoneNumber: '+229 94 567 890'
  }
];

// Données des véhicules
export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    model: 'Toyota Corolla',
    color: 'Blanche',
    licensePlate: 'BJ-2024-001',
    type: 'car'
  },
  {
    id: '2',
    model: 'Renault Logan',
    color: 'Grise',
    licensePlate: 'BJ-2024-002', 
    type: 'car'
  },
  {
    id: '3',
    model: 'Honda CBR 150',
    color: 'Rouge',
    licensePlate: 'BJ-2024-M03',
    type: 'moto'
  },
  {
    id: '4',
    model: 'Peugeot 301',
    color: 'Noire',
    licensePlate: 'BJ-2024-004',
    type: 'car'
  }
];

// Données des trajets disponibles
export const mockRides: Ride[] = [
  {
    id: '1',
    driverId: '1',
    vehicleId: '1',
    serviceType: 'voiture',
    departure: {
      location: 'Carrefour Ganhi, Cotonou',
      time: '14:30'
    },
    destination: {
      location: 'Université d\'Abomey-Calavi',
      estimatedArrival: '15:15'
    },
    price: 1500,
    availableSeats: 3,
    distance: '18 km',
    duration: '45 min'
  },
  {
    id: '2',
    driverId: '3',
    vehicleId: '3', 
    serviceType: 'ecomoto',
    departure: {
      location: 'Place de l\'Étoile Rouge',
      time: '15:00'
    },
    destination: {
      location: 'Marché Dantokpa',
      estimatedArrival: '15:25'
    },
    price: 800,
    availableSeats: 1,
    distance: '8 km',
    duration: '25 min'
  },
  {
    id: '3',
    driverId: '2',
    vehicleId: '2',
    serviceType: 'voiture',
    departure: {
      location: 'Aéroport de Cotonou',
      time: '16:45'
    },
    destination: {
      location: 'Centre-ville Cotonou',
      estimatedArrival: '17:15'
    },
    price: 2000,
    availableSeats: 2,
    distance: '12 km',
    duration: '30 min'
  },
  {
    id: '4',
    driverId: '4',
    vehicleId: '4',
    serviceType: 'voiture',
    departure: {
      location: 'Porto-Novo Centre',
      time: '17:30'
    },
    destination: {
      location: 'Cotonou Godomey',
      estimatedArrival: '18:45'
    },
    price: 3000,
    availableSeats: 4,
    distance: '35 km',
    duration: '1h 15min'
  }
];

// Fonction utilitaire pour obtenir un conducteur par ID
export const getDriverById = (id: string): Driver | undefined => {
  return mockDrivers.find(driver => driver.id === id);
};

// Fonction utilitaire pour obtenir un véhicule par ID
export const getVehicleById = (id: string): Vehicle | undefined => {
  return mockVehicles.find(vehicle => vehicle.id === id);
};

// Fonction pour filtrer les trajets par type de service
export const getRidesByService = (serviceType: 'voiture' | 'ecomoto'): Ride[] => {
  return mockRides.filter(ride => ride.serviceType === serviceType);
};