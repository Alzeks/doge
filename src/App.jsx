
import './App.css';
import { useState } from 'react';
import { Modal } from './components/Modal';
import { IoSearch } from "react-icons/io5";

function App() {
  const [isModal, setIsModal] = useState(false)
  
  const openSearchModal = () => {
    setIsModal((prev) => !prev)
  }
  return (
    <div className="App">
      <div className='main'>
        <div className={isModal ? 'button__active' : 'button'} onClick={openSearchModal}>
          <div className='button__icon'><IoSearch /></div>
          <div >SEARCH</div>
        </div>
        {isModal && <Modal />}

      </div>
    </div>
  );
}

export default App;
