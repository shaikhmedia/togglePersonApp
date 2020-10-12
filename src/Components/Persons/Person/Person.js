import React, {Component} from 'react';
import Styles from './Person.module.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
    componentDidMount () {
        this.inputElement.focus()
    }
    render () {
        return (
            <WithClass class={Styles.Person}>
                <p onClick={this.props.delete}>Hi, I am {this.props.name} and I am {this.props.age} years old!</p>
                <input type='text' ref={(inputEl) => {this.inputElement = inputEl}} value={this.props.name} onChange={this.props.update}/>
            </WithClass>
        )
    }
}

export default Person;



