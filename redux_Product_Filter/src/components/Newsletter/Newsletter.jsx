import React, { useState } from 'react'

function Newsletter() {
    const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setError("")
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSuccess(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (err) {
      setError("An error occurred. Please try again.",err)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
     <div className="container-fluid py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mb-4">Subscribe to Our Newsletter</h2>
            <p className="lead mb-5">
              Get the latest updates, offers and special announcements delivered directly to your inbox.
            </p>

            {isSuccess && (
              <div className="alert alert-success" role="alert">
                Thank you for subscribing to our newsletter!
              </div>
            )}

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3 mx-auto" style={{ maxWidth: "500px" }}>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-dark px-4" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
              <div className="">We respect your privacy. Unsubscribe at any time.</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
