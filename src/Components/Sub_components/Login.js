import {
    Alert,
    Button,
    Card,
    Col,
    Form,
    Input,
    message,
    Row,
    Spin,
    Typography,
  } from "antd";
  import React, { Fragment, useState } from "react";
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  import { useAuthContext } from "../../Context/AuthContext"; 
//   import useScreenSize from "../../hooks/useScreenSize";
//   import { API } from "../../constant";
  import { setToken } from "../../Context/Mini_fuctions/AuthToken";
  
  const Login = () => {
    const API=`${process.env.REACT_APP_DATAURL}`
    // const { isDesktopView } = useScreenSize();
    const navigate = useNavigate();
  
    const { setUser } = useAuthContext();
  
    const [isLoading, setIsLoading] = useState(false);
  
    const [error, setError] = useState("");
  
    const onFinish = async (values) => {
      setIsLoading(true);
      try {
        const value = {
          identifier: values.email,
          password: values.password,
        };
        const response = await fetch(`${API}${process.env.REACT_APP_LOGIN_USER}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        });
  
        const data = await response.json();
        if (data?.error) {
          throw data?.error;
        } else {
          // set the token
          setToken(data.jwt);
  
          // set the user
          setUser(data.user);
  
          message.success(`Welcome back ${data.user.username}!`);
          console.log(data)
  
          navigate("/profile", { replace: true });
        }
      } catch (error) {
        console.error(error);
        setError(error?.message ?? "Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <Fragment>
        <Row align="middle">
          <Col span={window.innerWidth>415 ? 8 : 24} offset={window.innerWidth>415 ? 8 : 0}>
            <Card title="LogIn">
              {error ? (
                <Alert
                  className="alert_error"
                  message={error}
                  type="error"
                  closable
                  afterClose={() => setError("")}
                />
              ) : null}
              <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                    },
                  ]}
                >
                  <Input placeholder="Email address" />
                </Form.Item>
  
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true }]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
  
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login_submit_btn"
                  >
                    Login {isLoading && <Spin size="small" />}
                  </Button>
                </Form.Item>
              </Form>
              <Typography.Paragraph className="form_help_text">
                New to Social Cards? <Link to="/register">Register</Link>
              </Typography.Paragraph>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  };
  
  export default Login;