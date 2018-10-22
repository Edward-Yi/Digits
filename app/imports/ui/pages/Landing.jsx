import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing-background'>
          <Grid container centered stackable columns={3}>

            <Grid.Column textAlign='center'>
              <Icon inverted size='huge' name='address book outline'/>
              <Header as='h1' inverted>Contact Users</Header>
              <Header as='h3' inverted>Keep in touch with fellow users and future coworkers</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon inverted size='huge' name='folder outline'/>
              <Header as='h1' inverted>Shared Storage</Header>
              <Header as='h3' inverted>Store a project with other users you have been working with</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon inverted size='huge' name='question circle outline'/>
              <Header as='h1' inverted>Questions</Header>
              <Header as='h3' inverted>Please contact us at: (1000)156-2222</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;
