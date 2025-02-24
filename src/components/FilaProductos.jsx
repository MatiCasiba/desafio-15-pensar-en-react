
const FilaProductos = ({producto}) => {
  const nombre = producto.stocked ? producto.nombre :
    <span className="text-red-500">
        {producto.nombre}
    </span>
  return (
    <tr className="text-lg align-top">
        <td className="font-semibold w-72 whitespace-normal">{nombre}</td>
        <td className="text-right w-auto">{producto.precio}</td>
    </tr>
  )
}

export default FilaProductos