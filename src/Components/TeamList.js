import React, { useState } from "react";
import Form from './Forms.js';


function TeamMember (){

const [members, setMembers] = useState([
  {
    id: 1,
    name: "Faisal Aziz",
    email: "faisal@gmail.com",
    role: "Student @ Lambda"
  }
]);

const addnewMember = member => {
  const newPerson ={
    id: Date.now(),
    name: member.name,
    email: member.email,
    role: member.role,
};
setMembers([...members,newPerson]);

};

return (
    <div>
        {members.map( member => 
        <div>
        <h3>Name: {member.name} </h3> 
        <h3>Email: {member.email} </h3>
        <h3>Role: {member.role}</h3>
        </div>
        )}
    
        <Form member={addnewMember}/>
    </div>
    )
    

    };
    
export default TeamMember;
    


