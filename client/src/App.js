import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './Components/default';
import { Box } from '@mui/material'

//components
import Header from './Components/Header/Header';
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './Components/Cart/Cart';
import  Adminview  from './Components/AdminPanel/Adminview';
import { ChatPage } from './Components/ChatPage/ChatPage';
import Orders from './Components/AdminPanel/components/Orders/Orders'
import Products from './Components/AdminPanel/components/Products/Products'
import Users from './Components/AdminPanel/components/Users/Users'
import CreateProduct from './Components/AdminPanel/components/CreateProduct/Createproduct'
function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />
              <Route path= '/admin' element={<Adminview />} />
              <Route path= '/chats' element={<ChatPage />} />
              <Route path= '/create-product' element={<CreateProduct />} />
              <Route path= '/orders' element={<Orders />} />
              <Route path= '/users' element={<Users />} />
              <Route path= '/products' element={<Products />} />

            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
