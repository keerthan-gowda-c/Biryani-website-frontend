import './LoginPage.css'

export default function LoginPage() {
  return (
    <>
      <form action="">

        <section className="login-section">

          <div>
            <label htmlFor="">Name : </label>
          </div>
          <div>
            <input type="text" placeholder='Enter Your Full Name' required />
          </div>
          <div>
            <label htmlFor="">Mobile No : </label>
          </div>
          <div>
            <input type="text" placeholder='Enter Your Mobile Number' required />
          </div>
          <div>
            <label htmlFor="">Email Id : </label>
          </div>
          <div>
            <input type="email" placeholder='Enter Your Email Id' required />
          </div>
          <div>
            <label htmlFor="">Password : </label>
          </div>
          <div>
            <input type="password" placeholder='Password must be 8-16 characters' required />
          </div>
          <div className='button-div'>
            <button className='btn btn-outline-success' > Login</button>
          </div>


        </section>
      </form>
    </>
  )
}