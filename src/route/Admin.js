import { gql, useQuery } from "@apollo/client";
import { Fragment } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Editor from "../components/Editor";
import Login from "../components/Login";

const Admin = () => {
  const { data } = useQuery(gql`
    query {
      authenticatedUser {
        id
        email
        name
      }
    }
  `);
  return (
    <Fragment>
      {data?.authenticatedUser ? (
        <section className="container">
          <div className="row pt-4">
            <div className="col">
              <Editor type="dau-trang" />
              <Editor type="video" />
              <Editor type="noi-dung-trai" />
              <Editor type="noi-dung-giua" />
              <Editor type="noi-dung-phai" />
              <Editor type="dich-vu" />
              <Editor type="lien-he" />
              <Editor type="gioi-thieu" />
            </div>
          </div>
        </section>
      ) : (
        <Login />
      )}
    </Fragment>
  );
};
export default Admin;
