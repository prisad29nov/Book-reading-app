import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeFromFevorites } from "./slices/fevoriteSlice";
const Favorite = () => {
  const fevorite = useSelector((state) => state.fevoriteSlice.fevorite);
  const dispatch = useDispatch();
  const removeFevorites = (id)=>{
    dispatch(removeFromFevorites(id))
  }
  return (
    fevorite.length > 0 ?
    <div>
       <div className="d-flex flex-wrap justify-content-around">
        {fevorite.map((book) => {
          return(
          <div className="card" style={{width: '250px',marginTop:'30px'}}>
            <img style={{height:"200px",width: '100%'}} src={book?.volumeInfo?.imageLinks?.smallThumbnail} className="card-img-top" alt="book image" />
            <div className="card-body">
              <div style={{height: '150px'}}>
              <h5 className="card-title">{book.volumeInfo.title}</h5>
              <h4 className="card-title">{book.volumeInfo.authors}</h4>
              </div>
              <div style={{height: '100px'}}>
              <a href={book.volumeInfo.previewLink} target="_blank" className="btn btn-danger">
                Read book
              </a>
              <button style={{marginTop:'20px'}} onClick={()=>removeFevorites(book.id)} className="btn btn-primary">
                Remove from fevorites
              </button>
              </div>
            </div>
          </div>)
        })}
      </div>
    </div>: <div>
      <h1>You are not added any fevorite book here</h1>
    </div>
  )
}

export default Favorite
