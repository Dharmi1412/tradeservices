import React from 'react'
import './yearly.css'

export default function yearly() {
  return (
    <div>

    <div className="pricing-container">
      {/* Premium Plan */}
      <div className="pricing-card premium">
        <div className="pricing-header">
          <h2>Premium</h2>
          <div className="icon">💎</div>
        </div>
        <p className="price">
          $779.99 <span>/year</span>
        </p>
        <p className="subtitle">
          For active traders, the best set of indicators & signals.
        </p>

        <ul className="features">
          <li>✔ Price Action Concepts Algo + Screener</li>
          <li>✔ Signals & Overlays Algo + Screener</li>
          <li>✔ Oscillator Matrix Algo + Screener</li>
          <li>✔ Advanced Algo alerts on TradingView</li>
          <li>✔ Scanner alerts & manual setup strategies in Discord</li>
        </ul>

        <button className="subscribe-btn">Subscribe →</button>
        <p className="guarantee">30-day money-back guarantee</p>
      </div>

      {/* Ultimate Plan */}
      <div className="pricing-card ultimate">
        <div className="pricing-header">
          <h2>Ultimate</h2>
          <span className="tag">Popular</span>
          <div className="icon">✨</div>
        </div>
        <p className="price">
          $1109.99 <span>/year</span>
        </p>
        <p className="subtitle">
          For data-driven traders, advanced backtesting with AI.
        </p>

        <ul className="features">
          <li>✨ AI Backtesting platform access w/ all Algos</li>
          <li>✔ Auto-replicate AI strategies on TradingView w/ Backtesters</li>
          <li>✔ Deep optimization engine for signal settings</li>
          <li>✔ Combine Algos for AI strategies using LUCID</li>
          <li>✔ Templated strategies in Discord, 24/7 support & updates</li>
        </ul>

        <button className="subscribe-btn">Subscribe →</button>
        <p className="guarantee">30-day money-back guarantee</p>
      </div>
    </div>

    </div>
  )
}