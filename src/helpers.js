function choice(items) {
  if (items.length === 0) return null;
  const random = Math.floor(Math.random() * items.length);
  return items[random];
}

function remove(items, item) {
  const i = items.indexOf(item);
  if (i === -1) return null;
  return items.splice(i, 1);
}

export {choice, remove};