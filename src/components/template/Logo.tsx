import { createContext, Dispatch, SetStateAction, useState } from "react"
import Bmw from "../Images/bmw-icon.avif"
import Image, { StaticImageData } from "next/image"


interface ImagemContextProps {
    imagemAtiva?: any
    setImagemAtiva: Dispatch<SetStateAction<StaticImageData>>
}

const imagemPerfilContext = createContext<ImagemContextProps>({
    imagemAtiva: Bmw,
    setImagemAtiva: null
})


export function Logo () {
    const[imagemAtiva, setImagemAtiva] = useState(Bmw)

    return(
        <imagemPerfilContext.Provider value={{imagemAtiva, setImagemAtiva}}>
        <div className={`
        flex flex-col items-center justify-center
        h-12 w-12 rounded-full
        bg-white 
        `}>
            <Image src={imagemAtiva} alt="" className={`rounded-full h-12 w-12`} />
            {/* <div className="h-3 w-3 rounded-full bg-red-600 mb-0.5" />
            <div className="flex mt-0.5">
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-0.5" />
                <div className="h-3 w-3 rounded-full bg-green-600 ml-0.5" />
            </div> */}

            

        </div>
        </imagemPerfilContext.Provider>
    )
}

export default imagemPerfilContext