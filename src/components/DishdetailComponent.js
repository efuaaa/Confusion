import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderComments({comments}) {
        if (comments !== null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    {comment.comment} <br />
                                    -- <p> {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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

    function RenderDish({dish}) {
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
                    {/* <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div> */}
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    const DishDetail= (props) =>{
        if (props.dish != null){
        return (
            <div class= "container">
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish.comments}/>
                     </div>
            </div>
            </div>
        );
    }
    else {
        return (<div></div>);
    }
}


export default DishDetail;