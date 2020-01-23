import React, { useState } from "react";


function Form (props) {

const [team, setTeam] = useState({
name: "", email: "", role: "",
});

const handleChanges = e => {
setTeam({
    ...team, [e.target.name]: e.target.value});
console.log(team);
};

const submitForm = e => {
e.preventDefault();
console.log(team)
props.team(team)
setTeam({name:"", email: "", role:""});
}

return (
<div>
      <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="name"
        onChange={handleChanges}
        name="name"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder="Email please?"
        onChange={handleChanges}
        name="email"
      />

      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        placeholder="whats your role?"
        onChange={handleChanges}
        name="role"
      />
      <button type="submit">Become Member</button>
      </form>

</div>
);

}

export default Form;


