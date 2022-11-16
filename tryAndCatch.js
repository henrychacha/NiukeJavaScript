try {
    throw 'myException'; // generates an exception
  } catch (e) {
    // statements to handle any exceptions
    console.log(e) //'MyException;
  }
  finally{
    console.log('finally')
  }
