import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    renderComments(comments) {
        if (comments !== null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    {comment.comment} <br />
                                    -- {comment.author}, {comment.date}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return (<div></div>);
        }

    }

    renderDish(dish) {
        if (dish !== null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>  
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    render() {
        return (
            this.renderDish(this.props.dish)
        );
    }
}

export default DishDetail;