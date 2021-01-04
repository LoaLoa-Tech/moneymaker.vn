import React, { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { language } from "..";
const Nav = ({ setIsEn }) => {
  const isEn = useContext(language);
  const { data, error, loading } = useQuery(
    gql`
      query($address: String) {
        allFileUploads(where: { address: $address }) {
          file {
            publicUrl
          }
          address
        }
      }
    `,
    {
      variables: {
        address: isEn ? "10Signals.rar" : "10SignalsV.rar",
      },
    }
  );
  const url =
    "https://api.loaloa.tech" + data?.allFileUploads[0]?.file.publicUrl;
  return (
    !(error || loading) && (
      <nav className="navbar navbar-dark navbar-expand-md sticky-top bg-primary navigation-clean-button">
        <div className="container">
          <a className="navbar-brand text-light" href="/">
            <img
              className="img-fluid logo"
              src="/assets/img/stock.png?h=b98d12993b2197eca7123d49b6c3d118"
              alt="moneymaker"
            />
            <strong>MoneyMaker</strong>
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-vi"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-vi">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item">
                <button
                  className="btn nav-link"
                  onClick={() => {
                    setIsEn(!isEn);
                  }}
                >
                  {isEn ? "Tiếng việt" : "English"}
                </button>
              </li>
            </ul>
            <span className="navbar-text actions">
              <a
                className="btn btn-light action-button"
                role="button"
                href={url}
              >
                {isEn ? "Download" : "Tải ứng dụng"}
              </a>
            </span>
          </div>
        </div>
      </nav>
    )
  );
};
export default Nav;
