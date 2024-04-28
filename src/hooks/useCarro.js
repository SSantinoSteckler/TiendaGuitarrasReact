import { useState, useEffect, useMemo } from 'react';
import { db } from '../data/db';

export const useCarro = () => {
  //Forma alternativa para el Get del storage
  // const initialCart = () => {
  //    const localStorageCarro = localStorage.getItem("Cart")
  //     return localStorageCarro ? JSON.parse(localStorageCarrp) : []
  //    }
  // La funcion se instroduce en el useState como initialState

  const localCarro = JSON.parse(localStorage.getItem('carro'));

  const [data] = useState(db);
  const [carro, setCarro] = useState(localCarro ? localCarro : []);

  function addToCard(item) {
    const existingItem = carro.find((elem) => elem.id === item.id);
    if (existingItem) {
      const updatedCarr = carro.map((elem) =>
        elem.id === item.id ? { ...elem, cantidad: elem.cantidad + 1 } : elem
      );
      setCarro(updatedCarr);
    } else {
      item.cantidad = 1;
      setCarro([...carro, item]);
    }
  }

  const vaciarCarro = () => {
    setCarro([]);
  };

  const eliminarGuitarra = (elem) => {
    setCarro((prevCarro) =>
      prevCarro.filter((guitar) => guitar.id !== elem.id)
    );
  };

  const aumentarCantidad = (id) => {
    const updatedCarr = carro.map((item) => {
      if (id === item.id) {
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });
    setCarro(updatedCarr);
  };

  const disminuirCantidad = (id) => {
    const updatedCarr = carro.map((item) => {
      if (id === item.id && item.cantidad > 1) {
        return { ...item, cantidad: item.cantidad - 1 };
      }
      return item;
    });
    setCarro(updatedCarr);
  };

  useEffect(() => {
    localStorage.setItem('carro', JSON.stringify(carro));
  }, [carro]);

  const total = useMemo(
    () => carro.reduce((acc, item) => acc + item.cantidad * item.price, 0),
    [carro]
  );

  return {
    data,
    carro,
    setCarro,
    vaciarCarro,
    eliminarGuitarra,
    aumentarCantidad,
    disminuirCantidad,
    addToCard,
    total,
  };
};
