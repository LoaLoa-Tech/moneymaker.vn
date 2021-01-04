/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import "./App.css";
import Content from "../components/Content";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

function App() {
  const trading = ` <iframe
          scrolling="no"
          allowtransparency="true"
          style="box-sizing: border-box; height: 46px; width: 100%"
          src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22OANDA%3AAUDUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22OANDA%3AGBPUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22CURRENCYCOM%3AGOLD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22OANDA%3AUSDJPY%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22USDCHF%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22USDCAD%22%7D%5D%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22moneymaker.vn%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D"
          frameborder="0"
        ></iframe>`;
  return (
    <Fragment>
      <header className="mb-5">
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: ` <iframe
        scrolling="no"
        allowtransparency="true"
        style="box-sizing: border-box; height: 46px; width: 100%"
        src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22OANDA%3AAUDUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22OANDA%3AGBPUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22CURRENCYCOM%3AGOLD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22OANDA%3AUSDJPY%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22USDCHF%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22USDCAD%22%7D%5D%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22moneymaker.vn%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D"
        frameborder="0"
      ></iframe>`,
          }}
        ></div>
        {/* <TradingViewEmbed
          widgetType={widgetType.TICKER_TAPE}
          widgetConfig={{
            colorTheme: "dark",
            symbol: "BITMEX:XBTUSD",
            width: "100%",
          }}
        /> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-5">
              <img
                className="img-fluid"
                data-aos="fade-right"
                src="/assets/img/Bitcoin%20P2P-amico.svg?h=35993449df8024cf58dc180270a98013"
                atl="Bitcoin"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-7 d-md-flex align-items-md-center editable">
              <div data-aos="fade-up">
                <Content type="dau-trang" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mb-5">
        <div className="container">
          <Content type="video" />
        </div>
      </section>

      <section className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Content type="noi-dung-trai" />
            </div>
            <div className="col-lg-4">
              <Content type="noi-dung-giua" />
            </div>
            <div className="col-lg-4">
              <Content type="noi-dung-phai" />
              <img
                className="img-fluid"
                src="/assets/img/Product%20tour-pana.svg?h=3e2f9d0568f4d7623d15f13a40b3418c"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        {/* <TradingViewEmbed
          widgetType={widgetType.ADVANCED_CHART}
          widgetConfig={{
            colorTheme: "dark",
            symbol: "BITMEX:XBTUSD",
            width: "100%",
          }}
        /> */}
      </section>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <Content type="dich-vu" />
              </div>
              <div className="col-sm-6 col-md-3 item">
                <Content type="lien-he" />
              </div>
              <div className="col-md-6 item text">
                <Content type="gioi-thieu" />
              </div>
            </div>
            <p className="copyright">
              Tạo bởi <a href="https://loaloa.tech">Loa Loa Tech</a>
            </p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default App;
