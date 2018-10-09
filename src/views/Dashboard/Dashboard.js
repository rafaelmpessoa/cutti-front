import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Col,
    Row
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            radioSelected: 2,
        };
    }


    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-info">
                            <CardBody  className="pb-0">
                                <div  className="text-value">9.823</div>
                                <div>Visitas realizadas</div>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    <Col xs="12" sm="6" lg="3">
                        <Widget03 dataBox={() => ({ variant: 'facebook', friends: '89k', feeds: '459' })} >
                        </Widget03>
                    </Col>

                </Row>
                <Row>
                    {/* AQUI O COMPONENTE CALENDARIO */}
                </Row>

            </div>
        );
    }

    
}

export default Dashboard;