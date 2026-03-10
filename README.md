# 🌤️ Weather App

Aplicativo de previsão do tempo construído com React, consumindo a WeatherAPI em tempo real. O usuário pode buscar o clima de qualquer cidade do mundo ou usar a localização GPS do dispositivo.

---

## ✨ Funcionalidades

- Busca de clima por nome de cidade
- Busca automática por geolocalização (GPS)
- Previsão para os próximos 3 dias
- Fundo da tela muda conforme o clima (sol, chuva, tempestade...)
- Dica contextual baseada no clima atual ("leva guarda-chuva", "não esquece o protetor solar"...)
- Indicador visual de dia/noite
- Umidade e velocidade do vento
- Acessibilidade com ARIA (aria-live, aria-label, role, aria-invalid)
- Navegação por teclado com foco visível
- Validação do campo de busca com feedback visual

---

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/) — biblioteca de UI com hooks e componentes funcionais
- [Vite](https://vitejs.dev/) — ferramenta de build e servidor de desenvolvimento
- [WeatherAPI](https://www.weatherapi.com/) — API de dados climáticos em tempo real
- CSS puro com Glassmorphism e gradientes dinâmicos

---

## 📁 Estrutura do projeto
```
src/
├── main.jsx
├── App.jsx
├── index.css
│
├── pages/
│   ├── Home.jsx
│   └── home.style.css
│
├── components/
│   ├── SearchBar/
│   │   ├── index.jsx
│   │   └── Search_bar.style.css
│   │
│   ├── WeatherCard/
│   │   ├── index.jsx
│   │   └── weather_card.style.css
│   │
│   └── Forecast/
│       ├── index.jsx
│       └── forecast.style.css
│
└── services/
    └── weatherApi.js
```

---

## 🚀 Como rodar localmente

**Pré-requisitos:** Node.js instalado
```bash
# clone o repositório
git clone https://github.com/MathzRod/weather-app.git

# entre na pasta
cd weather-app

# instale as dependências
npm install

# crie o arquivo de variáveis de ambiente
# crie um arquivo .env na raiz com o seguinte conteúdo:
VITE_WEATHER_API_KEY=sua_chave_aqui

# rode o projeto
npm run dev
```

> Você pode obter uma chave gratuita em [weatherapi.com](https://www.weatherapi.com/)

---

## 🧠 Conceitos aplicados

- Componentes funcionais e hooks (`useState`)
- Comunicação entre componentes via props e lifting state up
- Renderização condicional e listas com `.map()`
- Requisições assíncronas com `async/await` e `fetch`
- Variáveis de ambiente com Vite
- Acessibilidade web (WCAG / ARIA)
- Semântica HTML (`main`, `article`, `section`, `ul/li`)
- CSS dinâmico com troca de classes via JavaScript

---

## 👨‍💻 Autor

**Matheus Rodrigues de Camargo**  
Estudante de Engenharia da Computação com foco em se tornar Web Developer.  
Conhecimento em React, JavaScript, acessibilidade web, noções de backend e testes (manuais, Cypress e Playwright).

[![GitHub](https://img.shields.io/badge/GitHub-MathzRod-181717?style=flat&logo=github)](https://github.com/MathzRod/weather-app)
