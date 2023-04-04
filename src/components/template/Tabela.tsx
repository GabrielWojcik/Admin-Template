import * as React from 'react'
import { useState } from 'react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor(row => row.lastName, {
    id: 'itemTrocado',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Item Trocado</span>,
  }),
  columnHelper.accessor('age', {
    header: () => 'Marca',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Data</span>,
  }),
  columnHelper.accessor('status', {
    header: 'Valor',
  }),
  columnHelper.accessor('progress', {
    header: 'Mecanica',
  }),
]

export default function Tabela() {
  const [data, setData] = React.useState(() => [...defaultData])
  const [openModal, setOpenModal] = useState(false)
  const [exchangedItem, setExchangedItem] = useState<string>()
  const [brand, setBrand] = useState<string>()
  const [date, setDate] = useState<string>()
  const [value, setValue] = useState<string>()
  const [mechanical, setMechanical] = useState<string>()

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })


  return (
   <div> 
    <div className='flex justify-end items-center w-full h-10 gap-2'>
        <button 
          className='bg-green-500 w-8 h-8 rounded hover:bg-green-400'
          onClick={() => setOpenModal(true)}
          >
          +
        </button>
        <button className='bg-red-500 w-8 h-8 rounded hover:bg-red-400'>
          -
        </button>
    </div>
    {
      openModal ? 
      <div className='bg-white w-full h-full rounded z-10'>
        <div className='flex justify-end items-center right-0 h-10 gap-2 px-2'>
            <div className='flex w-full font-bold p-1'>
              <h1 className='text-black'>Cadastrar Nova Troca</h1>
            </div>
            <button 
              className='bg-red-500 w-8 h-8 rounded hover:bg-red-400'
              onClick={() => setOpenModal(false)}
              >
              X
            </button>
        </div>

        <div className='flex flex-col text-black p-2'>
          <label>Item Trocado</label>
          <input 
          className='border-solid border-2 w-3/6' 
          type='text'
          onChange={(e) => setExchangedItem(e.target.value)} 
          />
          
          <label>Marca</label>
          <input 
          className='border-solid border-2 w-3/6' 
          type='text' 
          onChange={(e) => setBrand(e.target.value)} 

          />
        
          <label>Data</label>
          <input 
          className='border-solid border-2 w-3/6' 
          type='text' 
          onChange={(e) => setDate(e.target.value)} 
          />
          
          <label>Valor</label>
          <input 
          className='border-solid border-2 w-3/6' 
          type='text' 
          onChange={(e) => setValue(e.target.value)} 
          />
        
          <label>Mecânica</label>
          <input 
          className='border-solid border-2 w-3/6' 
          type='text' 
          onChange={(e) => setMechanical(e.target.value)} 
          />
        </div>

        <div className='p-2'>
            <button className='bg-green-500 hover:bg-green-400 text-white rounded w-3/6 h-8'>
              Adicionar
            </button>
        </div>

      </div>
      :
      false
    }

    <div className="mt-2 w-full bg-gray-100 text-gray-900 rounded">
      <table className='w-full'>
        <thead className='w-full bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-800 text-white'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th  key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr className='text-center' key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td  key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
    </div>
  )
}

