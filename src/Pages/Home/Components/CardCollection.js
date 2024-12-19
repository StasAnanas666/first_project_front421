import Card from "./Card";
import img1 from "./images/work1.jpg";
import img2 from "./images/work2.jpg";
import img3 from "./images/work3.jpg";
import img4 from "./images/work4.jpg";

function CardCollection() {
    return (
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 bg-red">
            <Card title="Item #1" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, labore fuga." image={img1}  />
            <Card title="Item #2" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, labore fuga." image={img2} />
            <Card title="Item #3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, labore fuga." image={img3} />
            <Card title="Item #4" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, labore fuga." image={img4} />
        </div>
    );
}

export default CardCollection;
