// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
  if (pickupLocation >= 42) {
    return pickupLocation - 42;
  } else {
    return 42 - pickupLocation; }
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock >= endBlock) {
    return (startBlock - endBlock) * 264;
  } else {
    return (endBlock - startBlock) * 264; }
}

function calculatesFarePrice(startBlock, endBlock) {
  let distance = distanceTravelledInFeet(startBlock, endBlock);
  if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance < 2000) {
    return 0.02 * (distance - 400);
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far'
  }
  return fare;
}