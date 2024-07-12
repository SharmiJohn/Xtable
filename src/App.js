import { useState } from "react";

function App() {
  const [datas, setdatas] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);
  const handleDate=()=>{
    const sorteddate=[...datas].sort((a,b)=>{
      if(new Date(a.date).getTime()===new Date(b.date).getTime()){
          return b.views-a.views
      }
     return new Date(b.date).getTime()-new Date(a.date).getTime()
    })
    setdatas(sorteddate)

  }
  const handleViews=()=>{
 const sorttedView=[...datas].sort((a,b)=>{
  if(a.views===b.views){
   
    return new Date(b.date).getTime()-new Date(a.date).getTime()
     
  }
  
      return b.views-a.views;
    
  }
  
 )
 setdatas(sorttedView)

  }
  return (
    <div>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={()=>handleDate()}>Sort by Date</button>
        <button onClick={()=>handleViews()}>Sort by Views</button>
      </div>
      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {datas.map((data, index) => (
          <tr key={index}>
            <td>{data.date}</td>
            <td>{data.views}</td>
            <td>{data.article}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
