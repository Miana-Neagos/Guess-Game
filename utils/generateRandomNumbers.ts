type RandomNumberProps = {
  min: number;
  max: number;
  excludeNr: number;
};

const generateRandomNumber = ({ min, max, excludeNr}: RandomNumberProps) => {
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === excludeNr) {
    return generateRandomNumber({min, max, excludeNr});
  } else {
    return rndNum;
  }
};

export default generateRandomNumber;
