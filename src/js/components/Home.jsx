import React from "react";

import MyNavBar from "./componentNavBar.jsx"
import MyJumboTron from "./jumboThing.jsx";
import MyCard from "./multiCard.jsx";
import ThisFooter from "./myFooter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<>
			<div className="container-fluid bg-dark">
				<MyNavBar />
			</div>
			<div className="container p-3">
				<MyJumboTron />
			</div>

			<div className="container p-3">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<MyCard />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<MyCard />
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<MyCard />
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<MyCard />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<MyCard />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<MyCard />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<MyCard />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 p-3">
						<MyCard />
					</div>
				</div>
			</div>
		<div className="container-fluid p-0 bg-dark">
			<ThisFooter/>
			</div>	
		</>
	);
};

export default Home;