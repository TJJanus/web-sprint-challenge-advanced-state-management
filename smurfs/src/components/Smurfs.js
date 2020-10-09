import React, { useEffect } from 'react'
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';


const Smurfs = (props) => {

    useEffect(() => {
        props.getSmurfs();
      }, []);
 

    return (
        <div>
            <h1>Smurf List</h1>
            {props.isLoading ? <h4>Smurfs Loading...</h4> : null}
            {props.error ? <p>Smurfs are broken.</p> : null}
            {/* <button onClick={getSmurfs}>Fetch Smurfs</button> */}
            <div>
                {props.smurfs.map((smurf) => (
                    <>
                    <div className='smurfCard'>
                    <h1 key={smurf.id}></h1>
                    <h4>Name: {smurf.name}</h4>
                    <h4>Age: {smurf.age}</h4>
                    <h4>Height: {smurf.height}</h4>
                    </div>
                    </>
                ))}
            </div>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
      
      smurfs: state.smurfs,
      error: state.error,
      isLoading: state.isLoading
    }
  };

export default connect(mapStateToProps, {getSmurfs})(Smurfs)


