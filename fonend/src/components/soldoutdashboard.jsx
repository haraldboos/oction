import request from '../request/axios';
import { useEffect,useState } from 'react';
// import { Paper } from '@mui/material'

const Dashboard =()=>{
    const [sepdash,setsepdash]=useState({});
    const [unsep,setunsepdata]=useState([]);
    // const [ppl,setppl]=useState([]);
    const priceformat= amount=>{
        return parseFloat(amount).toLocaleString('ta-LK',{style:'currency',currency:'LKR'});
    }
    useEffect(()=>{
        const dashwork = async()=>{
        try{
            let dash= await request.sold_player()
            console.log(dash)
            setunsepdata(dash)
        }catch(error){
            console.error(error)
        }
        }
        dashwork()
        const intervl=setInterval(dashwork,5000000);
        return()=>clearInterval(intervl);

    },[])
    const balance =(spend,tameamount)=>{
        console.log(spend,tameamount);
        return parseFloat(tameamount)-spend;
    }
    const teamtotal=crickerters=>{
        let total=0;
        crickerters.forEach(player=>{
            console.log(player)
            total += parseFloat(player.amount)
        })
        console.log(total)
        return total;
    }
     
    useEffect(()=>{
    const temporganizdata={};
        unsep.forEach(pla => {
            const{ team,players,amount } =pla;
            const {name} =team;
            if(!temporganizdata[name]){
                temporganizdata[name]={team,players:[], amount};
            }
            console.log("Players:", Array.isArray(players));
            temporganizdata[name].players.push({...players,amount:amount});
        })

        setsepdash(temporganizdata);
    },[unsep]);

    
    console.log(sepdash)
    return(
        <>
        <div  className='grid gap-2 m-2  grid-cols-4 '>

        {sepdash&&Object.values(sepdash).map((i,index)=>(
        
            <div key={index} className='p-3  justify-items-center box-content rounded bg-blue-200'> <div className='flex  px-2 object-cover justify-center my-3 items-center '><img src={`http://localhost:8000${i.team.logo}`} className='w-20 rounded-full'/><h1 className=' text-xl font-extrabold mx-3' key={index}>{i.team.name}</h1>
            </div>
            <div className='justify-center'>
            <table className='justify-center table-auto w-full'>
                <thead>
                    <tr className='text-center text-md'>
                        <th className='border border-black'>Player</th>
                        <th className='border border-black'>Name</th>
                        <th className='border border-black'>Amount</th>
                    </tr>

                </thead>
                <tbody>

                {i.players.map((xx,inx)=>(<tr className='text-center font-bold ' key={inx}><td className=''>{xx.num}</td><td>{xx.name}</td><td className='text-red-700 '>{priceformat(xx.amount)}</td></tr>))}
                <tr>
                    <th colSpan='2' className='text-red-800'>Spent cost</th>
                    <th className='text-red-800'>-{priceformat(teamtotal(i.players))}</th>
                </tr>
                <tr>
                    <th colSpan='2' className='text-green-800'>Team Balance</th>
                    <th className='text-green-800'>{priceformat(balance(teamtotal(i.players),i.team.amount))}</th>
                </tr>
                </tbody>
                {/* <div>{balance(teamtotal(i.players),i.team.amount)}</div> */}
            </table>
        </div>
        </div>
        ))}
        </div>

        </>
    )
}


export default Dashboard;