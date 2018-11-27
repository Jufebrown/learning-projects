public class Summarize {
    public static object findMax(List<object> numList) {
          numList.sort();
          integer lastIndex = numList.size() - 1;
          return numList[lastIndex];
    }
}
