import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Tooltop from '../Tooltop/Tooltip'
function Select(props) {
  return (
    <div>
        <Row>
            <Col>
                 <Tooltop  data={props.data} />
            </Col>
            <Col>
            <select className="form-select" aria-label="Default select example"
                name={props.label}
                onChange={props.handleChange} 
            >
                {props.data.validate.options.map((option)=>{
                    return(
                        <option selected={option.value==props.data.validate.defaultValue}  value={option.value}>{option.label}</option>
                    )
                })}
            </select>
            </Col>
        </Row>
    </div>
  )
}

export default Select