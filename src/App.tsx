import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { Toaster } from './components/Ui/toast'

function App({children}:{children:React.ReactNode}) {
const queryClient = new QueryClient()
  return (
   <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
   </QueryClientProvider>
  )
}

export default App
