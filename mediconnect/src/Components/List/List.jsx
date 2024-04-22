import '../../App.css';
import { GPSicon, DropDownButton, Microphone } from '../../utils/Icons'
import axios from 'axios';
import { useEffect } from 'react';

function List(props){
    return(
        <div className='p-[1%]'>
            <h2 className='text-[32px] font-semibold'>{props.heading}</h2>

        </div>
    )
}
export default List;