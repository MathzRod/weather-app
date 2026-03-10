import "./weather_card.style.css"

export default function WeatherCard({ weather }) {
  const { name, country } = weather.location
  const { temp_c, feelslike_c, condition, humidity, wind_kph, is_day} = weather.current

  // a api retorna is_day: 1 pra dia e 0 pra noite
  const periodo = is_day ? "dia" : "noite"

  function descreveVento(kph) {
    if (kph < 20) return "vento fraco"
    if (kph < 50) return "vento moderado"
    return "vento forte"
  }

  // mensagem prática pro usuário baseada no clima atual
  function getDica(condition, temp_c, humidity) {
    const cond = condition.text.toLowerCase()

    if (cond.includes("chuva") || cond.includes("tempestade"))
      return "☂️ Leva guarda-chuva, tá chovendo"

    if (cond.includes("neve"))
      return "🧥 Agasalha bem, tá nevando"

    if (temp_c >= 35)
      return "🥵 Calor intenso, bebe bastante água"

    if (temp_c <= 10)
      return "🧣 Frio sério, capricha no agasalho"

    if (humidity >= 80)
      return "💦 Umidade alta, pode sensação de abafado"

    if (cond.includes("sol") && temp_c >= 28)
      return "🕶️ Dia ensolarado, não esquece o protetor"

    // sem condição especial, dia normal
    return "✅ Clima tranquilo hoje"
  }

  const dica = getDica(condition, temp_c, humidity)

  return (
    <article
      className={`weather-card ${periodo}`}
      aria-label={`Clima atual em ${name}, ${country}`}
    >

      <h2>{name}, {country}</h2>

      <img
        src={condition.icon}
        alt={`${condition.text} — ${periodo}`}
        width="80"
        height="80"
      />

      <p aria-label={`Temperatura atual: ${temp_c} graus Celsius`}>
        {temp_c}°C
      </p>

      <p aria-label={`Sensação térmica: ${feelslike_c} graus Celsius`}>
        Sensação: {feelslike_c}°C
      </p>

      <p>{condition.text}</p>

      {/* dica contextual baseada no clima, temperatura e umidade */}
      <p className="dica-clima" role="note" aria-label={`Dica: ${dica}`}>
        {dica}
      </p>

      <div className="weather-detalhes" aria-label="Detalhes do clima">

        <p aria-label={`Umidade do ar: ${humidity} por cento`}>
          💧 {humidity}%
        </p>

        <p aria-label={`Velocidade do vento: ${wind_kph} quilômetros por hora, ${descreveVento(wind_kph)}`}>
          💨 {wind_kph} km/h
        </p>

      </div>

    </article>
  )
}