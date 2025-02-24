import TablaProductosFilrable from "./components/TablaProductosFilrable"
import productos from "./constants/productos"


const App = () => {
  return (
    <div className="max-w-4xl m-auto my-5 border p-4 rounded-2xl shadow-2xl">
      <TablaProductosFilrable productos={productos} />
    </div>
  )
}

export default App
