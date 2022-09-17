import {AiFillBook,AiTwotoneExperiment,AiOutlineCloseSquare,AiOutlineLeftSquare,AiOutlineTeam} from 'react-icons/ai'
import {BsHeadphones,BsThermometerLow,BsThermometerHalf,BsThermometerHigh} from 'react-icons/bs'
import {BiBasketball,BiPalette,BiTv,BiWorld,BiDish} from 'react-icons/bi'
import {MdOutlineHistoryEdu} from 'react-icons/md'


const categorydata={
    "byCategory": {
      "General Knowledge": <AiFillBook />,
      "Society & Culture": <AiOutlineTeam />,
      "History": <MdOutlineHistoryEdu /> ,
      "Sport & Leisure": <BiBasketball />,
      "Geography": <BiWorld />,
      "Music": <BsHeadphones />,
      "Film & TV": <BiTv />,
      "Science": <AiTwotoneExperiment />,
      "Food & Drink": <BiDish />,
      "Arts & Literature": <BiPalette />
    },
    "byState": {
      "rejected": 3511,
      "approved": 7521,
      "pending": 5024
    },
    "byDifficulty": {
      "easy": <BsThermometerLow />,
      "medium": <BsThermometerHalf />,
      "hard": <BsThermometerHigh />,
    },
    "lastCreated": "2022-04-19T11:42:20.471+00:00",
    "lastReviewed": "2022-04-19T20:57:47.644+00:00"
  }
  export default categorydata