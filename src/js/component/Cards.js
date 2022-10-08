import React from "react";
import Card from "./Card";
import image1 from '../../img/imagen.png'

const cards = [
    {
        id: 1,
        title: 'Titulo 1',
        image: image1,
        parrafo:'Lorem ipsum dolor sit amet. Cum quas numquam aut inventore voluptate eos natus omnis quo odio temporibus vitae libero in consequatur incidunt. Ut optio dolorem vel quis voluptas ea totam maxime At asperiores quidem qui voluptatem tempora et adipisci fuga ab quas possimus.'
    },
    {
        id: 2,
        title: 'Titulo 2',
        image: image1,
        parrafo:'Lorem ipsum dolor sit amet. Cum quas numquam aut inventore voluptate eos natus omnis quo odio temporibus vitae libero in consequatur incidunt. Ut optio dolorem vel quis voluptas ea totam maxime At asperiores quidem qui voluptatem tempora et adipisci fuga ab quas possimus.'
    },
    {
        id: 3,
        title: 'Titulo 3',
        image: image1,
        parrafo:'Lorem ipsum dolor sit amet. Cum quas numquam aut inventore voluptate eos natus omnis quo odio temporibus vitae libero in consequatur incidunt. Ut optio dolorem vel quis voluptas ea totam maxime At asperiores quidem qui voluptatem tempora et adipisci fuga ab quas possimus.'
    },
    {
        id: 4,
        title: 'Titulo 4',
        image: image1,
        parrafo:'Lorem ipsum dolor sit amet. Cum quas numquam aut inventore voluptate eos natus omnis quo odio temporibus vitae libero in consequatur incidunt. Ut optio dolorem vel quis voluptas ea totam maxime At asperiores quidem qui voluptatem tempora et adipisci fuga ab quas possimus.'
    }
];

function Cards() {
    return (
        <div className="container d-flex justify-content-center h-100 p-4">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-3" key = {card.id}>
                            <Card title = {card.title} imagen = {card.image} parrafo={card.parrafo} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Cards;