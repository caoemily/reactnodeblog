import React, {Component} from 'react';
import '../App.css';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { submitPost } from '../actions';

class AddPost extends Component {

    renderError({error, touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = formProps => {
        //semantic ui, only with the className error, will the error be rendered
        //error message is from validate, which is added to reduxForm object.
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error':''}`
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                {formProps.label==='Enter Description'?<textarea {...formProps.input} />:<input {...formProps.input} />}
                {this.renderError(formProps.meta)}
            </div>
        );
    }
    onSubmit = formValues => {
        formValues.userID = this.props.userID;
        this.props.submitPost(formValues);
        this.props.history.push('/');
    }
    render() {
        ////the reduxForm has the handleSubmit which takes the call back function as argument
        //<Field> within the form -- to render real form element, call the renderInput
        //formValues is passed in as arguments for the callback functions within the form
        //the input is within the formProps, meanwhile, the label... is also added to formProps.
        return (
            <div className="ui main text container">
                <div className="ui header">New Post</div>
                <div>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form segment error" action="/api/posts" method="POST">
                        <Field name="title" component={this.renderInput} label="Enter Title"/>
                        <Field name="image" component={this.renderInput} label="Enter Image URL"/>
                        <Field name="description" component={this.renderInput} label="Enter Description"/>
                        <button className="ui big violet basic button">Create Post</button>
                    </form>
                </div>
            </div>             
        )
    }
}

const mapStateToProps = state => {
    return {
        userID: state.auth.userID
    }
}

//put the validate method for the reduxForm object.
// the form will be auto validated upon submission. 
const validate = formValues => {
    const errors ={};
    if(!formValues.title){
        errors.title = "You must enter a title";
    }
    if(!formValues.description){
        errors.description = "You must enter a description";
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'addPost', 
    validate: validate
})(AddPost);

export default connect(mapStateToProps, {submitPost})(formWrapped);
