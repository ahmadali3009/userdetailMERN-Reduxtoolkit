import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getuserdetail, userupdatedetail , adduser , userdeletedetail} from '../slice/userslice'
import Modalforupdate from './modalforupdate';
import "./userdetailstyle.css"
const Showuserdetail = () => {
  const { userdetails, loading, error } = useSelector((state) => state.userdetail);

  const dispatch = useDispatch()
  //   console.log(userdetail);
  useEffect(() => {
    dispatch(getuserdetail());
  }, [dispatch ]);
  const [selecteddata, setselecteddata] = useState(null);
  const [showmodal, setshowmodal] = useState(false)

  const updatehander = (user) => {

    setselecteddata(user);
    setshowmodal(true)
    console.log("modalview", showmodal)
  }
  const deletehandler = (phone)=>
    {
      dispatch(userdeletedetail(phone));

    }
  const handleSave = (updatedUser , phone) => {
    console.log("phone" , phone)
    console.log("full" , updatedUser)

    dispatch(userupdatedetail({phone , updatedUser}));
    setshowmodal(false);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-4">
    <h2 className="text-center mb-4">User Details</h2>
    <ol className="list-group">
      {userdetails.map((user) => (
        <li key={user.phone} className="list-group-item rounded shadow-sm mb-3 p-3">
          <div className="mb-2">
            <strong>User: </strong>
            <span>{user.Name}</span>
          </div>
          <div className="mb-2">
            <strong>Email: </strong>
            <span>{user.email}</span>
          </div>
          <div>
            <strong>Phone: </strong>
            <span>{user.phone}</span>
          </div>
          <div className="btn-group mt-3" role="group" aria-label="Basic example">
            <button className='btn btn-primary' onClick={() => updatehander(user)}>Update</button>
            <button className='btn btn-danger mx-2' onClick={() => deletehandler(user.phone)}>Delete</button>
          </div>
        </li>
      ))}
    </ol>

    {showmodal && selecteddata && (
      <Modalforupdate
        show={showmodal}
        handleClose={() => setshowmodal(false)}
        user={selecteddata}
        handleSave={handleSave}
      />
    )}
  </div>
  );
};

export default Showuserdetail;
