import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
    return (
        <Container className="mt-4">
            <div className="header1">
                <h1>Welcome to the Music Band Website</h1>
                <p>Check out our latest release and upcoming shows!</p>
                <div className="latest-release">
                    <h2>Latest Release</h2>
                    <div className="latest-release-details">
                        <div className="play-button">
                            <div className="play-icon-container">
                                <FontAwesomeIcon icon={faPlay} className="play-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upcoming-shows">
                <h2>Upcoming Shows</h2>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Venue</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Buy Ticket</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DTE ENERGY MUSIC THEATRE</td>
                            <td>2024-01-31</td>
                            <td>DETROIT, MI</td>
                            <td>
                                <Button variant="primary">Buy Tickets</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>BUDWEISER STAGE</td>
                            <td>2024-02-15</td>
                            <td>TORONTO,ON</td>
                            <td>
                                <Button variant="primary">Buy Tickets</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>JIGGY LUBE LIVE</td>
                            <td>2024-02-15</td>
                            <td>BRISTOW, VA</td>
                            <td>
                                <Button variant="primary">Buy Tickets</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>AK-CHIN PAVILION</td>
                            <td>2024-02-15</td>
                            <td>PHOENIX, AZ</td>
                            <td>
                                <Button variant="primary">Buy Tickets</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default Home;