import { useState } from "react"
import BarraBuscadora from "./BarraBuscadora"
import TablaProductos from "./TablaProductos"

const TablaProductosFilrable = ({productos}) => {
  const [textoFiltrado, setTextoFiltrado] = useState('')
  const [soloEnStock, setSoloEnStock] = useState(false)

  return (
    <div>
        <BarraBuscadora
            textoFiltrado={textoFiltrado}
            soloEnStock={soloEnStock}
            filtroCambioTexto={setTextoFiltrado}
            soloEnStockCambio={setSoloEnStock}

        />
        <TablaProductos 
            productos={productos}
            textoFiltrado={textoFiltrado}
            soloEnStock={soloEnStock} 
        />
    </div>
  )
}

export default TablaProductosFilrable