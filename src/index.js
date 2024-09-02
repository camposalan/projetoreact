import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/home';

import Contato  from './pages/contato';

import Imagem from './pages/imagem';

import Eventos from './pages/eventos';

import VariavelEstado from './pages/variavelestado';

import Discord from './pages/discord';

import Alunos from './pages/alunos';

import Efeitos from './pages/efeitos';

import  Renderizacao from './pages/renderizacao';

import Api from './pages/api';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Contato' element={<Contato />} />
      <Route path='imagem' element={<Imagem/>} />
      <Route path='eventos' element={<Eventos/>} />
      <Route path='variavel' element={<VariavelEstado/>} />
      <Route path='discord' element={<Discord/>} />
      <Route path='alunos' element={<Alunos/>} />
      <Route path='efeitos' element={<Efeitos/>} />
      <Route path='renderizacao' element={<Renderizacao/>} />
      <Route path='api' element={<Api/>} />

    </Routes>
    
    
    </BrowserRouter>
  </React.StrictMode>
);

