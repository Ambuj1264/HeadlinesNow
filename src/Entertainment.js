import React,{useState,useEffect} from "react";
import axios from "axios";

const Entertainment = () => {
const    [entertain,setEntertain]=useState([]);
useEffect(()=>{
    const getUser=async()=> {
        const URL=`
        https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8054cbf260c34c07b069dc7f331ec4bd`
      try {
        const response = await axios.get(URL);
        console.log("this is response",response.data.articles);
        setEntertain(response.data.articles)
        
      } catch (error) {
        console.error(error);
      }
    }
    getUser();

},[])

  return (
    <div>
    
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">News Title</th>
      <th scope="col">News Description</th>
      <th scope="col">News Image </th>
    </tr>
  </thead>

  {entertain.map((value,index)=>{
return(


  <tbody  key={index}>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{value.title}</td>
      <td>{value.description}.... :- <a href={value.url} rel="noreferrer" target="_blank">more about news</a></td>
      <td className='rowClass' style={{objectFit:"contain",backgroundColor:"blue"}}><img className='newsclass' src={value.urlToImage} alt="" /></td>
    </tr>
    
  </tbody>
  )
  })}
</table>
    
    
    </div>
  )
}

export default Entertainment