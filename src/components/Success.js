import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
      e.preventDefault();
      // PROCESS FORM//
        this.props.nextStep();
  }
  back = e => {
    this.props.prevStep();
    }


    render() {
         const { values:{firstName, lastName, email, instrument,city,bio} } = this.props;
    return (
      <MuiThemeProvider>
            <Fragment>
            <AppBar title="Success" style={styles.nav} />
                <h1>Thank You {firstName} For Your Submission</h1>
                <p>You will receive an email at {email} with further instructions.</p>
                <p>We will be on the look out for bands in {city} that need a {instrument} player.</p>
          </Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
    button: {
        margin:15,
    }

}

export default Success;