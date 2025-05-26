
import './Header.css'

const Header = () => {
  return (
    <div className='header  h-[66vw]  m-20  mt-5 bg-contain relative md:p-6 lg:p-8  max-sm:w-[80%] max-sm:ml-10 max-sm:h-[50%]     '
    >
        <div className=' animate-[wiggle_1s_ease-in] absolute flex flex-col items-start gap-[1.5vw] max-w-200 bottom-50 left-[5vw] top-10 lg:max-w-[45%] md:max-w-[65%]         '>
            <h2 className='h1 text-6xl font-bold max-md:text-4xl max-sm:text-2xl max-sm:w-[80vw]  '>Order Your <br /> Favourite Food Here</h2>
            <h6 className=' max-sm:hidden text-[1.2vw]   lg:flex xl:flex 2xl:flex md:flex lg:text-[18px] max-sm:text-[1.5vw] text-amber-50 '>Our food delivery app brings your favorite meals from top restaurants right to your doorstep—fresh, fast, and hassle-free. 
                With an easy-to-use interface, real-time order tracking, and secure payment options, you can enjoy delicious food whenever you want. 
                Whether you’re craving pizza, burgers, or something healthy, we’ve got it all covered. Just browse, tap, and relax while we take care
                 of the rest!</h6>
                 <a href="#ExploreMenu"><button className='button max-md:pt-[2vw] max-md:pb-[2vw] max-md:pl-[4vw] max-md:pr-[4vw]    '>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header