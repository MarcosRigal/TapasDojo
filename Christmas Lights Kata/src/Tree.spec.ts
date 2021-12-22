import Tree from './Tree'



test('Construct', () => {
  const width = 100, height = 100;
  const tree = new Tree(width, height);


  expect(tree).toBeInstanceOf(Tree);
  expect(tree.height).toEqual(height);
  expect(tree.width).toEqual(width);
  expect(tree.lights.length).toEqual(height)
  expect(tree.lights[0].length).toEqual(width)
})

test('Get status', () => {
  const tree = new Tree(2,2);

  const result = tree.getStatus(1,1);
  
  expect(result).toBeFalsy()
});



test('Turn On', () => {
  const tree = new Tree(2,2);
  const x = 0, y = 0 

  tree.turnOn(x, y);
  
  expect(tree.getStatus(0, 0)).toBeTruthy()
});

test('Toggle', () => {
  const tree = new Tree(2,2);
  const x = 0, y = 0 

  tree.toggle(x, y);
  
  expect(tree.getStatus(0, 0)).toBeTruthy()

  tree.toggle(x, y);
  
  expect(tree.getStatus(0, 0)).toBeFalsy()
});

test('Turn Off', () => {
  const tree = new Tree(2,2);
  const x = 0, y = 0 

  tree.turnOn(x, y);
  tree.turnOff(x, y);
  
  expect(tree.getStatus(0, 0)).toBeFalsy()
});

test('Turn On Range', () => {
  const tree = new Tree(5,5);
  const x1 = 0, y1 = 0, x2 = 3, y2 = 2 

  tree.turnOnRange(x1, y1, x2, y2);

  const range = tree.getRange(x1, y1, x2, y2)
  expect(range.every(light => light.isOn())).toBeTruthy()
});

test('Turn Off Range', () => {
  const tree = new Tree(5,5);
  const x1 = 0, y1 = 0, x2 = 3, y2 = 2 

  tree.turnOnRange(0, 0, 4, 4);
  tree.turnOffRange(x1, y1, x2, y2);

  const range = tree.getRange(x1, y1, x2, y2)
  expect(range.every(light => light.isOn())).toBeFalsy()
});

test('Toggle Range', () => {
  const tree = new Tree(5,5);
  const x1 = 0, y1 = 0, x2 = 3, y2 = 2 

  tree.toggleRange(x1, y1, x2, y2);

  let range = tree.getRange(x1, y1, x2, y2)
  expect(range.every(light => light.isOn())).toBeTruthy()

  tree.toggleRange(x1, y1, x2, y2);

  range = tree.getRange(x1, y1, x2, y2)
  expect(range.every(light => light.isOn())).toBeFalsy()
});