
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({
    amount: 330000, 
    term: 30, 
    rate: 6.75
  })).toEqual("2140.37");
  expect(calculateMonthlyPayment({
    amount: 330000, 
    term: 30, 
    rate: .0675
  })).toEqual("926.01"); // consider limiting the input to percent values only //
  expect(calculateMonthlyPayment({
    amount: 0, 
    term: 0, 
    rate: 0
  })).toEqual("NaN");
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({
    amount: 300031, 
    term: 30, 
    rate: .0675
  })).toEqual("1946.00");
});


