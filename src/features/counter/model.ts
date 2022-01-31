import { $increment } from "@/features/counter/events";
import { domain } from "@/utils/domain";

export const $count = domain.createStore<number>(0, { name: "counter" });

$count.on($increment, state => state + 1);
