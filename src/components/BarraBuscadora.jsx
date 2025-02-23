
const BarraBuscadora = ({textoFiltrado, soloEnStock, filtroCambioTexto, soloEnStockCambio}) => {
  return (
    <form className=" flex justify-between items-center border-b">
        <input 
            type="text" 
            value={textoFiltrado}
            placeholder='Buscar productos... '
            className="mb-3 text-2xl p-2 rounded-lg focus:outline-none focus:bg-gray-100" 
            onChange={(e)=> filtroCambioTexto(e.target.value)}
        />
        <label htmlFor="stock" className="text-lg font-black">
            <input 
                id='stock' 
                type="checkbox"
                checked={soloEnStock} 
                onChange={(e)=> soloEnStockCambio(e.target.checked)}
            />
            {' '}
            En stock
        </label>
    </form>
  )
}

export default BarraBuscadora 