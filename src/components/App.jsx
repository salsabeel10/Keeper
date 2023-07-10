import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Notes from './Notes';
import notesList from '../notes';
import './styles/style.css';


function App() {
    return(
        <div>
        <Header />
        {notesList.map(not=>
        <Notes 
        key={not.key}
        title={not.title}
        content={not.content}
        />
        )}

        <Footer />
        
        </div>
    );
    
}

export default App;