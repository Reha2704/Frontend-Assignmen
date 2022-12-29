import React from 'react'
import './style.css'
import { connect } from 'react-redux';

import Tooltop from '../Tooltop/Tooltip'

function TextInput(props) {
  return (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
           <Tooltop  data={props} />
        </div>
        <input type="text" className="form-control" aria-describedby="inputGroup-sizing-default"
            required={props.required?"required":false}
            disabled={props.immutable}
            pattern = {props.pattern}
            placeholder={props.placeholder}
            name={props.jsonKey}
            onChange={props.handleChange} 
            defaultValue=""
        />
    </div>

  )
}

const mapStateToProps = (state) => ({
	inputs: state.inputs
  })
  
export default connect(mapStateToProps)( TextInput)