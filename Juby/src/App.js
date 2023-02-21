import "./App.css";
import ParentComponent from "./components/funct-comp/ParentComponent";

function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <label><b>First Name : </b></label>
      <input type="text" name="Firstname" placeholder="Firstname" size="15" />
      <br />
      <br />
      <label><b>Second Name :</b></label>
      <input type="text" name="Secondname" placeholder="Secondname" size="15" />
      <br />
      <br />
      <label>
        <b>Qualification :</b></label>
      <select>
        <option value="Selection">Select....</option>
        <option value="B-Tech">B-Tech</option>
        <option value="M-Tech">M-Tech</option>
        <option value="BBA">BBA</option>
      </select>
      <br />
      <br />
      <label><b>Gender :</b> </label> <br /><br />
      <input type="radio" checked="true" name="user_gender" /> Male<br />
      <input type="radio" name="user_gender" />Female<br/><br/><br/>
      <label><b>Address : </b> </label>
      <br />
      <textarea cols="80" rows="5" placeholder="Current Address" value="Address" ></textarea>
      <br /> <br />
      <label>
        <b>Phone Number : </b>
      </label>
      <input type="text" name="phone" placeholder="phone no." size="10" />
      <br /><br /> <br />
      <label>
        <b>Location :</b>
      </label><br /> <br />
      <select>
        <option value="Trivandrum">Trivandrum</option> <br />
        <option value="Kollam"> Kollam</option> <br />
        <option value="Chakka">Chakka</option> <br />
        <option value="Kanyakumari">Kanyakumari</option> <br /> <br />
      </select>
      <br /><br />
      <b>Email:</b>
      <input type="text" placeholder="Enter Email"  id="email" name="email" /> <br /> <br /> <br />
      <b>Password: </b>
      <input type="text" placeholder="Enter password" id="password" name="password"/><br />
      <ParentComponent />
    </div>
  );
}

export default App;
