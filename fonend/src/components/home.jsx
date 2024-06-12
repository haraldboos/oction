import Logo from '../assets/loog.jpeg'
// import Welcome from '../assets/welcome-to-the-oction-2024.png';
import Octaion from '../assets/auction.gif'
import logo from '../assets/loog.jpeg'
import Imas from './image'
import { useEffect} from 'react'
const logs=[logo,logo,logo,logo,logo,logo,logo,logo];
const Desktop = () => {
  // const [lo,setlo] = useState(logs)
  // useEffect(()=>{

  // })
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.reload(); // Reload the page after 11 seconds
    }, 11000); // 11 seconds in milliseconds

    return () => clearTimeout(timeoutId); // Cleanup the timeout when the component unmounts
  }, []);
  return (<>
    <div className="bg-white  justify-center flex flex-col   ">
    
        <div className='flex container items-center font-serif font-bold  flex-row '>
          <img src={Logo} className='h-56 w-56 hover:shadow-2xl  rounded-xl'/>

          <h1 className='text-7xl '>Kilinochchi Champion League</h1>
        </div>
    <div className=' items-center flex flex-row w-full border justify-center'>
        
          <h1 className=' font-bold justify-self-center font-serif  hover:font-serif  text-center text-6xl align-middle'>Wellcome To oction-2024</h1>
        
          <img src={Octaion} className=" h-52 w-52 hover:border justify-self-end hover:shadow-2xl rounded-full" />
      
   </div>
    <div className="  items-center grid grid-cols-8 gap-1 p-0">
        {logs.map((src, index) => (
          <div key={index}>
          <Imas key={index} src={src}  delay={index * 100} clas='rounded-full h-44'/>
        </div>
        ))}
      </div>
    </div>

    </>
  );
};


export default Desktop;