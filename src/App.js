import React from 'react';
import './App.css';

import STORE from './store';
import List from './List';

console.log(STORE);

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {STORE.STORE.lists.map(list => (
          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => STORE.STORE.allCards[id])}
          />
        ))}
      </div>
    </main>
  )
}

export default App;
