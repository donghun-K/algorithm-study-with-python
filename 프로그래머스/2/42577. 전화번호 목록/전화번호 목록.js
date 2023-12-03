function solution(phone_book) {
  const phoneBook = [...phone_book];
  phoneBook.sort();

  for (let i = 0; i < phoneBook.length - 1; i++) {
    const curLength = phoneBook[i].length;
    if (phoneBook[i] === [...phoneBook[i + 1]].slice(0, curLength).join(''))
      return false;
  }
  return true;
}
