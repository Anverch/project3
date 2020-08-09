import React, { useState, useEffect } from "react";
import { Grid, Header } from "semantic-ui-react";
import "./signin.css";
import SignInForm from "../../components/SignInForm/SignInForm";
import API from "../../utils/API";

export default function SignIn() {
  const [user, setUser] = useState("");

  // useEffect(() => {
  //   if(!user) {
  //     return;
  //   }

  //   API.getUser
  // })

  const handleInputChange = (event) => setUser(event.target.value);

  return (
    <Grid className="styleGrid">
      <div className="body" />
      <div className="grad" />
      <Grid.Column className="colStyle">
        <Header className="title-header" as="h2">
          <div>
            Job<span>Spot</span>
          </div>
        </Header>
        <SignInForm handleInputChange={handleInputChange} user={user} />
      </Grid.Column>
    </Grid>
  );
}
