import Modal from 'react-modal';
import { useContext, useState } from 'react';
import Image from 'next/image';
import Gtr from "../Images/gtr-icon.avif";
import Bmw from "../Images/bmw-icon.avif";
import Mustang from "../Images/mustang-icon.avif";
import { IconeFechar } from '../icons';
import imagemPerfilContext from './Logo';


export default function EscolherAvatar() {
    const { imagemAtiva, setImagemAtiva } = useContext(imagemPerfilContext)

    // const setImagemAtiva = useContext(imagemPerfilContext)
    console.log('setImagemAtiva', setImagemAtiva)

    const [modalIsOpen, setIsOpen] = useState(false);
    const [imageSelected, setImageSelected] = useState(Bmw);

    console.log('setImagemAtiva EscolherAvatar',typeof(setImagemAtiva))

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
  
    function openModal() {
      setIsOpen(true);
    }
  
    return(
        <div className={`flex w-full h-full 
        bg-white rounded justify-around items-center
        
        `} >
            <div className={`
            bg-white
            px-0
            py-5
            `}>
                <Image src={imagemAtiva} alt='' width={250} height={250} className='rounded' />
            </div>
                <div className="flex  w-1/6 gap-5">
                    <button 
                    onClick={openModal}
                    className={`
                    flex
                    items-center
                    bg-white
                    rounded-full border-2 border-gray-500
                    h-10
                    w-25
                    p-5
                    text-black
                    `}>Escolher
                    </button>
                    
                    <button className={`
                    flex
                    items-center
                    bg-blue-500
                    rounded-full border-2 border-white
                    text-white
                    h-10
                    w-35
                    p-5
                    `}>Carregar
                    </button>
                        <Modal
                            isOpen={modalIsOpen}
                            style={customStyles}
                        >
                            <div className='flex justify-between mb-3'>
                                <h2>Selecione uma Imagem</h2>
                                <button onClick={() => setIsOpen(false)}> 
                                {/* <IconeFechar />  */} X
                                </button>
                            </div>
                            <div className="flex gap-1">
                                <div 
                                onClick={ (e) => setImagemAtiva} 
                                className='cursor-pointer'>
                                    <Image src={Gtr} alt='' width={100} height={100} />
                                </div>
                                <div
                                // onClick={(e) => setImagemAtiva(e.target["data-loaded-src"])}
                                className='cursor-pointer'
                                >
                                    <Image src={Bmw} alt='' width={100} height={100} />
                                </div>
                                <div
                                // onClick={(e) => setImagemAtiva(e.target["data-loaded-src"])}
                                className='cursor-pointer'
                                >
                                    <Image src={Mustang} alt='' width={100} height={100} />
                                </div>
                            </div>
                        </Modal>
                </div>
        </div>
    )
}