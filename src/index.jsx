import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from './context/authContext';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { App } from './App';

import './styles/index.scss';

const queryClinet = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClinet}>
			<AuthProvider>
				<BrowserRouter>
					<Toaster />
					<App />
					<ReactQueryDevtools initialIsOpen={false} />
				</BrowserRouter>
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
