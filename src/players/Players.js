import React from 'react';
import players from "../data/players";
import { Accordion, Button, Table } from "react-bootstrap";
import Wishlist from "./wishlist/Wishlist";

function Players() {
  return (
    
    <Accordion>
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Spé</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {players.map(player => {
            return (
              <>
                <tr>
                    <td>
                        {player.name}
                    </td>
                    <td>
                        {player.class}
                    </td>
                    <td>
                        {player.spe}
                    </td>
                    <td>
                      <Accordion.Toggle as={Button} variant="link" eventKey={player.name}>
                          wishlist
                      </Accordion.Toggle>
                    </td>
                </tr>
                    <tr>
                        <td colspan="4" style={{padding: 0}}>
                            <Accordion.Collapse eventKey={player.name}>
                                <Wishlist wishlist={player.wishlist} />
                            </Accordion.Collapse>
                        </td>
                    </tr>
                </>
            );
          })}
      </tbody>
    </Table>
            </Accordion>
  );
}

export default Players;
