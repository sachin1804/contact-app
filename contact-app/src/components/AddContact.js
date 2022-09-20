import React from "react";
// import ContactCard from "./ContactCard";
import "./style.css"


class AddContact extends React.Component {
    state = {
        Name: "",
        Email: ""
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.Name === "" || this.state.Email === "") {
            alert("All the fields are mandatory")
            return

        }
        this.props.AddContactHandler(this.state);
        this.setState({ Name: "", Email : ""});
        console.log(this.state);
    }

    render() {
        return (
            <div className="ui main">
                <h2 className="heading2">Add Contact</h2>
                <form className="ui form" onSubmit = {this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.Name} onChange={(e)  => 
                            {this.setState({ Name: e.target.value }); console.log(this.state)}} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="Email" placeholder="Email" value={this.state.Email} onChange={(e) => this.setState({ Email: e.target.value })} />
                    </div>
                    <button className="ui button blue">Add Contact</button>
                </form>
            </div>
        );
    }
}

export default AddContact;