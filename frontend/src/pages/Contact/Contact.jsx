import './Contact.css'

export default function Contact(){
    return(
        <>
        <div className="">
            <div className="col-md-3 g-4 p-4">
                <form action="" className='contact-section'>
                    <div className="mb-3">
                        <label className="form-label" >Name</label>
                        <input type="text" className="form-control" required/>
                    </div>
                     <div className="mb-3">
                        <label className="form-label">Email ID</label>
                        <input type="text" className="form-control" required/>
                    </div>
                     <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" required/>
                    </div>
                     <div className="mb-3">
                        <label className="form-label">Your City</label>
                        <input type="text" className="form-control" required/>
                    </div>
                     <div className="mb-3">
                        <label className="form-label">Your Query</label>
                        <input type="text" className="form-control" required/>
                    </div>

                    <div className='text-center'>
                        <button className='btn btn-warning '>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}