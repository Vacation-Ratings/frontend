import { setIncrease, setDecrease } from "../store/carouselActions";

const position = useSelector((state) => state);
const dispatch = useDispatch();
const next = () => dispatch(setIncrease(position + 1));
const prev = () => dispatch
