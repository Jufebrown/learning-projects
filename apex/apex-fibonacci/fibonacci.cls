List<integer> fibonacci = new List<integer>{0,1};
for (Integer i = 0; i < 12; i++) {
  fibonacci.add(fibonacci[i] + fibonacci[i + 1]);
  System.debug(fibonacci[i]);
}
