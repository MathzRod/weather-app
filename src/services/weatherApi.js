const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = "https://api.weatherapi.com/v1/forecast.json"

// reutilizei essa função pra não repetir o fetch nos dois casos
async function fetchWeather(query) {
  try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&days=3&lang=pt`)
    const data = await response.json()
    console.log("resposta da api:", data)
    return data
  } catch (err) {
    console.log("erro no fetchWeather:", err)
    throw err
  }
}

export async function pegaClimaPorCidade(city) {
  return fetchWeather(city)
}

export async function pegaClimaPorCoordenadas(lat, lon) {
  return fetchWeather(`${lat},${lon}`)
}