import React,{useState,useEffect} from "react";
import axios from "axios";

const Health = () => {
const    [health,setHealth]=useState([]);
useEffect(()=>{
    const getUser=async()=> {
        const URL=`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8054cbf260c34c07b069dc7f331ec4bd`
      try {
        const response = await axios.get(URL);
        console.log("this is response",response.data.articles);
        setHealth(response.data.articles)
        
      } catch (error) {
        console.error(error);
      }
    }
    getUser();

},[])

  return (
    <div>
    
    <table className="table" width={{width:"100%"}}>
  <thead >
    <tr>
      <th scope="col">#</th>
      <th scope="col">News Title</th>
      <th scope="col">News Description</th>
      <th scope="col">News Image </th>
    </tr>
  </thead>

  {health.map((value,index)=>{
return(


  <tbody  key={index}>
    <tr>
    <th scope="row"  style={{objectFit:"contain",backgroundColor:"blue",color:"white"}}>{index+1}</th>
    <td  style={{objectFit:"contain",backgroundColor:"blue" ,color:"white"}}>{value.title}</td>
    <td style={{width:"48%"}}>{value.description}.... :- <a href={value.url} rel="noreferrer" target="_blank">more about news</a></td>
    <td className='rowClass' ><img className='newsclass' src={value.urlToImage} alt="" style={{width:"60%"}}/></td>
    </tr>
    
  </tbody>
  )
  })}
</table>
    
    
    </div>
  )
}

export default Health;