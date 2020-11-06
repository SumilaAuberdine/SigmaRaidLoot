import React from "react";
import getPriorityLoot from "../../../../utils/getPriorityFromLoot";

function Attribution({ loot }) {
  return (
    <>
      {getPriorityLoot(loot).map((attrib, index) => {
        if (attrib.list) {
          return (
            <span
              style={{
                marginLeft: index !== 0 ? 4 : 0,
              }}
            >
              [
              {attrib.list.map((attribList, i) => (
                <span
                  key={attribList.player}
                  style={Object.assign(
                    {
                      marginLeft: i !== 0 ? 4 : 0,
                    },
                    attribList.acquired
                      ? { fontStyle: "italic", textDecoration: "line-through" }
                      : {}
                  )}
                >
                  {attribList.player}
                </span>
              ))}
              ]
            </span>
          );
        } else {
          return (
            <span
              key={attrib.player}
              style={Object.assign(
                {
                  marginLeft: index !== 0 ? 4 : 0,
                },
                attrib.acquired
                  ? { fontStyle: "italic", textDecoration: "line-through" }
                  : {}
              )}
            >
              {attrib.player}
            </span>
          );
        }
      })}
    </>
  );
}

export default Attribution;
