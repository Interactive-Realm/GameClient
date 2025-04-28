import React, { useEffect } from 'react';

// Define the type for the location object
interface Location {
  latitude: number;
  longitude: number;
}

// Create the getUserLocation function that returns a console log
export const getUserLocation = (): Promise<Location | string> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location: Location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        console.log('User location:', location); // Logs location to console
        resolve(location);
      },
      (err) => {
        console.error('Error fetching location:', err.message); // Logs error to console
        reject(`Error: ${err.message}`);
      }
    );
  });
};

const UserLocation: React.FC = () => {
  useEffect(() => {
    // Call getUserLocation function when component mounts
    getUserLocation()
      .then((location) => {
        // The location will already have been logged to the console
      })
      .catch((err) => {
        console.error('Error fetching location:', err);
      });
  }, []);

  return null; // No UI is rendered since it's only logging to the console
};

export default UserLocation;
