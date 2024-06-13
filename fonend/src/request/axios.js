import axios from 'axios';

const back = axios.create({
    baseURL:'http://192.168.8.162:8000/',
    timeout:1000,
    headers:{
        'Content-Type':'application/json'
    },
});

const gtplayer={
    player:async (playernum)=>{
        try{
            const player = await back.get(`player/?pnum=${playernum}`);
            console.log(player.data)
            return player.data;
        }catch(e){
            console.error(e);
        }
    },
    sold_player:async ()=>{
        try{
            const player = await back.get('dashboard/');
            console.log(player.data)
            return player.data;
        }catch(e){
            console.error(e);
        }
    }


}

export default gtplayer;