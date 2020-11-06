import players from "../data/players";

const priorityPerLoot = players.reduce((acc, player) => {
  const { wishlist } = player;
  if (!wishlist) {
    return acc;
  }
  return Object.keys(wishlist).reduce((acc2, slot) => {
    const item = wishlist[slot];
    const newEntry = { ...item, player: player.name, class: player.class };
    let newArray;
    if (acc2[item.item]) {
      if (
        acc2[item.item].find((entry) => entry.priority === newEntry.priority)
      ) {
        newArray = acc2[item.item].map((entry) => {
          if (entry.priority === newEntry.priority) {
            if (entry.list) {
              return { ...entry, list: [...entry.list, newEntry] };
            } else {
              return { priority: newEntry.priority, list: [entry, newEntry] };
            }
          }
          return entry;
        });
      } else {
        newArray = [...acc2[item.item], newEntry].sort(
          (item1, item2) => item1.priority - item2.priority
        );
      }
    } else {
      newArray = [newEntry];
    }
    return {
      ...acc2,
      [item.item]: newArray,
    };
  }, acc);
}, {});

export default function getPriorityFromLoot(loot) {
  return priorityPerLoot[loot] || [];
}
