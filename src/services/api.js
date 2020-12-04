import axios from 'axios';
import mapResponse from '../utils/map-response';

export default
{
    ObtenerNombre: ()=>
    {
		return mapResponse(axios.get("https://randomuser.me/api/"));
    },
}
        