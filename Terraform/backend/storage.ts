import { DynamodbTable } from "@cdktf/provider-aws/lib/dynamodb-table";
import { Construct } from "constructs";

export class ApartmentsStorage extends Construct {
  table: DynamodbTable;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.table = new DynamodbTable(this, "table", {
      name: "dynamo-apartment-storage",
      billingMode: "PAY_PER_REQUEST",
      hashKey: "id",
      rangeKey: "geohash",
      attribute: [
        { name: "id", type: "S" },
        { name: "geohash", type: "S" },        
      ],
    });
  }
}