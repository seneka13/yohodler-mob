import { z } from "zod";

const RateSchema = z.object({
  ask: z.number().default(0),
  bid: z.number().default(0),
  diff24h: z.number().default(0),
  rate: z.number().default(0),
});

const RateCollectionSchema = z.record(
  z.string(),
  z.record(z.string(), RateSchema)
);

export const fetchRatesData = async () => {
  try {
    const response = await fetch(
      "https://app.youhodler.com/api/v3/rates/extended"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch rates data");
    }
    const rawData = await response.json();
    return RateCollectionSchema.parse(rawData);
  } catch (error) {
    console.log(error);
  }
};
