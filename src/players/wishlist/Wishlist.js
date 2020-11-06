import React from 'react';
import { Table } from "react-bootstrap";
import Loots from "../../data/loots";

function Wishlist({wishlist}) {
  return (
    <Table>
        <thead>
            <tr>
                <th>Emplacement</th>
                <th>Item</th>
                <th>Priorité</th>
                <th>Info</th>
            </tr>
        </thead>
        <tbody>
        {wishlist && Object.keys(wishlist).map(slot => (
            <tr>
                <td>{slot}</td>
                <td>{wishlist[slot].item}</td>
                <td>{wishlist[slot].priority}</td>
                <td>{wishlist[slot].acquired || (Loots[wishlist[slot].item] ? Loots[wishlist[slot].item].bosses.toString() : <span style={{color: "red"}}>Pas référencé</span>)}</td>
            </tr>
        ))}
        </tbody>
    </Table>
  );
}

export default Wishlist;
