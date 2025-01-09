import { nunito, oswald } from '@/lib/fonts'

export default function Hero() {
    return (
        <div className="hero bg-zinc-900 border border-[#9b9b9b] rounded-box image-full w-full md:w-80 h-screen md:h-[32rem] bg-[url('/aqf-logo.png')]">
            <div className="hero-overlay bg-opacity-95 rounded-xl"></div>
            <div className="hero-content text-neutral-content flex flex-col text-center">
                <div className='flex items-center space-x-4'>
                    <h2 className={`uppercase font-normal ${oswald.className} text-5xl`}>amigos</h2>
                    <div className='flex flex-col text-xl mt-[5px]'>
                        <div className='h-[2px] bg-white'></div>
                        <span className={`${nunito.className} font-black text-xl uppercase`}>que</span>
                        <div className='h-[2px] bg-white'></div>
                    </div>
                </div>
                <h2 className={`${oswald.className} uppercase font-black text-7xl absolute top-[22rem] md:top-[18.5rem] left-32 bg-gradient-to-r from-[#eeaeca] to-[#94bbe9] bg-clip-text text-transparent`}>fazem</h2>

                <p className={`absolute ${oswald.className} top-[28rem] text-lg`}>Mutirão de Natal 2024: À mesa com cristo!</p>
            </div>
        </div>
    )
}