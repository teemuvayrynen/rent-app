import { DynamodbTable } from "@cdktf/provider-aws/lib/dynamodb-table";
import { Construct } from "constructs";
import { dynamo_apartments_table } from "../variables";

export class ApartmentsStorage extends Construct {
  table: DynamodbTable;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.table = new DynamodbTable(this, "table", {
      name: dynamo_apartments_table,
      billingMode: "PAY_PER_REQUEST",
      hashKey: "country",
      rangeKey: "id",
      attribute: [
        { name: "id", type: "S" },
        { name: "ownerId", type: "S" },
        { name: "country", type: "S" },
        { name: "endDate", type: "S" },
        { name: "monthlyPrice", type: "N" },
        { name: "city", type: "S" }
      ],
      localSecondaryIndex: [
        {
          name: "country-ownerId-index",
          projectionType: "ALL",
          rangeKey: "ownerId"
        },
        {
          name: "country-price-index",
          projectionType: "ALL",
          rangeKey: "monthlyPrice"
        },
        {
          name: "country-endDate-index",
          projectionType: "ALL",
          rangeKey: "endDate"
        },
        {
          name: "country-city-index",
          projectionType: "ALL",
          rangeKey: "city"
        }
      ]
    });
  }
}