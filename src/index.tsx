import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './states/store';
import { QueryClientProvider, QueryClient } from 'react-query';

import reportWebVitals from './reportWebVitals';

import Routes from './routes';

import './styles/index.scss';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false, refetchOnWindowFocus: false } },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
