const lengthVali = (text, length) => {
  const val = text.substr(0, length);
  const verify = val.length === length;

  return { val, verify };
};

export default lengthVali;
