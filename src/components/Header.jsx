import { useEffect, useState } from "react"
import { Luna } from "./Icons/Luna"
import { IconSun } from "./Icons/IconSun"

export const Header = () => {

  const [theme, setTheme] = useState(false)

  useEffect(()=>{
    if(theme){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <header className="container max-auto px-4 md:mx-auto ">
      <div className="flex justify-between  pt-8 mb-4 ">
        <h1 className="uppercase text-2xl font-bold text-white tracking-[.3em]">
          Todo
        </h1>
        <button onClick={() => setTheme(!theme)}>
          {
           theme ? <IconSun/> : <Luna fill='#fff' />
          }
        </button>
      </div>
    </header>
  )
}
