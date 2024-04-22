import '../../App.css';
import { GPSicon, DropDownButton, Microphone } from '../../utils/Icons'
import axios from 'axios';
import { useEffect } from 'react';


function Searchbox(){
    return(
        <div className='p-[1%] w-full'>
            <div className='h-[12vw] border-[#D9D9D9] border-2 rounded-lg flex justify-between items-center p-[2%]'>
              <textarea name="searchbox" placeholder='Search for Hospitals, Doctors...' id="" cols="45" rows="1">  
              </textarea>
              <Microphone height="19" width="14" />
            </div>
            
        </div>
        
    )
}

export default Searchbox;