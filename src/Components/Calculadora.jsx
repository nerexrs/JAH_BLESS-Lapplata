// import React, { useState } from 'react'

// const Calculadora = (onChange, value) => {
//     const [number, setNumber] = useState(0)
//     const [total, setTotal] = useState(0)

//     let sendNumInp = (value) => {
      
//     }
//     return (
//     <div className='flex flex-col items-center gap-3'>
//         <label htmlFor="">Escribe el valor</label>
//         <span>{number}</span>

//         <div className='flex flex-row gap-11'>
//             <button onClick={(e) => setTotal(total - number)}>-</button>
//             <button onClick={(e) => setTotal(total + number)}>+</button>
//         </div>
//             <div className='flex flex-row gap-4'>
//                 <p>Pulsame para restar al total el valor ingresado</p>
//                 <p>Pulsame para sumar al total el valor ingresado</p>
//             </div>
//         <h6>Tu total es {total}</h6>
//     </div>
//   )
// }

// export default Calculadora