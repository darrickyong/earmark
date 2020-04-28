import React from "react";

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { push } = this.props.history;
    // debugger;
    return (
      <main>
        Splash Page
        <header>
          Header
        </header>

        <button onClick={() => push("/login")}>Log In</button>
        <button onClick={() => push("/signup")}>Sign Up</button>

        <div>
          Div2
        </div>
      </main>

    )
  }
}

export default Splash;