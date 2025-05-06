import React from 'react'

function NewsletterSection() {
  return (
    <>
        <section className="py-5" style={{ backgroundColor: "#D2B48C" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h4 className="text-white mb-3">SUBSCRIBE TO GET THE LATEST NEWS ABOUT US</h4>
              <p className="text-white-50">Get the latest information and promo offers directly</p>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Your email address" />
                <button className="btn btn-warning text-white">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsletterSection
