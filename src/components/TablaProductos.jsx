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
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{filas}</tbody>
    </table>
  )
}

export default TablaProductos
