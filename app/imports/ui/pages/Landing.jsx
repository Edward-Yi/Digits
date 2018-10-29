import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing-background'>
          <Grid container stackable centered columns={3}>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='users' inverted/>
              <Header as='h1' inverted>Multiple Users</Header>
              <Header as='h3' inverted>Connect with other users in this site.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='file text' inverted/>
              <Header as='h1' inverted>Contact Details</Header>
              <Header as='h3' inverted>Exchange contact information with these users.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='checked calendar' inverted/>
              <Header as='h1' inverted>Timestamped Notes</Header>
              <Header as='h3' inverted>Mark your calender on when and where you will meet your contact</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
