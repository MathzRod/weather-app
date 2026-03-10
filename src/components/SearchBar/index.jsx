import { useState } from "react"
import "./Search_bar.style.css"

export default function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("")
  const [tentouVazio, setTentouVazio] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    if (!city.trim()) {
      setTentouVazio(true)
      return
    }

    setTentouVazio(false)
    onSearch(city)
    setCity("")
  }

  function limparCampo() {
    setCity("")
    setTentouVazio(false)
  }

  return (
    <form onSubmit={handleSubmit} role="search">

      <label htmlFor="city-input" className="sr-only">
        Digite o nome de uma cidade
      </label>

      <div className="input-wrapper">
        <input
          id="city-input"
          type="text"
          placeholder="Ex: São Paulo, London, Tokyo..."
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
            if (tentouVazio) setTentouVazio(false)
          }}
          className={tentouVazio ? "input-erro" : ""}
          autoComplete="off"
          spellCheck="false"
          aria-invalid={tentouVazio}
          aria-describedby={tentouVazio ? "erro-cidade" : undefined}
          // foca no input automaticamente ao carregar a página
          autoFocus
        />

        {city && (
          <button
            type="button"
            className="btn-limpar"
            onClick={limparCampo}
            aria-label="Limpar campo de busca"
          >
            ✕
          </button>
        )}
      </div>

      {tentouVazio && (
        <p id="erro-cidade" className="erro-input" role="alert">
          Digite o nome de uma cidade primeiro
        </p>
      )}

      {/* aria-busy avisa o leitor de tela que uma busca está em andamento */}
      <button
        type="submit"
        aria-busy={loading}
        aria-label={loading ? "Buscando cidade..." : "Buscar clima da cidade"}
        disabled={loading}
      >
        {loading ? "Buscando..." : "Buscar"}
      </button>

    </form>
  )
}