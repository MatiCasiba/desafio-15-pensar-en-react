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
        <TablaProductos 
            productos={productos}
            textoFiltrado={textoFiltrado}
            soloEnStock={soloEnStock} 
        />
    </div>
  )
}

export default TablaProductosFilrable