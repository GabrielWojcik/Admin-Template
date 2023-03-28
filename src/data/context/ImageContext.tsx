import { createContext, useState } from "react";
import Bmw from "../../components/Images/bmw-icon.avif"

interface AppContextProps {
    imagem?: any
    // alternarImagem?: () => void
}


const ImageContext = createContext<AppContextProps>({
    imagem: null,
})

export function ImageProvider(props) {
    const [imagem, setImagem] = useState(1)

    return (
        <ImageContext.Provider
        value={{imagem}}
        >
            {props.children}
        </ImageContext.Provider>
    )
}

export default ImageContext