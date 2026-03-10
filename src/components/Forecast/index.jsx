import "./forecast.style.css"

export default function Forecast({ forecast }) {

  function formatarData(data) {
    const novaData = new Date(data)

    return novaData.toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit"
    })
  }
  return (


    <ul className="forecast" aria-label="Previsão do tempo para os próximos dias">

      {forecast.forecastday.map((day) => (

        <li
          key={day.date}
          className="forecast-day"
          aria-label={`${formatarData(day.date)}: temperatura média de ${day.day.avgtemp_c} graus, ${day.day.condition.text}`}
        >

          <p className="dataTexto">{formatarData(day.date)}</p>

          <img
            src={day.day.condition.icon}
            alt="icone"
            aria-hidden="true"
          />

          <p aria-hidden='true'>{day.day.avgtemp_c}°C</p>

        </li>

      ))}

    </ul>
  )
}