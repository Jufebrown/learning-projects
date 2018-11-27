public class LeadTriggerHandler {
  public static void beforeInsert(List<lead> newleads) {
    for (lead l : newleads) {
      l.lastname = l.lastname + 'new';
    }
  }
}