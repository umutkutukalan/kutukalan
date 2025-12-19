import { mor } from "../../utils"

const AboutBox = () => {
  return (
    <section className="px-5 h-100">
        <ul className='h-full grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5'>
            <li className='w-full h-full border border-gray-400 rounded-md relative overflow-hidden'>
                <div className="absolute inset-0 bg-black/70"></div>
                <img src={mor} alt="" className="w-full h-full"/>
            </li>
            <li className='w-full h-full border border-gray-400 rounded-md relative overflow-hidden'>
                <div className="absolute inset-0 bg-black/70"></div>
                <img src={mor} alt="" className="w-full h-full"/>
            </li>
            <li className='w-full h-full border border-gray-400 rounded-md relative overflow-hidden'>
                <div className="absolute inset-0 bg-black/70"></div>
                <img src={mor} alt="" className="w-full h-full"/>
            </li>
        </ul>
    </section>
  )
}

export default AboutBox