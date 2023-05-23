import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Github from './assets/svgs/github.svg'
import Discord from './assets/svgs/discord.svg'
import Instagram from './assets/svgs/instagram.svg'
// import Filled from './assets/imgs/filled.png'

function App() {

  return (
    <>
      <header className='w-screen h-screen flex flex-col justify-center items-center'>
        <div className='w-screen flex justify-around items-center'>
          <div className='flex justify-center items-center mb-2'>
            <a className='flex flex-col items-center mr-16' href="https://me.dyacode.kro.kr" target='_blank'>
              <FontAwesomeIcon className='w-8 h-8 text-white bg-red-400 p-2 rounded-xl transition duration-300 hover:scale-110' icon={faHeart} />
              <div className='font-[Inter] font-[400] text-sm text-red-400'>Portfolio</div>
            </a>
            <a className='flex flex-col items-center mr-16' href="https://github.com/dya-only" target='_blank'>
              <img className='invert w-12 h-12 bg-[#af3787] p-2 rounded-xl transition duration-300 hover:scale-110' src={Github} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#50C878]'>Github</div>
            </a>
          </div>

          <div />
        </div>

        {/* <img className='w-full h-[400px] object-cover' src={Filled} alt="" /> */}
        <div className="flex flex-col justify-center mt-8 mb-8">
          <div className='w-full flex justify-center items-center font-[Junegull] text-7xl text-blue-400'>GBSW STUDENT</div>
          <div className='w-full flex justify-center items-center font-[Junegull] text-7xl text-blue-500'>FULLSTACK DEVELOPER</div>
          <div className='w-full flex justify-center items-center font-[Junegull] text-7xl text-blue-600'>Learning DevOps</div>
        </div>

        <div className='w-screen flex justify-around items-center'>
          <div />

          <div className='flex justify-center items-center mt-2'>
            <a className='flex flex-col items-center ml-16' href="https://discord.com/users/884954874943520788" target='_blank'>
              <img className='invert w-12 h-12 bg-[#ff5800] rounded-xl p-2 transition duration-300 hover:scale-110' src={Discord} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#00A7FF]'>Discord</div>
            </a>
            <a className='flex flex-col items-center ml-16' href="https://instagram.com/dy4code" target='_blank'>
              <img className='invert w-12 h-12 bg-[#0e9b00] p-2 rounded-xl transition duration-300 hover:scale-110' src={Instagram} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#F164FF]'>Instagram</div>
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default App