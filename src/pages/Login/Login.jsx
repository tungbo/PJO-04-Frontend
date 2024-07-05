import React from "react";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, Form, Input, ConfigProvider } from "antd";
import { Author } from "../../Service/AuthorController";
import { useNavigate } from "react-router-dom";
import { AuthCreateContext } from "../../Context/AuthContex";
import { useDispatch } from "react-redux";
import UserReducer from "../../redux/UserReducer";
const Login = () => {
  const { setAuth } = React.useContext(AuthCreateContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const colors1 = ["#6253E1", "#04BEFE"];
  //   const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
  //   const colors3 = ['#40e495', '#30dd8a', '#2bb673'];
  const getHoverColors = (colors) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());
  const hanldeLogin = () => {
    const values = form.getFieldsValue();
    const a = Author.Login(values);
    a.then((res) => {
      document.cookie = `isLogin = true ;path=/`;
      setAuth(true);

      form.resetFields();
      dispatch(UserReducer.actions.Login(res.Info));
      if (res.Info.role === "A") {
        navigate("/admin/User");
      } else {
        navigate("/");
      }
    }).catch((err) => console.log(err));
  };
  const handleRegister = () => {
    navigate("/Register");
  };
  return (
    <div className="my-36">
      <div className="w-1/3 mx-auto">
        <h1 className="text-4xl">Login</h1>
        <Form
          className="border border-gray-300 p-10"
          onFinish={hanldeLogin}
          form={form}
        >
          <Form.Item
            name="UserName"
            rules={[{ required: true, message: "Vui Long nhập Username" }]}
            label={<p className="text-2xl">Username</p>}
          >
            <Input className="ml-2" placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="Password"
            label={<p className="text-2xl mr-2">Password</p>}
          >
            <Input className="ml-2" type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorPrimary: `linear-gradient(135deg, ${colors1.join(
                      ", "
                    )})`,
                    colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                      colors1
                    ).join(", ")})`,
                    colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                      colors1
                    ).join(", ")})`,
                    lineWidth: 0,
                  },
                },
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="w-24"
                size="large"
              >
                Login
              </Button>
              <Button
                type="primary"
                htmlType="button"
                className="w-24"
                size="large"
                onClick={() => handleRegister()}
              >
                Register
              </Button>
            </ConfigProvider>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
