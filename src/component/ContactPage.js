import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <div className='container mt-5'>
        <h1 className='contact us'>Contact Us</h1>

        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your name with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your number with anyone else.</div>
          </div>

          <div className="mb-3">
            <label for="" className="form-label">Message here</label>
            <textarea className="form-control" name="" id="" rows="3"></textarea>
          </div>

          <div className="mb-3">
          <label for="" className="form-label">Services</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Choose service</option>
              <option value="1">website developement</option>
              <option value="2">app developement</option>
              <option value="3">chatbot developement</option>
            </select>
          </div>


          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>




    </div>
  )
}

export default ContactPage