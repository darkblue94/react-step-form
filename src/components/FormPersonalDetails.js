import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';

export class FormPersonalDetails extends Component {
      continue = e => {
        e.preventDefault();
        this.props.nextStep();
      }
        back = e => {
        e.preventDefault();
        this.props.prevStep();
      }

  render() {
    const { values, handleChange } = this.props;
    return (
 <MuiThemeProvider>
            <Fragment>
                <AppBar title="Enter Personal Details" />
                <TextField
                    hintText="Enter Your Instrument"
                    floatingLabelText="Instrument"
                    onChange={handleChange('instrument')}
                    defaultValue={values.instrument}
                >
                </TextField><br />
                <TextField
                    hintText="Enter Your City"
                    floatingLabelText="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                >
                </TextField><br />
                <TextField
                    hintText="Enter Your Bio"
                    floatingLabelText="Bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                >
                </TextField><br />
                <RaisedButton
                    label="Back"
                    primary={true}
                    style={styles.button}
                    onClick={this.back}
                />
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />
          </Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles = {
     button: {
       margin: 15,
     }
}
export default FormPersonalDetails
