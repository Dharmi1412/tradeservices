import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <div>
      <div className="main-footer-div">
        <div className="footer-div">
          <img src={assets.logo} alt="" />
        </div>

        <div className="footer-div">
          Trading is risky and many will lose money in connection with trading
          activities. All content on this site is not intended to, and should
          not be, construed as financial advice. Decisions to buy, sell, hold or
          trade in securities, commodities and other markets involve risk and
          are best made based on the advice of qualified financial
          professionals. Past performance does not guarantee future results.
        </div>
        <div className="footer-div">
          Hypothetical or Simulated performance results have certain
          limitations. Unlike an actual performance record, simulated results do
          not represent actual trading. Also, since the trades have not been
          executed, the results may have under-or-over compensated for the
          impact, if any, of certain market factors, including, but not limited
          to, lack of liquidity. Simulated trading programs in general are
          designed with the benefit of hindsight, and are based on historical
          information. No representation is being made that any account will or
          is likely to achieve profit or losses similar to those shown.
        </div>
        <div className="footer-div">
          Testimonials appearing on this website may not be representative of
          other clients or customers and is not a guarantee of future
          performance or success.
        </div>
        <div className="footer-div">
          As a provider of technical analysis tools for charting platforms, we
          do not have access to the personal trading accounts or brokerage
          statements of our customers. As a result, we have no reason to believe
          our customers perform better or worse than traders as a whole based on
          any content or tool we provide.
        </div>
        <div className="footer-div">
          Charts used on this site are by TradingView in which the majority of
          our tools are built on. TradingView® is a registered trademark of
          TradingView, Inc. www.TradingView.com. TradingView® has no affiliation
          with the owner, developer, or provider of the Services described
          herein.
        </div>
        <div className="footer-div">
          This does not represent our full Disclaimer. Please read our full
          disclaimer.
        </div>
        <div className="footer-div">
          Market data is provided by CBOE, CME Group, BarChart, CoinAPI. CBOE
          BZX delayed US equities data (15-minute delay) is licensed from CBOE
          and provided through BarChart . Delayed futures data (15-minute delay)
          is licensed from CME Group and provided through BarChart . Select
          cryptocurrency data, including major coins, is provided through
          CoinAPI . All data is provided “as is” and should be verified
          independently for trading purposes.
        </div>
        <div className="sub-div">© 2025 indiguide Global, LLC.</div>
      </div>
    </div>
  );
}
