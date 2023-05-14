import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Github from './assets/svgs/github.svg'
import Discord from './assets/svgs/discord.svg'
import Instagram from './assets/svgs/instagram.svg'
import Filled from './assets/imgs/filled.png'
import OutlinedFlat from './assets/imgs/outlined_flat.png'

function App() {

  return (
    <>
      <header className='w-screen h-screen flex flex-col justify-center items-center'>
        <div className='w-screen flex justify-around items-center'>
          <div className='flex justify-center items-center mb-2'>
            <a className='flex flex-col items-center mr-16' href="https://dyacode.kro.kr" target='_blank'>
              <FontAwesomeIcon className='w-8 h-8 text-red-400 transition duration-300 hover:scale-125' icon={faHeart} />
              <div className='font-[Inter] font-[400] text-sm text-red-400'>Portfolio</div>
            </a>
            <a className='flex flex-col items-center mr-16' href="https://github.com/dya-only" target='_blank'>
              <img className='github w-8 h-8 text-red-400 transition duration-300 hover:scale-125' src={Github} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#50C878]'>Github</div>
            </a>
          </div>

          <div />
        </div>

        <img className='w-full h-[400px] object-cover' src={Filled} alt="" />

        <div className='w-screen flex justify-around items-center'>
          <div />

          <div className='flex justify-center items-center mt-2'>
            <a className='flex flex-col items-center ml-16' href="" target='_blank'>
              <img className='discord w-8 h-8 text-red-400 transition duration-300 hover:scale-125' src={Discord} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#00A7FF]'>Discord</div>
            </a>
            <a className='flex flex-col items-center ml-16' href="" target='_blank'>
              <img className='insta w-8 h-8 text-red-400 transition duration-300 hover:scale-125' src={Instagram} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#F164FF]'>Instagram</div>
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default App