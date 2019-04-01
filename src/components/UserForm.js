import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';
import Success from './Success';
import FormPersonalDetails from './FormPersonalDetails';

export class UserForm extends Component {
    state={
        step: 1,
        firstName: '',
        lastName: '',
        email:'',
        instrument: '',
        city: '',
        bio:''
    }
    //Proceed To Next Step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    //Go Back To Previous Step
     prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    //Handlte Fields Change
    //using and eventHandler to accces value of input
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    render() {
    const { step } = this.state;
    const { firstName, lastName, email, instrument, city, bio } = this.state;
    const values = {firstName, lastName, email, instrument, city, bio }
        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Success
                        values={values}
                    />
                );
    }
  }
}

export default UserForm

