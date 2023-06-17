import React, { useEffect } from 'react'
import { getAllUser } from '../../actions/adminAction'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading'
import Error from '../Error'
import { deleteUser } from '../../actions/UserAction'
import { Button } from 'react-bootstrap'

const GetAllUser = () => {
const user=useSelector(state=>state.getUserReducer)
const {AllUser,loading,error}=user
console.log(AllUser)
    const dispatch= useDispatch()
    const {theme}=useSelector(state=>state.DarkReducer)

    useEffect(()=>{
        dispatch(getAllUser())
    },[])
  return (
    <div className="container-fluid" style={{backgroundColor:theme=="light"?"white":"black",height:"max-content"}}>
      <h2 style={{ fontSize: "35px",color:theme=="light"?"black":"white" }} className="text-center mb-5">
        User List
      </h2>
      <div className="row justify-content-left" style={{ width: "95%",marginLeft:"20px" }}>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          <table className={`table table-striped border hover ${theme=="light"? "table-dark":"table-light" } `}>
            <thead>
              <tr>
                <th scope="col">S/n</th>
                <th scope="col">User Name</th>
                <th scope="col">User Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {AllUser &&
                AllUser?.map((user,i) => {
                return  <tr>
                  
                    <td>{i+1}</td>
                    <td>{user.username}</td>
                    <td>
                        {user.email}
                    </td>
                    <td>{user.mobile}</td>
                    <td>{(user.createdAt).substring(0,10)}</td>
                    <td><Button className="btn-danger" onClick={()=>{
                      dispatch(deleteUser(user._id))
                    }}>Delete</Button></td>
                    
                  </tr>
})}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default GetAllUser