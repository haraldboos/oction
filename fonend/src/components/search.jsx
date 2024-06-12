import { TextField,Button } from '@mui/material';
import { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import request from '../request/axios';
const Search =()=>{

const [sch,searchbox]=useState(null);
const [play, setPla] = useState(null);

const subb=async (event)=>{
      event.preventDefault();
      try{

        let pla=await request.player(sch);
        console.log(pla);
        setPla(pla)
      }catch(error){
        console.error(error)
      }
}
    return(
      <>
      <div className=' bg-green-700 '>
        <form onSubmit={subb} className='container flex mx-auto'>
        {/* <FormControl> */}
        {/* <TextField fullWidth label="fullWidth" className='w-full' id="fullWidth" /> */}
            <TextField fullWidth id="fullWidth" onChange={(e)=>{searchbox(e.target.value)}} label="Standard" variant="standard" />
            <Button variant="contained" sx={{ m: 1}} className='align' type="submit">click to search player.. <SearchIcon/></Button>
        {/* </FormControl> */}
        </form>
        <div className='justify-center	 mx-auto flex flex-row '>
        {play && <img src={`http://localhost:8000${play.picture}`} className='  w-lvh h-lvh  rounded-xl' data-aos="zoom-in-up" alt={`${play.num}`}/>}

        </div>
      </div>
      </>
    )
}
export default Search;