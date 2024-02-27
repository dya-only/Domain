import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Github from './assets/svgs/github.svg'
import Discord from './assets/svgs/discord.svg'
import Instagram from './assets/svgs/instagram.svg'
import Notion from './assets/svgs/notion.svg'
import Monterey from './assets/imgs/monterey.jpg'
// import Sonoma from './assets/imgs/sonoma.jpg'
// import Bigsur from './assets/imgs/bigsur.jpg'
import Profile from './assets/imgs/logo.png'

function App() {

  return (
    <>
      <header className='w-screen h-screen flex flex-col justify-center items-center'>
        <img className='z-0 object-cover w-screen h-screen fixed brightness-75 blur-2xl' src={Monterey} alt="" />
        <div className='-z-10 w-screen h-screen bg-gray-700 fixed' />

        <div className='z-30 bg-white/80 backdrop-blur-2xl flex flex-col justify-center items-start pl-5 pr-8 pb-8 pt-5 lg:-ml-[200px] border-[0.4px] rounded-2xl shadow-xl'>
          <div className='flex justify-center items-center'>
            <div className='rounded-full w-4 h-4 mr-2 bg-red-400' />
            <div className='rounded-full w-4 h-4 mr-2 bg-yellow-400' />
            <div className='rounded-full w-4 h-4 bg-green-400' />
          </div>
          <div className='flex flex-col items-center justify-center mt-8'>
            <div className='z-30 flex justify-center items-center w-[250px] h-[250px] mb-6 rounded-full border-[16px] border-white bg-white shadow-xl'>
              <img className='z-10 w-[120px]' src={Profile} />
            </div>
            <div className='w-full flex justify-center items-center font-[Junegull] lg:text-4xl text-3xl text-blue-400'>GBSW STUDENT</div>
            <div className='w-full flex justify-center items-center font-[Junegull] lg:text-4xl text-3xl text-blue-500'>STUDENT DEVELOPER</div>
            <div className='w-full flex justify-center items-center font-[Junegull] lg:text-4xl text-3xl text-blue-600'>I DEVELOP WEB & APP</div>
          </div>

          {/* SM */}
          <div className='lg:hidden w-[100%] flex justify-center items-center lg:mb-0 mb-4 mt-4'>
            <a className='flex flex-col items-center mr-16 lg:mr-8' href="https://pf.dya.codes" target='_blank'>
              <FontAwesomeIcon className='w-8 h-8 text-white bg-red-400 p-2 rounded-xl transition duration-300 hover:scale-110' icon={faHeart} />
              <div className='font-[Inter] font-[400] text-sm text-red-400'>Portfolio</div>
            </a>

            <a className='flex flex-col items-center mr-16 lg-mr-8' href="https://notion.dya.codes" target='_blank'>
              <img className='invert w-12 h-12 bg-[#aaaaaa] p-2 rounded-xl transition duration-300 hover:scale-110' src={Notion} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#696969]'>Notion</div>
            </a>

            <a className='flex flex-col items-center' href="https://github.com/dya-only" target='_blank'>
              <img className='invert w-12 h-12 bg-gray-300 p-2 rounded-xl transition duration-300 hover:scale-110' src={Github} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#525252]'>Github</div>
            </a>
          </div>
          <div className='lg:hidden w-[100%] flex justify-center items-center'>
            <a className='flex flex-col items-center mr-16 lg:mr-8' href="https://discord.com/users/884954874943520788" target='_blank'>
              <img className='invert w-12 h-12 bg-[#AB9D1A] rounded-xl p-2 transition duration-300 hover:scale-110' src={Discord} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#5462e5]'>Discord</div>
            </a>

            <a className='flex flex-col items-center ml-1 lg:ml-0' href="https://instagram.com/dy4code" target='_blank'>
              <img className='invert w-12 h-12 bg-[#0e9b00] p-2 rounded-xl transition duration-300 hover:scale-110' src={Instagram} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#F164FF]'>Insta</div>
            </a>
          </div>
        </div>
        
        {/* XS, LG, MD */}
        <div className='z-20 hidden bg-white/80 backdrop-blur-2xl lg:flex flex-col justify-center items-center pl-8 pr-8 pb-8 pt-16 lg:-mt-10 lg:ml-56 border-[0.4px] rounded-2xl shadow-xl'>
          <div className='flex lg:flex-nowrap flex-wrap justify-start items-center'>
            <a className='flex flex-col items-center mr-8' href="http://pf.dya.codes" target='_blank'>
              <FontAwesomeIcon className='w-8 h-8 text-white bg-red-400 p-2 rounded-xl transition duration-300 hover:scale-110' icon={faHeart} />
              <div className='font-[Inter] font-[400] text-sm text-red-400'>Portfolio</div>
            </a>

            <a className='flex flex-col items-center mr-8' href="http://notion.dya.codes" target='_blank'>
              <img className='invert w-12 h-12 bg-[#aaaaaa] p-2 rounded-xl transition duration-300 hover:scale-110' src={Notion} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#696969]'>Notion</div>
            </a>

            <a className='flex flex-col items-center mr-8' href="https://github.com/dya-only" target='_blank'>
              <img className='invert w-12 h-12 bg-gray-300 p-2 rounded-xl transition duration-300 hover:scale-110' src={Github} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#525252]'>Github</div>
            </a>

            <a className='flex flex-col items-center mr-8' href="https://discord.com/users/884954874943520788" target='_blank'>
              <img className='invert w-12 h-12 bg-[#AB9D1A] rounded-xl p-2 transition duration-300 hover:scale-110' src={Discord} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#5462e5]'>Discord</div>
            </a>

            <a className='flex flex-col items-center ' href="https://instagram.com/dy4code" target='_blank'>
              <img className='invert w-12 h-12 bg-[#0e9b00] p-2 rounded-xl transition duration-300 hover:scale-110' src={Instagram} alt="" />
              <div className='font-[Inter] font-[400] text-sm text-[#f264ff]'>Insta</div>
            </a>
          </div>

        </div>
      </header>
    </>
  )
}

export default App
