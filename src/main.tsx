// Ensure window.fetch has both getter and setter across all environments and sandbox iframes
if (typeof window !== 'undefined') {
  try {
    let _activeFetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      get: () => _activeFetch,
      set: (fn) => {
        _activeFetch = fn;
      },
      configurable: true,
      enumerable: true,
    });
  } catch {
    // Ignore if already non-configurable or defined
  }
}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
