import React from "react";
import { Table } from "react-bootstrap";
import Attribution from "./attribution/Attribution";

function LootTable({ loots }) {
  return (
    <Table bordered hover responsive>
      <thead>
        <tr>
          <th>Loot</th>
          <th>Attribution</th>
        </tr>
      </thead>
      <tbody>
        {loots.map((loot) => (
          <tr key={loot}>
            <td>{loot}</td>
            <td style={{ maxWidth: 300 }}>
              <Attribution loot={loot} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default LootTable;
