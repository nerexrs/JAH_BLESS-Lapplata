import React, { useState } from 'react';
import MyModal from './MyModal';

const MyTable = () => {
  // const data = [
  //   { id: 1, name: 'John Doe', age: 25, email: 'johndoe@example.com' },
  //   { id: 2, name: 'Jane Doe', age: 30, email: 'janedoe@example.com' },
  //   { id: 3, name: 'Alice Smith', age: 28, email: 'alicesmith@example.com' },
  // ];
  const [title, setTitle] = useState("")
  const handelInputChange = (value) => {
    setTitle(value)
  }

  const [precioIntroducido, setPrecioIntroducido] = useState(0);
  const handleChange = (evento) => {
    setPrecioIntroducido(evento.target.value);
  parseInt(precioIntroducido)

  };
   
  const [descripcion, setDescripcion] = useState('');

  const handleChangeArea = (evento) => {
    setDescripcion(evento.target.value);
  };
  const [total, setTotal] = useState(0);
  parseInt(total)
  const handleChangeButtonPos = () => {
  
    setTotal(parseInt(precioIntroducido)
    + parseInt(total));
  };

  const handleChangeButtonNeg = () => {
    setTotal(total - precioIntroducido);
  };
  return (
    <div className="overflow-x-auto">
      <MyModal eaChange={handelInputChange} titulo={title} onChangeNum={handleChange} 
      num={precioIntroducido} onChangeArea={handleChangeArea} actTotal={total} 
      onClickNeg={handleChangeButtonNeg} onClickPos={handleChangeButtonPos}
      />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Categoría
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Valor transacción
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Valor total en ese momento
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Descripción
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        <tr >
              <td className="px-6 py-4 whitespace-nowrap">{title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{precioIntroducido}</td>
              <td className="px-6 py-4 whitespace-nowrap">{total}</td>
              <td className="px-6 py-4 whitespace-nowrap">{descripcion}</td>
            </tr>
          {/* {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.age}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
