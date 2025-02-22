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
