import React, { Component } from 'react'

export class BankDetails extends Component {
  render() {
    return (
      <>
        <form>
          <div>
            <div>
              <h4>Payment</h4>
              <label htmlFor="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
              <label htmlFor="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
              <label htmlFor="expmonth">Exp Month</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="September" />
              <div >
                <div >
                  <label htmlFor="expyear">Exp Year</label>
                  <input type="text" id="expyear" name="expyear" placeholder="2018" />
                </div>
                <div >
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="352" />
                </div>
              </div>
            </div>

          </div>
          <div >
            <h4>Billing Address</h4>
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
            <label htmlFor="bemail"> Email</label>
            <input type="text" id="bemail" name="email" placeholder="john@example.com" />
            <label htmlFor="adr">Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
            <label htmlFor="city"> City</label>
            <input type="text" id="city" name="city" placeholder="New York" />

            <div >
              <div >
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY" />
              </div>
              <div >
                <label htmlFor="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001" />
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>

      </>
    )
  }
}

export default BankDetails;
