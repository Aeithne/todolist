import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TodoApp from './TodoApp.jsx'
import TodoCard from './TodoCard.jsx'
import NewCard from './NewCard.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
