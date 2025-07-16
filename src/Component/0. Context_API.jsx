import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext({
  news: [],
  set_news: () => { },
  loading: true,
});

const StoreContextProvider = ({ children }) => {
  const [news, set_news] = useState([]);
  const [loading, set_loading] = useState(true);

  useEffect(() => {
    const ApiCall = async () => {
      try {
        const ApiLink = await axios.get(
          "https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json"
        );
        set_news(ApiLink.data);
        setTimeout(() => {
          set_loading(false);
        }, 8000);
      } catch (error) {
        console.error("Error fetching news:", error);
        set_loading(false);
      }
    };

    ApiCall();
  }, []);

  return (
    <StoreContext.Provider value={{ news, set_news, loading }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
