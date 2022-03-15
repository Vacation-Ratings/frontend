const handleCarousel = (state = 0, action) => {
  const length = 3;

  switch (action.type) {
    case "SET_INCREASE":
      return action.payload > length ? 0 : action.payload;

    case "SET_DECREASE":
      return action.payload < 0 ? length : action.payload;

    default:
      return state;
  }
};

export default handleCarousel;
