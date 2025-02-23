import FilaCategoriasProductos from "./FilaCategoriasProductos"
import FilaProductos from "./FilaProductos"

const TablaProductos = ({ productos, textoFiltrado, soloEnStock }) => {
  const filas = []
  let ultimaCategoria = null

  productos.forEach((producto) => {
    if (
        producto.nombre.toLowerCase().indexOf(
            textoFiltrado.toLowerCase()
        ) === -1
    ) {
        return;
    }

    if (soloEnStock && !producto.stocked){
        return;
    }

    if (producto.categoria !== ultimaCategoria) {
      filas.push(
        <FilaCategoriasProductos categoria={producto.categoria} key={producto.categoria} />
      )
    }
    filas.push(
      <FilaProductos producto={producto} key={producto.nombre} />
    )
    ultimaCategoria = producto.categoria 
  })

  return (
    <table className="my-5">
      <thead className="text-2xl border-b-2">
        <tr>
          <th className="text-start">Nombre</th>
          <th className="text-start">Precio</th>
        </tr>
      </thead>
      <tbody>{filas}</tbody>
    </table>
  )
}

export default TablaProductos
