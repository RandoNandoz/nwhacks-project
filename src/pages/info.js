import "./info.css";
// long info page
export default function Info() {
    return (
			<div class="container info">
				<h1 class="title">
					Plant Info
				</h1>
                <div class="plants">
                    <h3 class="plant-name">Succulent</h3>
                    <div class="non-title">
                        <img class="plant-pic" src=
                            "https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-with-pot-indoor-outdoor-succulent__0614211_pe686835_s5.jpg?f=s"
                            alt=""/>
                        <p class="description">
                            The Desert Rose is a unique and hardy succulent, 
                            characterized by its thick, fleshy leaves and striking, 
                            trumpet-shaped flowers. The leaves are a deep green color, 
                            and are arranged in a rosette pattern, creating a beautiful, 
                            symmetrical appearance. The Desert Rose is a slow grower, but can 
                            reach heights of up to two feet when mature. The flowers, which bloom 
                            in shades of pink and red, are highly fragrant and attract bees and 
                            butterflies. This succulent is a great choice for gardeners looking 
                            for a low-maintenance, drought-tolerant plant that adds a touch of 
                            beauty to any landscape.
                        </p>
                        </div>

                        <h3 class="plant-name">Plant 2</h3>
                    <div class="non-title">
                        <img class="plant-pic" src=
                            "https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-grass__0130933_pe285358_s5.jpg"
                            alt=""/>
                        <p class="description">
                        The Chinese Money Plant, also known as Pilea peperomioides, is a popular indoor grass plant. 
                        It features round, coin-shaped leaves that are a vibrant green color. The leaves grow on long, 
                        thin stems that can reach up to 12 inches tall. It is a low maintenance plant that thrives in bright, 
                        indirect light and well-draining soil. It is also known to be a good air purifying plant. The Chinese 
                        Money Plant is easy to propagate and makes a great addition to any indoor garden.
                        </p>
                    </div>
				</div>
			</div>
        );
}

