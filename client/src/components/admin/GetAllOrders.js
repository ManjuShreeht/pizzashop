import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeliverOrder, getAllOrder } from '../../actions/adminAction'
import Loading from '../Loading'
import { Button } from 'react-bootstrap'

const GetAllOrders = () => {
    const AllOrder=useSelector(state=>state.getAllOrdersReducer)
    const { AllOrders,loading,error}=AllOrder
    const {theme}=useSelector(state=>state.DarkReducer)

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllOrder())
    },[dispatch])
  return (
        <div style={{backgroundColor:theme=="light"?"white":"black",height:"100vh"}}>
            <h2 style={{ fontSize: "35px",color:theme=="light"?"black":"white",textAlign:"center" }}>Order List</h2>
            {loading && <Loading />}
            <table className={`table table-striped border hover ${theme=="light"?"table-dark":"table-light"}`}>
            <thead>
              <tr>
                <th scope="col">S/n</th>
                <th scope="col">User Id</th>
                <th scope="col">Email</th>
                
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Transaction ID</th>
                <th scope="col">Status</th>
                

              </tr>
            </thead>
            <tbody>
              {AllOrders &&
                AllOrders.map((order,i) => (
                  <tr key={order._id}>
                    <td>{i+1}</td>
                    <td>{order. userid}</td>
                    <td>{order.email}</td>
                     <td>Rs {order.orderAmount}</td>
                    <td>{(order.createdAt).substring(0,10)}</td>
                    <td>{order.transectionId}</td>
                    <td>{order.isDeliverd?(<h6 className='text-success'>Deliverd</h6>):(
                        <>
                        <Button className='btn-warning'
                        onClick={()=>{dispatch(DeliverOrder(order._id))}}>Deliver</Button>
                        </>
                    )}
                    </td>
                   
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

       );
}

export default GetAllOrders