import '../styles/style.css';

export const Card = ({ elem, addToCard }) => {
  const { id, price, image, name, description } = elem;

  return (
    <div id={id} className='max-w-sm flex p-7 items-center gap-9 border'>
      <div>
        <img
          className='w-full min-h-80 h-full object-cover'
          src={`/img/${image}.jpg`}
        />
      </div>
      <div className='flex flex-col gap-7'>
        <h2 className='text-3xl font-mediums'>{name}</h2>
        <p>{description}</p>
        <span className='text-orange-500 text-4xl font-bold'>${price}</span>
        <button
          className='bg-black text-white p-3 hover:bg-slate-600 transition-all'
          onClick={() => addToCard(elem)}
        >
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};
