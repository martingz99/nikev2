import './App.css'

function App() {

  const saludo = "Tienda de ropa Nike"

  const compraste = ( ) => {
    alert("Compraste la prenda!")
  }

  return (
    <>
      <div className='title'>
        <img src="/img/nike.jpg" alt="" />
        <p>dsajdlkhsa</p>
        <h1>{saludo} </h1>
        <button onClick={compraste}>Comprar</button>
      </div>
    </>
  )
}

export default App
