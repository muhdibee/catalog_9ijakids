import React from 'react'
import { Card, CardText, CardBody, CardImg, CardTitle} from 'reactstrap'

export default function Rendergames({games}) {
    if(games !==null) {
        return (
            <div className="row m-1">
                {games.map(game=> {
                return(
                    <div key={game.GameTitle} className="col-12 col-md-4 my-1">
                        <Card>
                            <CardImg src={game.GameImage} alt={game.GameTitle} width="100%"/>
                            <CardBody>
                                <CardTitle>{game.GameTitle}</CardTitle>
                                <CardText>{game.GameDescription}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                )           
                })}
            </div>
         );
    }
    else return(
        <div>
            <h2>Game(s) not found</h2>
        </div>
    );
}
