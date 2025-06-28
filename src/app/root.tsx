import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/components/App';

import '@/app/root.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
