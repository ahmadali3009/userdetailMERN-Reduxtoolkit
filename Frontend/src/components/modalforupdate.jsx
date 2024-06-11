import React, { useState , useEffect } from 'react'

const Modalforupdate = ({ user , show , handleClose , handleSave}) => {
    const [userdetailupdate , setuserdetailupdate] = useState(user)
    useEffect(() => {
        setuserdetailupdate(user);
    }, [user]);
    const onChange = (e)=>
        {   
            e.preventDefault()
            const {name , value} = e.target
            setuserdetailupdate( {...userdetailupdate , [name]:value } )
        } 
    const submithandler = (e)=>
        {
            e.preventDefault();
            handleSave(userdetailupdate , userdetailupdate.phone);

        }



    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-bs-toggle={show} data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            <div  className={`modal ${show ? 'd-block' : 'd-none'}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={submithandler}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" name='email' value={userdetailupdate.email} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="text" className="form-label">UserName</label>
                                    <input type="text" name='Name' value={userdetailupdate.Name} onChange={onChange} className="form-control" id="text" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="phone" name='phone' value={userdetailupdate.phone} onChange={onChange} className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={handleClose} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modalforupdate;
