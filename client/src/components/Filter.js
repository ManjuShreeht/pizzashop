import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';
import { FilterPizza } from '../actions/pizzaAction';
const Filter = () => {
   const [searchkey,setKey]=useState('')
   const [category,setCategory]=useState('all')

   const dispatch= useDispatch()
   const {theme}=useSelector(state=>state.DarkReducer)
  return (
    <div className='p-2  mt-4'>
        <Form>
            <Row>
                <Col >
            <Form.Control
        type="text"
         value={searchkey}

          style={{ 
          width:"300px",
          marginLeft:"250px",
          paddingLeft:"50px"}}
         onChange={(e)=>setKey(e.target.value)}
         placeholder='search pizza '
      />
            </Col>
            <Col>
            <Form.Select aria-label="Default select example" value={category} 
              style={{ 
              width:"150px",
              marginLeft:"50px",
              paddingLeft:"20px"}} 
              className='form-select-color'
            onChange={(e)=>setCategory(e.target.value)}>
              
      <option >all</option>
      <option >veg</option>
      <option >nonveg</option>
    </Form.Select>
                </Col>
                <Col>
            <Button  style={{ 
              width:"80px",
              marginLeft:"1px",
              paddingLeft:"20px"
            }} 
             className='btn btn-primary'
             onClick={()=>dispatch(FilterPizza(searchkey,category))}>Search</Button>
                </Col>
            </Row>
        </Form>

    </div>
  )
}

export default Filter