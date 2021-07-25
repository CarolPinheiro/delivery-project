import { useState } from "react";
const AdressInput = ({ SearchValue }) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <form>
      <input type='text' onChange={e => setInputValue(e.currentTarget.value)} value={inputValue} placeholder="Digite seu endereço aqui" />
      <button onClick={(event) => {
        event.preventDefault()
        SearchValue(inputValue)
        setInputValue('')
      }}>Procurar</button>
    </form>);
}

export default AdressInput;