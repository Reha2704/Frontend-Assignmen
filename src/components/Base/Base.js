import React,{useState} from 'react'
import { connect } from 'react-redux';
import TextInput from '../textinput/TextInput'
import Select from '../Select/Select'
import Group from '../Group/Group';
import Switch from '../Switch/Switch';
import Radio from '../Radio/Radio';
import Ignore from '../Ignore/Ignore';
function Base(data1) {
      let items=data1.inputs
  let handleChange = (e) => {
      let names = e.target.name
      let value = e.target.value
      let state={}
      items[names] = value
     data1.dispatch({type:"add",value: items})
  };
  return (
    <div style={{paddingTop:"10px"}}>
        {(data1?.data?.uiType=="Select")?
            <Select handleChange={handleChange} dummyData={data1.dummyData}  data={data1?.data} label={data1?.data?.label} />
        :((data1?.data?.uiType=="Input")?
            <TextInput handleChange={handleChange} label={data1?.data?.label} description={data1?.data?.description} required={data1?.data?.validate.required} immutable={data1?.data?.validate.immutable} pattern={data1?.data?.validate.immutable} jsonKey={data1?.data?.jsonKey} placeholder={data1?.data?.placeholder}/>
        :((data1?.data?.uiType=="Switch")?
              <Switch handleChange={handleChange}  data={data1?.data}/>
        :((data1?.data?.uiType=="Radio")?
              <Radio  handleChange={handleChange}  data={data1?.data}/>
        :((data1?.data?.uiType=="Group")?
              <Group data={data1?.data}/>
        :((data1?.data?.uiType=="Ignore")?
              <Radio data={data1?.data}/>
        :"Base")))))
        }
    </div>
  )
}

const mapStateToProps = (state) => ({
	inputs: state.inputs
  })
  
export default connect(mapStateToProps)( Base)