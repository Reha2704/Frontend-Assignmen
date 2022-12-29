import React, { useEffect,useState } from 'react'
import { Card,Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Modaal from '../components/Modal/Modal';
import Base from '../components/Base/Base';
import './Form.css'
function Form(data) {
   
    var info = data?.data;
    info?.sort(function (a, b) {
        return a.sort - b.sort;
    });
   
  let [state, setState] = useState({})
  console.log('form',data.inputs)
  const handleSubmit=()=>{
      alert(data.inputs)
  }
 
  
  return (
    
      
      <Card>
      <h2 className="Maintitle">Form</h2>
        {info?.map((texttype)=>{
            return(
              <Card>
                <Base data={texttype} state={state}/>
              </Card>
            )
        })}
        <Modaal data={data} />
        
    </Card>
    
    
   
  )
}
const mapStateToProps = (state) => ({
	inputs: state.inputs
  })
  
export default connect(mapStateToProps)( Form)

//
{/* <Card className='card'>
         
      </Card> */}