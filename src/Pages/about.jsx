import React from 'react'

import CustomButton from '../components/CustomButton'

function about (){
  const aboutme ={
    name : "Sudharshana",
    empl_id : 1111,
    field : "EAD",
    Company : "Deloitte",
    position : "Intern"
  }
  return (
    <div>
      <table border = "1">
        <tr>
          <td>Name</td>
          <td>empl_id</td>
          <td>company</td>
          <td>position</td>

        </tr>
        <tr>
          <td>{aboutme.name}</td>
          <td>{aboutme.empl_id}</td>
          <td>{aboutme.Company}</td>
          <td>{aboutme.position}</td>
        </tr>
      </table> 
    </div>
  )
}

export default about