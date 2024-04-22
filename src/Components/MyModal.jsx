import React, { useState } from 'react'
import Calculadora from './Calculadora'

const MyModal = ({titulo, descripcion, valor, eaChange}) => {
    const [modal, setModal] = useState(false)
  return (
    <div>
        <button className='bg-black text-white' onClick={() => {setModal(true)}}>Acá esribe gastos</button>
        {modal && 
            <div className='bg-black text-white flex flex-col justify-center items-center'> 
                <label htmlFor="">Escribe el titulo</label>
                <input type="text" className='bg-black text-white text-center' placeholder='titulo' value={titulo} onChange={(e) => eaChange(e.target.value)}/>
                <label htmlFor="">Escribe la descripción</label>
                <textarea name="" id="" cols="30" rows="10" className='bg-black text-white text-center'>{descripcion}</textarea>
                <Calculadora />
                <button className='' onClick={() => {setModal(false)}}>
                    cerrar
                </button>
            </div>}
    </div> 
  )
}

export default MyModal