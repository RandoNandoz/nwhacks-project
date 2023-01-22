//import "./Info.css";

export default function Info() {
    return (
		<div>
			<nav class="navbar-background">
				<ul class="nav-list">
					<div class="logo">
						<img src=
                            "https://media.istockphoto.com/id/1045368942/fr/vectoriel/cr%C3%A9ation-de-feuille-verte-abstraite-logo-ic%C3%B4ne-vector-jeu-dic%C3%B4nes-de-l%C3%A9cologie-ic%C3%B4ne-eco.jpg?s=612x612&w=0&k=20&c=mSeHhuilvfCOyvj-tIwYFFqjCNkJZJWGQV_atSMBTyQ="
							alt="" />
					</div>
                    <li><a href="App.js">Plants</a></li>
					<li><a href="#courses">Log</a></li>
					<li><a href="#tutorials">Schedule</a></li>
					<li><a href='#student'>Account</a></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							Plant Info
						</h1>
                        <div class="description">
                            <img class="plant-pic" src=
                            "https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-with-pot-indoor-outdoor-succulent__0614211_pe686835_s5.jpg?f=s"
							alt=""/>
                            <p class="text-small">
                                Yes this is a plant.
                            </p>
                        </div>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
    );
}

