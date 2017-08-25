import React, {Component} from 'react';
import {Link} from 'react-router';

const styles = {
    wrap: {
        margin: 'auto',
        padding: '2rem 0',
        width: '256px'
    },
    groupInputs: {
        padding: '1px 0',
        border: '1px solid #d5d5d5',
        borderRadius: '3px'
    },
    input: {
        padding: '1em .8em',
        width: '100%',
        boxSizing: 'border-box'
    },
    inputLogin: {
        width: '100%'
    }
};
const loginAct = () => {
    alert('hhh');
};
class TextField extends Component {
    render(){
        return (
            <input></input>
        )
    }
}
class Login extends Component {
    render(){
        return(
            <div style={styles.wrap}>
                <Link to="/register">注册</Link>
                <div style={styles.groupInputs}>
                    <TextField
                        name="username"
                        style={styles.input}
                        hintText="手机或邮箱"
                    />
                    <TextField
                        name="password"
                        style={styles.input}
                        hintText="密码"
                    />
                </div>
            </div>
        )
    }
}

export default Login;