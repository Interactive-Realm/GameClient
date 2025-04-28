export interface Location {
    latitude: number;
    longitude: number;
  }
  
  export const getUserLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by your browser."));
      }
  
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const data = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          console.log("User location:", data);
          resolve(data);
        },
        (error: GeolocationPositionError) => {
          reject(error);
        }
      );
    });
  };
  