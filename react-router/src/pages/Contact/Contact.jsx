import React from 'react'
import hero3 from "../../assets/images/hero3.webp"

function Contact() {
  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#FFE4E1" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold text-warning">Get In Touch</h1>
              <p className="text-muted my-4">
                We'd love to hear from you! Whether you have a question about our products, need design advice, or want
                to discuss a custom project, our team is here to help.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={hero3}
                width={500}
                height={400}
                alt="Contact us"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Send Us a Message</h2>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="firstName" className="form-label">
                      First Name*
                    </label>
                    <input type="text" className="form-control" id="firstName" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name*
                    </label>
                    <input type="text" className="form-control" id="lastName" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address*
                  </label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input type="tel" className="form-control" id="phone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject*
                  </label>
                  <input type="text" className="form-control" id="subject" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message*
                  </label>
                  <textarea className="form-control" id="message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-warning text-white px-4 py-2">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h3 className="fw-bold mb-4">Contact Information</h3>
                <div className="mb-4">
                  <h5>
                    <i className="bi bi-geo-alt text-warning me-2"></i> Address
                  </h5>
                  <p className="text-muted">123 Furniture Street, Design District, New York, NY 10001</p>
                </div>
                <div className="mb-4">
                  <h5>
                    <i className="bi bi-telephone text-warning me-2"></i> Phone
                  </h5>
                  <p className="text-muted">+1 (555) 123-4567</p>
                </div>
                <div className="mb-4">
                  <h5>
                    <i className="bi bi-envelope text-warning me-2"></i> Email
                  </h5>
                  <p className="text-muted">info@kfplusfurniture.com</p>
                </div>
                <div className="mb-4">
                  <h5>
                    <i className="bi bi-clock text-warning me-2"></i> Hours
                  </h5>
                  <p className="text-muted mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-muted">Sunday: Closed</p>
                </div>
                <div className="mt-4">
                  <h5>Follow Us</h5>
                  <div className="d-flex gap-3 mt-2">
                    <a href="#" className="text-muted fs-5">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="text-muted fs-5">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="text-muted fs-5">
                      <i className="bi bi-pinterest"></i>
                    </a>
                    <a href="#" className="text-muted fs-5">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#FFF5EE" }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Visit Our Showroom</h2>
          <div className="ratio ratio-21x9 rounded overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620796867952!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border mb-3 rounded">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Do you offer delivery services?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, we offer delivery services nationwide. Delivery fees vary based on location and the size of
                      your order. For local deliveries within a 50-mile radius of our showroom, we offer special rates.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border mb-3 rounded">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What is your return policy?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      We accept returns within 30 days of delivery for most items in their original condition. Custom
                      orders are non-returnable. Please contact our customer service team to initiate a return.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border mb-3 rounded">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Do you offer design consultations?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, we offer complimentary design consultations at our showroom. Our design experts can help you
                      select the perfect pieces for your space. We also offer in-home consultations for a fee, which is
                      credited toward your purchase.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Can I customize my furniture?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      We specialize in custom furniture. You can choose from various fabrics, finishes, and dimensions
                      to create pieces that perfectly fit your space and style. Contact us for more information about
                      our customization options.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
