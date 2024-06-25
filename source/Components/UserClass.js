import React from "react";
import UserContext from "../Utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Parteek",
        location: "Home",
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/ParteekKaushik");
      const json = await data.json();

      this.setState({
        userInfo: json,
      });
    } catch (err) {
      console.error(err);
    }

    // console.log(json);
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { name, location, id } = this.state.userInfo;
    return (
      <div>
        <h2>Name: {name} </h2>
        <div>
          <UserContext.Consumer>
            {({LoggedInUser}) => <h1>({LoggedInUser})</h1>}
          </UserContext.Consumer>
        </div>
        <h3>Location: {location} </h3>
        <h4>Id: {id}</h4>
      </div>
    );
  }
}

export default UserClass;

/* 
Behind the scenes : (How does react component work)

About.js is parent component and when ever it mounted on the web page it starts rendering
the JSX inside it and whenever is it is rendering it sees we have a UserClass and then it starts
to load user class.

Go to user class and when it starts loading UserClass the first thing is constructor is called once 
constructor is called then render is called.

Case 2 : If we make Parent component a class based compont :
Parent constructor -> Parent render -> child constructor -> child render

When the component is loaded on to web page first constructor is called then 
render is called and when the component is mounted on to the DOM then 
componentDidMount is called.

IN case of parent - 

PC -> PR -> CC -> CR -> CCDM -> PCDM

In case where we have two child : 

PC -> PR -> FCC -> FCR -> SCC -> SCR -> FCCDM -> SCCDM -> PCDM 

Reason :

This process happen in two phases : 
Render Phase :  Constructor , Render  
Commit Phase :  React updates the DOM and refs, componentDidMount

Here it comes first constructor is called and then Render and then react see 
that we have a another child so it repeats the render phase for second child and 
then moves to the commit phase and this is the reason we get ouput of life cycle 
like this.

Why react do it like this >> Its because the DOM manipualation is the most expensive
thing and doing this in this manner will make us to update the DOM just once and it 
will optimise the performance of our app. 


React class based component Life Cycle methods : 
- ComponentDidMount - It is used to make API call because we want to render our
component as fast as we can and following the approach used in react.

Load -> Render -> API Call -> Re-Render.


*/

/****
 *
 * ------------ Complete Life Cycle :
 *
 * -----MOUNTING PHASE ---
 *
 * Constructor (dummy data)
 * Render (dummy)
 *     <HTML Dummy>
 * Component Did Mount
 *     <API Call>
 *     <this.setState> --> State variable is updated
 *
 * ------ UPDATING PHASE -------
 *
 * render (API data)
 * <HTML (new API data)>
 * componentDidUpdate
 *
 *
 *
 *
 */
