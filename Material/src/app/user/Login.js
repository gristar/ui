import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Login extends Component {
    loginAct() {
        alert('hhh');
    }
    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <TextField
                        name="username"
                        hintText="手机或邮箱"
                    />
                    <TextField
                        name="password"
                        hintText="密码"
                    />
                    <RaisedButton
                        label="登录"
                        primary={true}
                        onTouchTap={this.loginAct}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Login;