import React from "react";
import { hot } from "react-hot-loader/root";
import RegistrationForm from "../../untils/Forms/FormJson";

class Client extends React.Component {
  render() {
    return (
      <div>
        <RegistrationForm />
      </div>
    );
  }
}

export default hot(Client);
