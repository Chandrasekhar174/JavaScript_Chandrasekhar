import * as utility from './invertory.mjs';

  console.log(utility.findCarinfoById(34));
  console.log(utility.lastCarInfo());
  console.log(utility.sortByCarModel());
  console.log(utility.getAllYear());
  console.log(utility.getOlderCarInfo(2000));
  console.log(JSON.stringify(utility.getInfoByCarMake("BMW","audi")));
