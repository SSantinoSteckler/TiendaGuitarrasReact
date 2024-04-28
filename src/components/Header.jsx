import titleSvg from '/public/img/logo.svg';
import carritoImg from '/public/img/carrito.png';
import '../styles/style.css';
import { useState } from 'react';

export const Header = ({
  carro,
  eliminarGuitarra,
  total,
  vaciarCarro,
  aumentarCantidad,
  disminuirCantidad,
}) => {
  const [modalState, setModalState] = useState(false);

  const abrirModal = () => {
    setModalState(!modalState);
  };

  return (
    <header className='bg-black flex flex-row justify-between py-14 px-24 items-center'>
      <div className='max-w-lg'>
        <img className='w-full' src={titleSvg} />
      </div>
      <div className='max-w-12'>
        <img
          className='w-full cursor-pointer hover:bg-orange-500 p-4"'
          src={carritoImg}
          onClick={abrirModal}
        />
      </div>
      {modalState && (
        <div className='bg-gray-900 p-4 rounded-lg shadow-lg absolute right-8 top-36'>
          <table className='text-white w-full'>
            <thead>
              <tr>
                <th className='px-4 py-2'>Imagen</th>
                <th className='px-4 py-2'>Nombre</th>
                <th className='px-4 py-2'>Precio</th>
                <th className='px-4 py-2'>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {carro.map((elem) => (
                <tr key={elem.id} className='border-b border-gray-600'>
                  <td className='px-4 py-2'>
                    <img
                      src={`/img/${elem.image}.jpg`}
                      alt={elem.name}
                      className='w-12 h-12 object-cover rounded-md'
                    />
                  </td>
                  <td className='px-4 py-2'>{elem.name}</td>
                  <td className='px-4 py-2'>${elem.price}</td>
                  <td className='px-4 py-2'>
                    <button
                      className='px-2 py-1 bg-blue-500 text-white rounded-md mr-1'
                      onClick={() => aumentarCantidad(elem.id)}
                    >
                      +
                    </button>
                    {elem.cantidad}
                    <button
                      className='px-2 py-1 bg-red-500 text-white rounded-md ml-1'
                      onClick={() => disminuirCantidad(elem.id)}
                    >
                      -
                    </button>
                    <button
                      className='m-4 bg-white rounded-md pointer'
                      onClick={() => eliminarGuitarra(elem)}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td className='text-lg font-bold'>Total:{total}</td>
              </tr>
            </tbody>
          </table>
          <button
            className='bg-red-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-600'
            onClick={vaciarCarro}
          >
            Vaciar Carrito
          </button>
        </div>
      )}
    </header>
  );
};
