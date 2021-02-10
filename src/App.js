import React, { useState } from 'react'
import Counter from './components/counter'
import { CountProvider } from './providers/count-provider'

function App() {

  return (
    <CountProvider>
      <div className="container my-5">
        <h3 className="text-center">React Hooks and Context Api - Like Redux</h3>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Counter />
          </div>
        </div>
      </div>
    </CountProvider>
    
  );
}

export default App;
