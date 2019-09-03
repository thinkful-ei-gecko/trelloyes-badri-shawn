import React from 'react';
import List from './List';
import './App.css';

function App(props) { 
  console.log(props.input.lists); 
  return ( <main className="App"> 
  <header className="App-header"> 
    <h1>Trelloyes!</h1>
  </header>
  <div className="App-list">

  {props.input.lists.map(list => {
    const cards = list.cardIds.map(cardId => props.input.allCards[cardId]);
    return <List key={list.id} header={list.head} cards={cards} />;
  })}
    </div>
</main>
); }

export default App;

