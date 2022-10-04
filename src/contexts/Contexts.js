import { createContext, useContext,  useState } from "react";


const Cart = createContext();

const Context = ({ children }) => {
  const [image, setImage] = useState("");
  const [values, setValues] = useState({
    event: "",
    host: "",
    start: "",
    end: "",
    location: "",
  });
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage({
        preview: URL.createObjectURL(file),
        file,
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleChangeImage = () => {
    setImage(null);
  };
 
  return (
    <Cart.Provider
      value={{
        values,
        setValues,
        handleChange,
        image,setImage, handleChangeImage, handleImage
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export const AdminState = () => {
  return useContext(Cart);
};

export default Context;
