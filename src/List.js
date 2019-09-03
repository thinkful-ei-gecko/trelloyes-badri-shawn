import React from 'react';
import Card from './Card';

function List() {
  return (
    <section class="List">    
      <header class="List-header">
          <h2>{}</h2>
        </header>
        <div class="List-cards">
            <Card />
      </div>
    </section>
      
  );
}

export default List;