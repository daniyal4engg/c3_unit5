import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <div>
      <AuthContext.Provider value={{ token, handleToken }}>
        children
      </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
