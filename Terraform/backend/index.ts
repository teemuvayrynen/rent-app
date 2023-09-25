import { Construct } from "constructs";
import { ApartmentsStorage } from "./storage";
import { ApartmentsApi } from "./apartmentsApi";
import { Cognito } from "./Cognito";

export class ServerlessBackend extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const storage = new ApartmentsStorage(this, "storage");

    new ApartmentsApi(this, "api", storage.table);

    new Cognito(this, "cognito")
  }
} 