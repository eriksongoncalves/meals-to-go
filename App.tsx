import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Home from './src/components/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}
