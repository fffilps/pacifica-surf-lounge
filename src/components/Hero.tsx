
import heroImage from '/heroImage.png'

const Hero = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-blue-300 py-4 gap-4'>
        <img className='bg' src={heroImage} width={350} height={350} />
        {/* <div>
          <h2 className='text-2xl font-semibold underline underline-offset-2'>Home of the Community and Waves w/ A Covered Patio</h2>
        </div> */}
    </div>
  )
}

export default Hero