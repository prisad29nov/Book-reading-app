import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "./thunks";
import { addToFevorites } from "./slices/fevoriteSlice";
import {addToReading} from './slices/readingSlice'

const Home = () => {
  const books = useSelector((state) => state.bookSlice.books);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [btnText, setBtnText] = useState("Add to favourite");
  const [disabled, setDisebled] = useState(false)
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
useEffect(()=>{
  dispatch(fetchBooks('nature'));
},[])
  const inSearch = () => {
    dispatch(fetchBooks(search));
    
  };

  const addFevorites=(book)=>{
    dispatch(addToFevorites(book))
  }

  const addReading=(book)=>{
    dispatch(addToReading(book))
  }
  return (
    <div>
      <h1>Search books you want to read</h1>
      <div className="col-6 offset-3">
        <input
          onChange={handleSearch}
          type="text"
          className="form-control"
          id="search"
        ></input>{" "}
        <br />
        <button onClick={inSearch} type="submit" className="btn btn-primary">
          Search
        </button>
      </div> <br/>
      <div className="d-flex flex-wrap justify-content-around">
        {books.map((book) => {
          return(
          <div className="card" style={{width: '250px',marginTop:'30px'}}>
            <img style={{height:"200px",width: '100%'}} src={book?.volumeInfo?.imageLinks?.smallThumbnail} className="card-img-top" alt="book image" />
            <div className="card-body">
              <div style={{height: '150px'}}>
              <h5 className="card-title">{book.volumeInfo.title}</h5>
              <h4 className="card-title">{book.volumeInfo.authors}</h4>
              </div>
              <div style={{height: '100px'}}>
              <a href={book.volumeInfo.previewLink} onClick={()=>addReading(book)} target="_blank" className="btn btn-danger">
                Read book
              </a>
              <button style={{marginTop:'20px'}} onClick={()=>addFevorites(book)} className="btn btn-primary">
               {btnText}
              </button>
              </div>
            </div>
          </div>)
        })}
      </div>
    </div>
  );
};

export default Home;
