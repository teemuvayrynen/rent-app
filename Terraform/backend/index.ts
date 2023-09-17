import { Construct } from "constructs";
import { ApartmentsStorage } from "./storage";
import { ApartmentsApi } from "./apartmentsApi";

export class ServerlessBackend extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const storage = new ApartmentsStorage(this, "storage");

    new ApartmentsApi(this, "api", storage.table);

  }
} 