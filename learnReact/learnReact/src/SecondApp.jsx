import { books } from "./data";
import { Books } from "./components/Books";

import { useLocalStorage } from "./hooks/useLocalStorage";

function SecondApp() {
  const [order, setOrder] = useLocalStorage([], "order");

  const addToOrder = (id) => {
    const newItem = books.find((item) => item.id === id);

    setOrder([...order, newItem]);
  };

  return <Books items={books} addToOrder={addToOrder} />;
}

export default SecondApp;
