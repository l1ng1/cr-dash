import axios , {type AxiosInstance} from "axios";
const URL = 'https://api.color.pizza/v1'

const API: AxiosInstance = axios.create({
    baseURL:URL,
    timeout: 10000,
    headers: {
        Accept: 'application/json'
    }
})


export default {
    async getNameOfColor(hex:string){
        const data = await API.get('',{
            params:{
                list:[],
                values:hex,
                noduplicates:false,
                goodnamesonly:true,
            }
        }
        )
        const returnData = await data.data.paletteTitle;
        console.log(data)
        return returnData;
    }
}