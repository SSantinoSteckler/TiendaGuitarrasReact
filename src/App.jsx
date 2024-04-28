import './styles/style.css';
import { Header } from './components/Header';
import { Card } from './components/Card';

import { useCarro } from './hooks/useCarro';

export function App() {
  const {
    data,
    carro,
    setCarro,
    vaciarCarro,
    eliminarGuitarra,
    aumentarCantidad,
    disminuirCantidad,
    addToCard,
    total,
  } = useCarro();

  return (
    <>
      <Header
        carro={carro}
        setCarro={setCarro}
        vaciarCarro={vaciarCarro}
        eliminarGuitarra={eliminarGuitarra}
        aumentarCantidad={aumentarCantidad}
        disminuirCantidad={disminuirCantidad}
        total={total}
      ></Header>
      <main className='w-full min-h-screen p-9'>
        <div className='flex flex-wrap w-full justify-center gap-7'>
          {data.map((elem) => {
            return (
              <Card
                key={elem.id}
                setCarro={setCarro}
                elem={elem}
                carro={carro}
                addToCard={addToCard}
              ></Card>
            );
          })}
        </div>
      </main>
    </>
  );
}
