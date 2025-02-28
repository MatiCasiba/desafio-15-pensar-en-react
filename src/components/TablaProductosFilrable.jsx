import { useState } from "react"
import BarraBuscadora from "./BarraBuscadora"
import TablaProductos from "./TablaProductos"

const TablaProductosFilrable = ({productos}) => {
  const [textoFiltrado, setTextoFiltrado] = useState('')
  const [soloEnStock, setSoloEnStock] = useState(false)

  const productosFiltrados = productos.filter(producto => {
    const coincideTexto = producto.nombre.toLowerCase().includes(textoFiltrado.toLocaleLowerCase())
    const coincideStock = !soloEnStock || producto.stocked
    return coincideTexto && coincideStock
  })

  return (
    <div>
        <BarraBuscadora
            textoFiltrado={textoFiltrado}
            soloEnStock={soloEnStock}
            filtroCambioTexto={setTextoFiltrado}
            soloEnStockCambio={setSoloEnStock}

        />
        <p className="text-lg text-gray-400 font-semibold my-2">Productos disponibles: {productosFiltrados.length}</p>
        {productosFiltrados.length > 0 ? (
          <TablaProductos 
            productos={productos}
            textoFiltrado={textoFiltrado}
            soloEnStock={soloEnStock} 
          />
        ) : (
          <p className="text-center text-red-500 text-xl mt-5">No encontrado</p>
        )}
    </div>
  )
}

export default TablaProductosFilrable