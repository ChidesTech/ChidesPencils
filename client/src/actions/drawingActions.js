import axios from "axios";
import { DRAWING_DELETE_FAILURE, DRAWING_DELETE_REQUEST, DRAWING_DELETE_SUCCESS, DRAWING_LIST_FAILURE, DRAWING_LIST_REQUEST, DRAWING_LIST_SUCCESS, DRAWING_SAVE_FAILURE, DRAWING_SAVE_REQUEST, DRAWING_SAVE_SUCCESS } from "../constants/drawingConstants";

export const listDrawings = ()=> async(dispatch) =>{
    try {
        dispatch({type: DRAWING_LIST_REQUEST});
   const {data} = await axios.get("/api/drawings");
   dispatch({type: DRAWING_LIST_SUCCESS, payload: data});
    } catch (error) {
   dispatch({type: DRAWING_LIST_FAILURE,  payload: error.response && error.response.data.msg
    ? error.response.data.msg
    : error.msg});
        
    }
   

}

export const saveDrawing = (drawing) => async(dispatch, getState)=>{
   try {
       dispatch({type: DRAWING_SAVE_REQUEST, payload:drawing});
       const {userLogin :{userInfo}} = getState();

       if(!drawing._id){
        const {data} = await axios.post("/api/drawings", drawing, {
            headers: {Authorization : "Bearer " + userInfo.token,
            }
            
        });
       dispatch({type: DRAWING_SAVE_SUCCESS, payload: data})

       }else{
        const {data} = await axios.put("/api/drawings/"+ drawing._id, drawing, {
            headers: {Authorization : "Bearer " + userInfo.token}
        });
       dispatch({type: DRAWING_SAVE_SUCCESS, payload: data})

       }
       
   } catch (error) {
    dispatch({type: DRAWING_SAVE_FAILURE, payload: error.response && error.response.data.msg
        ? error.response.data.msg
        : error.msg})
       
   }
}

export const deleteDrawing = (drawingId) => async (dispatch, getState) => {
    try {
       const {userLogin :{userInfo}} = getState();

      dispatch({type: DRAWING_DELETE_REQUEST , payload: drawingId });
      const { data } = await axios.delete('/api/drawings/' + drawingId, {
          headers:{
    Authorization: "Bearer " + userInfo.token
      }});
      dispatch({ type: DRAWING_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: DRAWING_DELETE_FAILURE, payload: error.response && error.response.data.msg
        ? error.response.data.msg
        : error.msg });
    }
  };
  
