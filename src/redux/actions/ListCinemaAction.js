import axios from 'axios';


export const getListCinemaDetail = (maHeThongRap) =>{
    return async (dispatch) =>{
        try{
            let result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP05`,
                method:'GET'
            });
            // console.log(result.data);
            dispatch({type:'GET_LIST_CINEMAS_DETAIL', listCinemasDetail: result.data})
        } catch(errors){
            console.log(errors);
        }
    }
}