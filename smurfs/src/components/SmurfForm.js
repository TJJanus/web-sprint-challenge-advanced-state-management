import React, { useState, useEffect } from 'react';


import { getSmurfs, addSmurf } from '../actions';
import { connect } from 'react-redux';




const SmurfForm = (props) => {

    const [form, setForm] = useState({
        name: '',
        age: '',
        height: '',
    })

    const [ isClicked, setClick] = useState(false);

    const handleChanges = (e) => {
        const newFormData = {
            ...form,[e.target.name]: e.target.value
        }
        setForm(newFormData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSmurf(form)
        if(isClicked === false) {
            setClick(true);
          }
          else{
            setClick(false);
          }
        
    }

    useEffect(() => {
        props.getSmurfs();
        
      },[isClicked]);

    return (
        <div>
            <h2>Make a Smurf</h2>
        <form onSubmit={handleSubmit}>
            
            <input type='text' name='name' value={form.name} placeholder='Name' onChange={handleChanges} />
            <input type='text' name='age' value={form.age} placeholder='Age'onChange={handleChanges}  />
            <input type='text' name='height' value={form.height} placeholder='Height' onChange={handleChanges}  />
            <button type='submit' value={isClicked} onClick = {() => setClick(!isClicked)} >Add a Smurf</button>
        </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      smurf: state.smurf,
      smurfs: state.smurfs
    }
  }

  export default connect(mapStateToProps, { getSmurfs, addSmurf })(SmurfForm);
