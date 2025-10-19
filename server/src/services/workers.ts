import syncAvailability from "../utils/availability.js";

class Worker {
  public sync = async () => {
    const results = syncAvailability();
    return results;
  }
}

const WorkerService = new Worker();
export default WorkerService
