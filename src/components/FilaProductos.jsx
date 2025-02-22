
const FilaProductos = ({producto}) => {
  const nombre = producto.stocked ? producto.nombre :
    <span className="text-red-500">
        {producto.nombre}
    </span>
  return (
    <tr>
        <td>{nombre}</td>
        <td>{producto.precio}</td>
    </tr>
  )
}

export default FilaProductos