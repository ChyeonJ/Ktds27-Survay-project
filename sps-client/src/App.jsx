import { ToolkitProvider } from "./toolkit/ToolkitProvider.jsx";
import { RouterAppProvider } from "./router/RouterAppProvider.jsx";

function App() {
  return (
    <ToolkitProvider>
      <RouterAppProvider/>
    </ToolkitProvider>
  )
}

export default App;
