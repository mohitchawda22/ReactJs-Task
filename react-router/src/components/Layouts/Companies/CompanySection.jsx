import React from 'react'
import google from "../../../assets/images/google.png"
import toko from "../../../assets/images/toko.png"
import tiket from "../../../assets/images/tiket.png"
import microsoft from "../../../assets/images/microsoft.png"

function CompanySection() {
  return (
   <>
    <section className="py-5 bg-white">
        <div className="container">
          <h5 className="text-center mb-4">Some of our trusted company</h5>
          <div className="row justify-content-center align-items-center">
            <div className="col-6 col-md-3 text-center mb-3">
              <img
                src={google}
                width={120}
                height={50}
                alt="Google"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-md-3 text-center mb-3">
              <img
                src={toko}
                width={120}
                height={50}
                alt="Tokopedia"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-md-3 text-center mb-3">
              <img
                src={tiket}
                width={120}
                height={50}
                alt="Tiket.com"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-md-3 text-center mb-3">
              <img
                src={microsoft}
                width={120}
                height={50}
                alt="Microsoft"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default CompanySection
