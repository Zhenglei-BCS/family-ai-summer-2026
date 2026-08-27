(() => {
  const storyEl = document.getElementById("story");
  const choicesEl = document.getElementById("choices");
  const invEl = document.getElementById("inventory");
  const btnRestart = document.getElementById("btn-restart");

  /** @type {Record<string, { text: string, choices: { label: string, next: string, need?: string, give?: string, take?: string }[] }>} */
  const rooms = {
    start: {
      text:
        "You stand at the edge of a mossy forest path.\n" +
        "Somewhere ahead, an old oak hides a secret.\n" +
        "A wooden sign reads: “Bring the key. Mind the owl.”",
      choices: [
        { label: "Follow the path into the trees", next: "clearing" },
        { label: "Check the bushes near the sign", next: "bushes" },
      ],
    },
    bushes: {
      text:
        "You push aside wet leaves.\n" +
        "Something metal glints — a small brass key on a leather cord.",
      choices: [
        { label: "Take the key", next: "clearing", give: "brass key" },
        { label: "Leave it and go to the clearing", next: "clearing" },
      ],
    },
    clearing: {
      text:
        "A round clearing. In the center: a huge oak with a tiny door in the bark.\n" +
        "An owl blinks at you from a branch.",
      choices: [
        { label: "Talk to the owl", next: "owl" },
        { label: "Try the tiny door", next: "door" },
        { label: "Go back toward the sign", next: "start" },
      ],
    },
    owl: {
      text:
        "“Whooo seeks the treasure?” the owl asks.\n" +
        "“Only those with the brass key may open the oak.\n" +
        "The key sleeps in the bushes by the path.”",
      choices: [
        { label: "Thank the owl and return to the clearing", next: "clearing" },
        { label: "Search for the bushes again", next: "bushes" },
      ],
    },
    door: {
      text:
        "The tiny door has a keyhole the size of a pea.\n" +
        "It will not budge without the right key.",
      choices: [
        {
          label: "Use the brass key",
          next: "treasure",
          need: "brass key",
        },
        { label: "Kick the door (bad idea)", next: "oops" },
        { label: "Step back to the clearing", next: "clearing" },
      ],
    },
    oops: {
      text:
        "You stub your toe. The owl laughs (quietly, but still).\n" +
        "The door remains stubbornly closed.",
      choices: [{ label: "Return to the clearing, wiser", next: "clearing" }],
    },
    treasure: {
      text:
        "The key turns with a soft click.\n" +
        "Inside the oak: a folded map, a chocolate coin, and a note —\n" +
        "“You finished Forest Key. Make your own rooms next!”",
      choices: [{ label: "Play again", next: "start", take: "*" }],
    },
  };

  /** @type {Set<string>} */
  let inventory = new Set();
  let current = "start";

  function renderInventory() {
    if (inventory.size === 0) {
      invEl.textContent = "—";
      return;
    }
    invEl.textContent = [...inventory].join(", ");
  }

  function go(id) {
    current = id;
    const room = rooms[id];
    if (!room) {
      storyEl.textContent = "Missing room: " + id;
      choicesEl.innerHTML = "";
      return;
    }

    storyEl.textContent = room.text;
    if (id === "treasure") {
      storyEl.classList.add("ending-room");
    } else {
      storyEl.classList.remove("ending-room");
    }

    choicesEl.innerHTML = "";
    room.choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.type = "button";
      const locked = choice.need && !inventory.has(choice.need);
      btn.textContent = locked
        ? `${choice.label} (need: ${choice.need})`
        : choice.label;
      btn.disabled = Boolean(locked);
      btn.addEventListener("click", () => {
        if (choice.give) inventory.add(choice.give);
        if (choice.take === "*") inventory = new Set();
        else if (choice.take) inventory.delete(choice.take);
        renderInventory();
        go(choice.next);
      });
      choicesEl.appendChild(btn);
    });
  }

  function restart() {
    inventory = new Set();
    renderInventory();
    go("start");
  }

  btnRestart.addEventListener("click", restart);
  restart();
})();
