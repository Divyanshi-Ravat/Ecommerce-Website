import { createContext, useState } from 'react';

export const LoginContext = createContext(null);

const ContextProvider = ({children}) => {

    const [ account, setAccount ] = useState('');
    const [ admin, setAdmin ] = useState(false);
    
    return (
        <LoginContext.Provider value={{ account, setAccount,admin,setAdmin }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;