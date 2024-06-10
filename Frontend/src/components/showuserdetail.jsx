import React , {useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {  getuserdetail } from '../slice/userslice'

const Showuserdetail = () => {
  const userdetail = useSelector((state) => state.userdetails);
  const loading = useSelector((state) => state.userdetails.loading); 
  const error = useSelector((state) => state.userdetails.error); 

  const dispatch = useDispatch()
//   console.log(userdetail);
useEffect(() => {
      dispatch(getuserdetail());
  }, [dispatch]);

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
        {userdetail.map((user) => (
          <li key={user.email} className="list-group-item rounded shadow-sm mb-3">
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
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Showuserdetail;
