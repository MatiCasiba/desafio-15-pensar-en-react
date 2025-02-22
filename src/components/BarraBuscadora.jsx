
const BarraBuscadora = ({textoFiltrado, soloEnStock, filtroCambioTexto, soloEnStockCambio}) => {
  return (
    <form>
        <input 
            type="text" 
            value={textoFiltrado}
            placeholder='Buscar productos... ' 
            onChange={(e)=> filtroCambioTexto(e.target.value)}
        />
        <label htmlFor="stock">
            <input 
                id='stock' 
                type="checkbox"
                checked={soloEnStock} 
                onChange={(e)=> soloEnStockCambio(e.target.checked)}
            />
            {' '}
            Mostrar solo productos en stock
        </label>
    </form>
  )
}

export default BarraBuscadora