import React from 'react';
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'

import { store } from './src/store/store'
import RootNavigator from './src/RootNavigator';

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  </QueryClientProvider>
)

export default App;
