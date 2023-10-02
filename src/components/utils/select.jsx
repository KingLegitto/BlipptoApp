import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



export default function Select(props) {
  const {data, border, onClick, shadow} = props
  const [selected, setSelected] = useState(data[0])

  const handleClick = function(e){
    setSelected(e)
    onClick(e.name)
  }

  return (
    <div className="relative w-36 ">
      <Listbox value={selected} onChange={handleClick}>
        <div className="relative">
          <Listbox.Button className={`relative w-full cursor-default ${border ? 'border-[1px]' : 'border-none'} rounded-md bg-white py-2 pl-1.5 pr-10 text-left  ${shadow ? 'shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]' : 'shadow-none'} focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm md:text-base`}>
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <KeyboardArrowDownIcon />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {data.map((el, Idx) => (
                <Listbox.Option
                  key={Idx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-1 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={el}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {el.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
