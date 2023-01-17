import React from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import "./Coins.css";

const CoinItem = (props) => {
	return (
		<div className="coin-row">
			<p>{props.coins.market_cap_rank}</p>
			<div className="img-symbol">
				<img src={props.coins.image} alt="" />
				<p>{props.coins.symbol.toUpperCase()}</p>
			</div>
			<p>₹{props.coins.current_price.toLocaleString()}</p>
			{/* <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p> */}
			<div>
				{props.coins.price_change_percentage_24h < 0 ? (
					<span className="red">
						<FiArrowDownRight className="icon" />
						{props.coins.price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
					<span className="green">
						<FiArrowUpRight className="icon" />
						{props.coins.price_change_percentage_24h.toFixed(2)}%
					</span>
				)}
			</div>

			<p className="hide-mobile">
				₹{props.coins.total_volume.toLocaleString()}
			</p>
			<p className="hide-mobile">₹{props.coins.market_cap.toLocaleString()}</p>
		</div>
	);
};

export default CoinItem;
