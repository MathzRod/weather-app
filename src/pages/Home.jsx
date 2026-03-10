import { useState } from "react"
import SearchBar from "../components/SearchBar"
import WeatherCard from "../components/WeatherCard"
import Forecast from "../components/Forecast"
import { pegaClimaPorCidade, pegaClimaPorCoordenadas } from "../services/weatherApi"
import "../pages/home.style.css"

export default function Home() {

  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function buscarCidade(city) {
    setLoading(true)
    setError(null)

    try {
      const data = await pegaClimaPorCidade(city)

      if (data.error) {
        setWeather(null)
        setError("Cidade não encontrada, tenta outro nome")
        return
      }

      setWeather(data)

    } catch (err) {
      console.log("erro ao buscar cidade:", err)
      setError("Algo deu errado, tenta de novo")
    } finally {
      setLoading(false)
    }
  }

  async function buscarLocalizacao() {
    setLoading(true)
    setError(null)

    // navegador pede permissão pro usuário antes de chamar o callback
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude: lat, longitude: lon } = position.coords
          const data = await pegaClimaPorCoordenadas(lat, lon)
          setWeather(data)
        } catch (err) {
          console.log("erro ao buscar por coordenadas:", err)
          setError("Não consegui pegar o clima da sua localização")
        } finally {
          setLoading(false)
        }
      },
      () => {
        setError("Permissão negada, busca pela cidade manualmente")
        setLoading(false)
      }
    )
  }

  // cada condição climática tem um gradiente diferente no CSS
  function getWeatherBackground(weather) {
    if (!weather) return "default"

    const condition = weather.current.condition.text.toLowerCase()

    if (condition.includes("sol")) return "sunny"
    if (condition.includes("nublado") || condition.includes("nuvem")) return "cloudy"
    if (condition.includes("chuva")) return "rainy"
    if (condition.includes("tempestade")) return "storm"

    return "default"
  }

  return (
    <main className={`container ${getWeatherBackground(weather)}`}>
      <div className="app">

        <h1>Previsão do Tempo</h1>

        <SearchBar onSearch={buscarCidade} loading={loading} />

        <button
          type="button"
          onClick={buscarLocalizacao}
          aria-label="Usar minha localização atual para buscar o clima"
          disabled={loading}
        >
          Usar minha localização
        </button>

        <div aria-live="polite" aria-atomic="true" role="status">
          {loading && <p>Buscando clima...</p>}
        </div>

        {error && <p role="alert" className="error-message">{error}</p>}

        {weather && (
          <section aria-label={`Clima atual em ${weather.location.name}`}>
            <WeatherCard weather={weather} />
          </section>
        )}

        {weather && (
          <section aria-label="Previsão para os próximos dias">
            <Forecast forecast={weather.forecast} />
          </section>
        )}

      </div>
    </main>
  )
}