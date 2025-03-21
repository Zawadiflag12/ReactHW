// build my contact page where they can contact me
//input fields for name, email, and message
function Contact(){
   return (
   <div className="contact">
      <h1 className="title"> Contact Me</h1>
      <form>
         <label for="name">Name:</label>
         <input type="text" id="name" name="name"></input> <br />
         <label for="email">Email:</label>
         <input type="text" id="email" name="email"></input> <br />
         <label for="message">Message:</label>
         <textarea id="message" name="message" rows="5" cols="40"></textarea> <br />
         <button type="submit">Submit</button>
      </form>
   </div>
   )
}

export default Contact; 