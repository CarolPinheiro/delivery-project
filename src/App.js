import { useState, useEffect } from 'react';
import AdressInput from './Components/AddressInput';
import Header from './Components/Header'
function App() {
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    console.log(searchValue)
  }, [searchValue])
  return (
    <>
      <Header />
      <AdressInput SearchValue={setSearchValue} />
    </>
  );
}

export default App;
