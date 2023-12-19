import surfLoungeLogo from '/surfLoungeLogo.png'

const Navbar = () => {

    const tabs = [ 'Drinks','Hours', 'About Us']

  return (
    <div className='flex justify-between px-4 py-2 bg-blue-700'>
        <div className='font-bold text-xl'>
            <img src={surfLoungeLogo} alt="Surf Lounge Logo" height={125} width={125}  />
        </div>
        <div id='navTab' className='flex px-4'>
            <ol className="flex gap-4 sm:text-2xl text-md justify-center items-center text-white">
                {tabs.map((tab) => (
                    <li className='hover:text-blue-300 hover:underline cursor-pointer' key={`${tab} Tab`}><a href={`#${tab}`}>{tab}</a></li>
                ))}
            </ol>
        </div>

    </div>
  )
}

export default Navbar