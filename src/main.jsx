import React from 'react';
import ReactDOM from 'react-dom/client';
import GillionHomepage from './GillionHomepage.jsx';

// Note: intentionally NOT wrapped in <React.StrictMode>.
// GillionHomepage's useEffect does one-time, non-idempotent DOM work
// (cloning hero slides, appending trend cards, appending dot buttons).
// StrictMode's dev-only double-invoke of effects would run that twice
// and visibly duplicate slides/cards. If you want StrictMode elsewhere,
// keep this component outside of it.
ReactDOM.createRoot(document.getElementById('root')).render(
  <GillionHomepage />
);
