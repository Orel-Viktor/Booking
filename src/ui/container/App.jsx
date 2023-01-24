// Core
import { Provider } from "react-redux"
// Engine
import store from "../../engine/config/store"
// Styles
import '../../../styles/App.css'

function App() {
    return (
        <Provider store={store}>
            <div>
                App
            </div>
        </Provider>
    )
}

export default App
