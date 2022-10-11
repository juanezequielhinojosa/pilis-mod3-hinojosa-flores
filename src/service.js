export const getClima = async (latitud,longitud) => {
  try {

   const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitud}&longitude=${longitud}&timezone=America/Argentina/Jujuy`);
   return response.json();
    
  } catch {
    throw new Error('could not fetch color palettes');
  }
};