import React from "react";
import RaidsData from "../../data/raids/index";
import Loots from "../../data/loots";
import { Card, Container } from "react-bootstrap";
import LootTable from "./loot-table/LootTable";

function Raid({ type }) {
  const raid = RaidsData[type];
  if (!raid) {
    return "Invalid raid name";
  }
  const { bosses } = raid;

  return (
    <Container>
      {bosses.map(({ name: bossName }) => {
        const loots = Object.keys(Loots).filter((lootName) =>
          Loots[lootName].bosses.find((b) => b === bossName)
        );
        return (
          <Card key={bossName} style={{ margin: "2rem" }}>
            <Card.Header>{bossName}</Card.Header>
            <Card.Body>
              <LootTable loots={loots} />
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}

export default Raid;
