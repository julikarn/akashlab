import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios';

function Detail() {

  const { detailId } = useParams();
  console.log(typeof +detailId)

  const [data, setData] = useState([])

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setData(response.data);
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();

  }, [])

  console.log(data);

  // console.log(typeof data[0].id)
  const userData = data.filter((data) => data.id === +detailId)
  console.log("userdta", userData);

  return (
    <div>
      {
        userData && userData.map((datas, index) => {

          return (

            <div className="card container mt-5" key={index}>

              <div className="card-body">
                <h5 className="card-title text-center h2">Id :{datas.id} </h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">
                  {datas.email}
                </h6>
                <p className="card-text">{datas.body}</p>
              </div>
            </div>



          )
        })
      }

    </div>

  )


}

export default Detail