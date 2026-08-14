import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
// Layouts
import { MainLayout } from '../layouts/MainLayout.jsx'
// Pages
import { Top } from '../pages/Top.jsx'
import { Mermaid } from '../pages/Mermaid.jsx'
import { CsvService } from '../pages/CsvService.jsx'
import { ExcelService } from '../pages/ExcelService.jsx'
import { StringService } from '../pages/StringService.jsx'

// ルートオブジェクト
const pageRotes = [
  {
    path: '/',
    element: <Top />
  },
  {
    path: '/mermaid',
    element: <Mermaid />
  },
  {
    path: '/csv',
    element: <CsvService />
  },
  {
    path: '/excel',
    element: <ExcelService />
  },
  {
    path: '/string',
    element: <StringService />
  }
]
const ReactRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
          {pageRotes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default ReactRoutes