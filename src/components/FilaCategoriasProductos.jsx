
const FilaCategoriasProductos = ({categoria}) => {
  return (
    <tr>
        <th className="text-2xl py-5 tracking-wider" colSpan="2">
            {categoria}
        </th>
    </tr>
  )
}

export default FilaCategoriasProductos