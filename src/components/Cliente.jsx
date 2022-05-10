import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cliente = ({cliente}) => {
  //destructuring
  const {nombre, empresa, email, phone, notes, id } = cliente

  return (
    <tr className='border-b hover:bg-gray-50'>
        <td className='p-3 font-extralight'>
            {nombre}
        </td>
        <td className='p-3'>
            <p className='font-light'><span className='uppercase text-gray-800 font-bold '>Email:</span> {email}</p>
            <p className='font-light'><span className='uppercase text-gray-800 font-bold'>Phone:</span> {phone}</p>
        </td>
        <td className='p-3 font-light'>
            {empresa}
        </td>
        <td className='p-3 font-light'>
            <button
             type='button'
             className='bg-green-600 hover:bg-green-700 block text-white w-full p-2 font-bold text-sm uppercase rounded '
             >
              Check
            </button>
            <button
             type='button'
             className='bg-blue-600 hover:bg-blue-700 block text-white w-full p-2 font-bold text-sm uppercase mt-3 rounded'
             >
              Edit
            </button>
            <button 
            type='button'
            className='bg-red-600 hover:bg-red-700 block text-white w-full p-2 font-bold text-sm uppercase mt-3 rounded'
            
            >
              Delete
            </button>
        </td>
    </tr>
  )
}

export default Cliente