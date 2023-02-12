function login() {
    var userName = document.getElementById("username");
    var passWord = document.getElementById("password");
    if (userName.value == "" || passWord.value == "") {
      alert("username/paaword cannot be blank");
      return false;
    } else if (password.value == null || password.value == "") {
      alert("password cannot be blank");
      return false;
    } else {
      if (password.value.length < 6) {
        alert("password must contain more characters");
        return false;
      }
      return true;
    }
  }
  function cancel(){
      alert("Please enter the data")
      document.getElementById("username").value="";
      document.getElementById("password").value="";
  }