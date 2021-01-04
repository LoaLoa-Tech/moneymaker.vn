import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { client } from "../index";
const Login = () => {
  const { data: user } = useQuery(gql`
    query {
      authenticatedUser {
        id
        email
        name
      }
    }
  `);
  const [authenticate] = useMutation(gql`
    mutation signin($identity: String, $secret: String) {
      authenticate: authenticateUserWithPassword(
        phone: $identity
        password: $secret
      ) {
        token
        item {
          id
        }
      }
    }
  `);
  const [alert, setAlert] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const identity = e.target.phone.value;
    const secret = e.target.password.value;
    if (identity && secret) await client.clearStore();
    try {
      const { data } = await authenticate({
        variables: { identity, secret },
      });
      localStorage.setItem("token", data?.authenticate?.token);
      window.location.reload();
    } catch (e) {
      setAlert("Sai Phone hoặc Password.");
    }
  };
  return (
    <section className="container pt-4">
      <form noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            onChange={(e) => {
              var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
              if (!vnf_regex.test(e.target.value))
                setAlert("vui lòng nhập số điện thoại hợp lệ");
              else setAlert("");
            }}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <small className="form-text text-muted">{alert}</small>
      </form>
    </section>
  );
};
export default Login;
