* Nombre: Matias Casiba
* Link GitHub Repo:
* Link Netlify: 

# Desafio 15
 
 En este desafío estaré armando una lista de productos con sus nombres, precios, categorías y si se enuentran en stock o no, todo esto siguiendo los paso de "Pensar en React": https://es.react.dev/learn/thinking-in-react`

 ## Componentes
 Habrá 5 componentes que se encuentran dentro de la carpeta src/components

### TablaProductosFiltrable.jsx
Este componente es el principal, maneja el estado de los filtros (texto de búsqueda y se muestra solo el stock disponible):
 ```sh
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
 ```

 ### BarraBuscadora.jsx
 Este componente se encarga de leer el input del usuario (texto de búsqueda y checkbox de stock), notifica al componente TablaProductosFiltrable.jsx sobre los cambios:
 ```sh
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
 ```

 ### TablaProductos.jsx
 Este componente se encarga de renderizar la tabla con los productos y filtra la lista segun los criterios recibidos (texto de búsqueda y stock):
 ```sh
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
 ```

 ### FilaCategoriasProductos.jsx
 Este componente va a mostrar el nombre de la categoría como una fila en la tabla
 ```sh
 
const FilaCategoriasProductos = ({categoria}) => {
  return (
    <tr>
        <th colSpan="2">
            {categoria}
        </th>
    </tr>
  )
}

export default FilaCategoriasProductos
 ```

### FilaProductos.jsx
Este va a renderizar cada producto en una fila de la tabla
 ```sh
 
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
 ```

 ## prductos.js
 Este archivo se encuentra dentro de la carpeta src/constants, acá voy a tener todos los productos con sus nombres, categorias, precios y si están en stock:

 ```sh
 const productos = [
    { categoria: 'PC Escritorio', precio: "$ 424.899", stocked: true, nombre: 'PC Armada Gamer Hogar AMD Ryzen 7 5700g 16gb Vega 8'},
    { categoria: 'PC Escritorio', precio: "$ 557.999", stocked: true, nombre: 'PC Armada Gamer Hogar C Monitor AMD Ryzen 7 5700g 16g'},
    { categoria: 'PC Escritorio', precio: "$ 403.899", stocked: true, nombre: 'PC Gamer Armada AMD Ryzen 5 5600g 6/12 Nucleos 16gb Ssd480'},
    { categoria: 'PC Escritorio', precio: "$ 329.499", stocked: false, nombre: 'PC Armada Intel Core I3 10100 8gb RAM 240g Ssd'},
    { categoria: 'PC Escritorio', precio: "$ 659.990", stocked: true, nombre: 'PC Armada Completa Intel I5 13400 16g 1tb Ssd Monitor'},
    { categoria: 'PC Escritorio', precio: "$ 1.658.719", stocked: true, nombre: 'PC Gamer AMD Ryzen 5 5600x 32gb 1tb NVIDIA RTX4060 Ver2.0'},
    { categoria: 'PC Escritorio', precio: "$ 1.088.599", stocked: true, nombre: 'PC ARMADA CPU AMD Ryzen 9 7900 32gb RAM DDR5 1tb Nvme'},
    { categoria: 'PC Escritorio', precio: "$ 585.199", stocked: false, nombre: 'PC Armada Gamer AMD Ryzen 7 5700g 16gb RAM 480g Ssd Ver2.0'},
    { categoria: 'PC Escritorio', precio: "$ 857.899", stocked: true, nombre: 'PC Gamer AMD Ryzen 5 5600x 15gb 489gb Nvidia RTX 3050'},

    { categoria: 'Almacenamiento', precio: "$ 34.999", stocked: true, nombre: 'Disco Sólido Hiksemi Hs-ssd-wave(s) 480g Color Negro'},
    { categoria: 'Almacenamiento', precio: "$ 59.999", stocked: true, nombre: 'Disco Sólido Ssd Crucial M.2 500gb P3 Plus Nvme Gen4 4700mbs Color Negro'},
    { categoria: 'Almacenamiento', precio: "$ 22.499", stocked: true, nombre: 'Hiksemi Disco Ssd M.2 Ngff 256gb Wave Hs-ssd-wave Ppct '},
    { categoria: 'Almacenamiento', precio: "73.999", stocked: true, nombre: 'Disco Duro Wstern Digital Wd10ezerx 1tb'},
    { categoria: 'Almacenamiento', precio: "134.900", stocked: false, nombre: 'Ssd Externo Kignston Xs1000 1tb Rojo Usb 3.2 Gen 2'},
    { categoria: 'Almacenamiento', precio: "32.999", stocked: true, nombre: 'Ssd M.2 250gb Western Digital Nvme 2280 Pcie Gen3 2400mb/s Color Verde'},

    { categoria: 'Placas de Video', precio: "$ 521.130", stocked: true, nombre: 'Placa de video Nvidia MSI Ventus GeForce RTX 30 Series RTX 3060 VENTUS 2X 12G OC OC Edition 12GB Gddr6'},
    { categoria: 'Placas de Video', precio: "$ 114.799", stocked: false, nombre: 'Placa Video Sentey Radeon Rx 560 4gb Ddr5 Hdmi'},
    { categoria: 'Placas de Video', precio: "$ 719.962", stocked: true, nombre: 'Placa de video Nvidia MSI Ventus 2X GeForce RTX 40 Series RTX 4060 GeForce RTX 4060 VENTUS 2X BLACK 8G OC Black OC Edition 8GB'},
    { categoria: 'Placas de Video', precio: "$ 199.000", stocked: true, nombre: 'Placa de video AMD Gigabyte Eagle Radeon RX 6400 Series RX 6400 GV-R64EAGLE-4GD 4GB'},
    { categoria: 'Placas de Video', precio: "$ 84.999", stocked: true, nombre: 'Placa de video Nvidia Asus GeForce GT 730 700 Series GDDR5 GT730-SL-2GD5-BRK Black Edition 2GB'},
    { categoria: 'Placas de Video', precio: "$ 399.900", stocked: true, nombre: 'Placa De Video Nvidia Rtx 2060 Super 8gb Gddr6 - Colorful'},
    { categoria: 'Placas de Video', precio: "$ 1.395.492", stocked: false, nombre: 'Tarjeta De Video Asus Tuf Rtx 4070 Ti Super Oc 16gb Gddr6x'},
    { categoria: 'Placas de Video', precio: "$ 614.999", stocked: true, nombre: 'Placa de video Nvidia MSI Gaming GeForce RTX 30 Series RTX 3070 Ti GEFORCE RTX 3070 Ti GAMING X TRIO 8G 8GB'},

    { categoria: 'Memoria Ram', precio: "$ 20.499", stocked: true, nombre: 'Memoria Ddr4 8 Gb 3200 Mhz Hiksemi Hsc408u32z2'},
    { categoria: 'Memoria Ram', precio: "$ 33.173", stocked: false, nombre: 'Memoria Ddr4 16 Gb 3200 Mhz Hiksemi Hsc416u32z1 Negro'},
    { categoria: 'Memoria Ram', precio: "$ 37.999", stocked: true, nombre: 'Memoria RAM Fury Beast DDR4 RGB gamer color negro 8GB 1 Kingston KF432C16BBA/8'},
    { categoria: 'Memoria Ram', precio: "$ 42.000", stocked: true, nombre: 'Memoria Ram Gamer Ddr4 Hiksemi Future 16gb 3200mhz U-dimm Rgb'}
];

export default productos
 ```

 ## App.jsx
 Acá solo voy a llamar al componente TablaProductosFiltrable.jsx y también a los productos que están dentro del archivo productos.js:
 ```sh
 import TablaProductosFilrable from "./components/TablaProductosFilrable"
import productos from "./constants/productos"


const App = () => {
  return (
    <div>
      <TablaProductosFilrable productos={productos} />
    </div>
  )
}

export default App
 ```