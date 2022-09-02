import React, { useState } from 'react';
import BasketModal from './components/BasketModal/BasketModal';

function App() {
  const [mountainDew, setMountainDew] = useState(1.8);
  const [desperados, setDesperados] = useState(2.58);
  const [jackDaniels, setJackDaniels] = useState(1.8);
  const [withVAT, setWithVAT] = useState(false);
  const [total, setTotal] = useState(0);

  const [mountainDewQty, setMountainDewQty] = useState(() => {
    const localData = localStorage.getItem('mountainDew');
    return localData ? parseInt(localData) : 0;
  });
  const [desperadosQty, setDesperadosQty] = useState(() => {
    const localData = localStorage.getItem('desperados');
    return localData ? parseInt(localData) : 0;
  });
  const [jackDanielsQty, setJackDanielsQty] = useState(() => {
    const localData = localStorage.getItem('jackDaniels');
    return localData ? parseInt(localData) : 0;
  });

  

  return (
    <div>
      <BasketModal
        mountainDew={mountainDew}
        setMountainDew={setMountainDew}
        desperados={desperados}
        setDesperados={setDesperados}
        jackDaniels={jackDaniels}
        setJackDaniels={setJackDaniels}
        mountainDewQty={mountainDewQty}
        setMountainDewQty={setMountainDewQty}
        desperadosQty={desperadosQty}
        setDesperadosQty={setDesperadosQty}
        jackDanielsQty={jackDanielsQty}
        setJackDanielsQty={setJackDanielsQty}
        total={total}
        setTotal={setTotal}
        withVAT={withVAT}
        setWithVAT={setWithVAT}
      />
    </div>
  );
}

export default App;
