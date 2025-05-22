import React, { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => setSubmitSuccess(false), 3000)
  }
  return (
  <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="mb-4">Contact Us</h1>
          <p className="lead mb-4">
            We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
          </p>

          {submitSuccess && (
            <div className="alert alert-success" role="alert">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h2 className="h4 mb-4">Get In Touch</h2>

              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <i className="bi bi-geo-alt fs-3 text-primary"></i>
                </div>
                <div className="ms-3">
                  <h3 className="h6">Our Location</h3>
                  <p className="text-muted">123 Fashion Street, Design District, New York, NY 10001</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <i className="bi bi-telephone fs-3 text-primary"></i>
                </div>
                <div className="ms-3">
                  <h3 className="h6">Phone Number</h3>
                  <p className="text-muted">+1 035-477-5588</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <i className="bi bi-envelope fs-3 text-primary"></i>
                </div>
                <div className="ms-3">
                  <h3 className="h6">Email Address</h3>
                  <p className="text-muted">info@shopapp.com</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <i className="bi bi-clock fs-3 text-primary"></i>
                </div>
                <div className="ms-3">
                  <h3 className="h6">Working Hours</h3>
                  <p className="text-muted">Mon-Sat: 9:00-19:00</p>
                </div>
              </div>

              <h3 className="h6 mb-3">Follow Us</h3>
              <div className="d-flex gap-3">
                <a href="#" className="text-dark fs-5">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-dark fs-5">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-dark fs-5">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-dark fs-5">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
