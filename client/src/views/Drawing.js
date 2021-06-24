import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../../src/index.css"
import { listDrawings, saveDrawing, deleteDrawing } from '../actions/drawingActions';
import Header from '../components/Header';
import Popup from '../components/Popup';

 const Drawing = (props) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  
  const drawingList = useSelector(state=> state.drawingList);
  const { drawings} = drawingList;
  const drawingSave = useSelector(state => state.drawingSave);
  const { success: successSave, error: errorSave} = drawingSave

  const drawingDelete = useSelector(state => state.drawingDelete);
  const { success: successDelete} = drawingDelete;

  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();
//=========================================================================================
    
//=============================================================================================



useEffect(()=>{
if(successSave){
  setModalVisible(false)
}

  dispatch(listDrawings())
return ()=>{

    }
},[successSave,successDelete, dispatch])

const openModal=(drawing)=>{
  setModalVisible(true)
     setId(drawing._id);
     setName(drawing.name);
     setImage(drawing.image);
}

// useEffect(()=>{
//   if(image){
//     dispatch(saveDrawing({_id:id, name, image}));
//     props.history.push("/gallery")
//   };
    
// },[dispatch, id, image, name,props.history])

const submitHandler=(event)=>{
    event.preventDefault();
   if(image){
    dispatch(saveDrawing({_id:id, name, image}));
   }
  }

const deleteHandler=(drawing)=>{
    dispatch(deleteDrawing(drawing._id))
}


const handleFileInputChange = (e) => {
  //==================================================
  const file = e.target.files[0];
   previewFile(file)
  
  

  //====================================================
  // const bodyFormData = new FormData();
  // bodyFormData.append('image', file);
  // setUploading(true);
  // axios
  //   .post('/api/uploads', bodyFormData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   })
  //   .then((response) => {
  //     setImage(response.data);
  //     setUploading(false);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     setUploading(false);
  //   });
};
//==========================================
const uploadImage= async(base64Encodedimage)=>{
  //  console.log(base64Encodedimage);
  setUploading(true)
   axios
     .post('/api/uploads/cloud', JSON.stringify({data : base64Encodedimage} ), {
       headers: {
         'Content-Type': 'application/json',
       },
     })
      .then((response) => {
       setImage(response.data);
      setUploading(false);
     })
     .catch((err) => {
       console.log(err);
      setUploading(false);
     });
  //  try {
  //       await fetch("/api/upload", {
  //         method: "POST",
  //         body: JSON.stringify({data : base64Encodedimage} ),
  //         headers: {"Content-Type" : "application/json"}
  //       })
  //  } catch (error) {
  //     console.log(error)
  //  }
}

const previewFile= (file) =>{
   const reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onloadend =()=>{
       
      uploadImage(reader.result);
       
        
   }
   
}
//==========================================
  return (




   <div className="grid-container">
    <Header/>

    <div className="content ">
  {successSave && <Popup variant="info">{`Drawing Successfully ${id?"Updated":"Created"}`}</Popup> }

<div className="drawing-header">
  <button onClick={()=>openModal({})} className="btns upload" >Upload A Drawing </button>
</div>

{modalVisible?


<div>
<form className="account-form  form"
     onSubmit={submitHandler}
     >
       {uploading}
      
    <div>
          <h1>{id?"Update Drawing":"Upload Drawing"}</h1>
        </div>
        <div>
    {/* {loadingSave && <Popup variant="info">Loading..</Popup>} */}
    {errorSave && <Popup variant="danger">{errorSave}</Popup>}
       
        </div>
  <div id="imageRequired"></div>
       {uploading &&  <div >Uploading....</div> }
        <div>
        
            <input type="text" value={name || ""} name="name" placeholder="Name"
             onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
        <input type="text" disabled  value={image || ""} name="image" placeholder="Image"  
             onChange={(event) => setImage(event.target.value)} 
            ></input> 
        <input type="file"
        onChange={handleFileInputChange}/>

        </div>
        <div> 
        <label/>
        <button className=" btns"  type="submit">{id?"Update":"Save"}</button>
        </div>
        <div> 
        <label/>
        <button className=" btns" onClick={()=>setModalVisible(false)} >Back</button>
        </div>
        
    </form>

</div>
  :
  <ul className="uploaded-list">
 {drawings.map(drawing=><li  key={drawing._id} className="uploaded">
   <div  className="flex-start">
            
            <img src={drawing.image}  alt="I"/>
            <h3 style={{color:"black"}}>{drawing.name}</h3>
            </div>
            <div >
<button onClick={()=>openModal(drawing)}  className="btns edit-btns" type="submit">Edit</button>
<button type="submit" onClick={()=>deleteHandler(drawing)} className="btns ">Delete</button>
</div>
</li>
 )}
          
 </ul>

}


</div> 

</div>
 );
}


export default Drawing;