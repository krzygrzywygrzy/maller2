const dateFormat = (number) => {
  const unformated = new Date(number).toUTCString();
  //TODO: format date
  //return unformated.getDate() + " " + parseInt(unformated.getMonth());
  return unformated;
};

export default dateFormat;
