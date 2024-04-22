import React, { useState } from 'react'
// import Calculadora from './Calculadora';

const MyModal = ({titulo, descripcion, eaChange, onChangeNum, num, onChangeArea, actTotal, onClickPos, onClickNeg}) => {
    const [modal, setModal] = useState(false)
     

    
    
  return (
    <div>
        <button className='bg-black text-white' onClick={() => {setModal(true)}}>Acá esribe gastos</button>
        {modal && 
            <div className='bg-black text-white flex flex-col justify-center items-center'> 
                <label htmlFor="">Escribe el titulo</label>
                <input type="text" className='bg-black text-white text-center' placeholder='titulo' value={titulo} onChange={(e) => eaChange(e.target.value)}/>
                <label htmlFor="">Escribe la descripción</label>
                <textarea name="" id="" cols="30" rows="10" className='bg-black text-white text-center' onChange={onChangeArea}>{descripcion}</textarea>

                {/* JAH BLESS - calculadora */}
                <div className='flex flex-col items-center gap-3'>
                    <label htmlFor="">Escribe el valor</label>
                    <span>{num}</span>
                    <input type="number" className=' text-whit bg-gray-800 text-center' value={num} onChange={onChangeNum}/>

                    <div className='flex flex-row gap-11'>
                        <button onClick={onClickNeg}>-</button>
                        <button onClick={onClickPos}>+</button>
                    </div>
                        <div className='flex flex-row gap-4'>
                            <p>Pulsame para restar al total el valor ingresado</p>
                            <p>Pulsame para sumar al total el valor ingresado</p>
                        </div>
                    <h6>Tu total es {actTotal}</h6>
                    <button >Guardar tu valor</button>
                </div>
                <button className='' onClick={() => {setModal(false)}}>
                    cerrar
                </button>
            </div>}
    </div> 
)
}

export default MyModal